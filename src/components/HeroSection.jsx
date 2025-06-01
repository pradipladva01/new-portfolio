import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "../styles/Home.css";
import { useLocation } from "react-router-dom";

const HeroSection = ({
  tag,
  title,
  highlight,
  role,
  description,
  scrollingText,
}) => {
  const scrollingRef = useRef(null);
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const isContactPage = location.pathname === "/contact";
  const isWorkPage = location.pathname === "/work";

  useEffect(() => {
    gsap.to(scrollingRef.current, {
      xPercent: -50,
      repeat: -1,
      ease: "none",
      duration: 70,
    });
  }, []);

  return (
    <section className="home_section">
      <div className="scrolling_text">
        <div className="scrolling_inner" ref={scrollingRef}>
          <span>{scrollingText}&nbsp;</span>
          <span>{scrollingText}&nbsp;</span>
        </div>
      </div>
      <div className="container">
        <div
          className={`home_content ${isAboutPage ? "about_hero" : ""} ${
            isContactPage ? "contact_hero" : ""
          } ${isWorkPage ? "work_hero" : ""}`}
        >
          <span className="tag">{tag}</span>
          <h1>
            {title} <span>{highlight}</span>
            {role}
          </h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
