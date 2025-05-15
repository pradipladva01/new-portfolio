import React, { useEffect, useState } from "react";
import "../components/Footer/Footer.css";
import AnimatedLinkButton from "./AnimatedLinkButton";

const FooterBottom = () => {
  const [time, setTime] = useState("--:--");
  const [timeEmoji, setTimeEmoji] = useState("☀️");

  const updateTime = () => {
    const now = new Date();
    const options = {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    const formatter = new Intl.DateTimeFormat([], options);
    const formattedTime = formatter.format(now);
    const hour = parseInt(formattedTime.split(":")[0], 10);
    const isDay = hour >= 6 && hour < 18;
    setTime(formattedTime);
    setTimeEmoji(isDay ? "☀️" : "🌙");
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="footer_bottom">
        <div></div>
        <aside className="footer_inner">
          <div className="location_info_main">
            <div className="location_info">
              <p>
                Based in <span>India</span> <span className="emoji">🇮🇳</span>
              </p>
              <p>
                Now in <span>Surat</span> <span className="emoji">📍</span>
              </p>
              <p>
                Local time <span>{time}</span>{" "}
                <span className="emoji">{timeEmoji}</span>
              </p>
            </div>
          </div>
          <div className="get_in_touch_main">
            <AnimatedLinkButton to="/contact" text="Let's-connect" emoji="🤝" />
          </div>
        </aside>
      </div>
    </>
  );
};

export default FooterBottom;
