import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import closeIcon from "../resources/images/close_icon.svg";
import linkedinIcon from "../resources/images/linkedin_icon.svg";
import instagramIcon from "../resources/images/instagram_icon.svg";
import twitterIcon from "../resources/images/twitter_icon.svg";
import githubIcon from "../resources/images/github_icon.svg";
import discordIcon from "../resources/images/discord_icon.svg";
import { Link, useLocation } from "react-router-dom";

const LeaveSoon = ({ onClose }) => {
  const [animate, setAnimate] = useState(true);
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
      setTimeout(() => {
        onClose();
      }, 500);
    }, 8000);

    const progressInterval = setInterval(() => {
      if (!isPaused) {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(progressInterval);
            return 0;
          }
          return prev - 1.25;
        });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onClose, isPaused]);

  const handleCloseClick = () => {
    setAnimate(false);
    setTimeout(() => {
      onClose();
    }, 500);
  };
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };
  return (
    <>
      <div
        className={`leave_soon ${animate ? "show" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="leave_soon_inner">
          <div className={`progress_bar ${isAboutPage ? "about_page" : ""}`}>
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="leave_soon_top">
            <button className="close_button" onClick={handleCloseClick}>
              <img src={closeIcon} alt={closeIcon} />
            </button>
          </div>
          <div className="leave_soon_bottom">
            <p>Do you want to leave so soon? :(</p>
            <p>
              If you want to keep in touch, what <br /> about connecting on
              social media?
            </p>
            <div className="social_profiles">
              <Link to="">
                <img src={linkedinIcon} alt={linkedinIcon} />
              </Link>
              <Link to="">
                <img src={instagramIcon} alt={instagramIcon} />
              </Link>
              <Link to="">
                <img src={twitterIcon} alt={twitterIcon} />
              </Link>
              <Link to="">
                <img src={discordIcon} alt={discordIcon} />
              </Link>
              <Link to="">
                <img src={githubIcon} alt={githubIcon} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveSoon;
