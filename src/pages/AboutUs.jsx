import React, { useEffect, useRef, useState } from "react";
import "../styles/Home.css";
import "../styles/About.css";
import gsap from "gsap";
import Navbar from "../components/Navbar/Navbar";
import NavbarTop from "../components/Navbar/NavbarTop";
import SocialShare from "../components/SocialShare";
import LeaveSoon from "../components/LeaveSoon";
import FooterBottom from "../components/FooterBottom";
import { Draggable } from "gsap/Draggable";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import CollaborationCard from "../components/CollaborationCard";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";

const AboutUs = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSocialShare, setShowSocialShare] = useState(false);
  const [showLeaveSoon, setShowLeaveSoon] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const handleMinimize = () => {
    setIsMinimized((prev) => !prev);
    setShowSocialShare((prev) => !prev);
  };

  const handleCloseSocialShare = () => {
    setIsMinimized(false);
    setTimeout(() => {
      setShowSocialShare(false);
    }, 500);
  };
  const handleCloseLeaveSoon = () => {
    setTimeout(() => {
      setShowLeaveSoon(false);
    }, 500);
  };
  const handleLeaveSoon = () => {
    setShowLeaveSoon((prev) => !prev);
  };

  const scrollingRef = useRef(null);

  useEffect(() => {
    gsap.to(scrollingRef.current, {
      xPercent: -50,
      repeat: -1,
      ease: "none",
      duration: 70,
    });
  }, []);

  const boxRefs = useRef([]);

  useEffect(() => {
    boxRefs.current.forEach((ref) => {
      if (ref) {
        Draggable.create(ref, {
          type: "x,y",
          bounds: ".about_content_main",
          inertia: true,
          edgeResistance: 0.85,
          zIndexBoost: true,
          onPress() {
            gsap.to(ref, {
              scale: 1.02,
              duration: 0.2,
              ease: "power2.out",
            });
          },
          onRelease() {
            gsap.to(ref, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          },
        });
      }
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>About | Pradip Ladva | {process.env.REACT_APP_APP_NAME}</title>
      </Helmet>
      <div className="main">
        <div className={`main_frame ${isMinimized ? "minimized" : "decrease"}`}>
          <div className="animation_circle_main">
            <div
              className={`circle_1_main ${isAboutPage ? "about_circle" : ""}`}
            >
              <div className="circle_1"></div>
            </div>
            <div
              className={`circle_2_main ${isAboutPage ? "about_circle" : ""}`}
            >
              <div className="circle_2"></div>
            </div>
          </div>
          <Navbar />
          <NavbarTop
            isMinimized={isMinimized}
            onMinimize={handleMinimize}
            leaveSoon={handleLeaveSoon}
          />
          <div
            className={`main_frame_content ${
              isAboutPage ? "about_content_main" : ""
            }`}
          >
            <div className="frame_content_inner">
              <HeroSection
                tag="About"
                title={<>Let’s get to know</>}
                scrollingText="pradip"
                highlight="each other"
                description={
                  <>
                    Let me introduce myself, my workflows, my collaborations,{" "}
                    <br />
                    and the technologies I like to use to bring my projects to
                    life.
                  </>
                }
              />
              <CollaborationCard />
            </div>
            <Footer />
          </div>
          <FooterBottom />
          {showLeaveSoon && <LeaveSoon onClose={handleCloseLeaveSoon} />}
        </div>
        {showSocialShare && <SocialShare onClose={handleCloseSocialShare} />}
      </div>
    </>
  );
};

export default AboutUs;
