import React, { useEffect, useRef, useState } from "react";
import "../styles/Home.css";
import "../styles/About.css";
import gsap from "gsap";
import Navbar from "../components/Navbar/Navbar";
import NavbarTop from "../components/Navbar/NavbarTop";
import SocialShare from "../components/SocialShare";
import LeaveSoon from "../components/LeaveSoon";
import FooterBottom from "../components/FooterBottom";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import CollaborationCard from "../components/CollaborationCard";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import useSocialUI from "../components/useSocialUI";
import { motion } from "framer-motion";

const AboutUs = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const [boxes, setBoxes] = useState({
    box1: { x: 50, y: 50 },
    box2: { x: 200, y: 100 },
    box3: { x: 120, y: 220 },
  });

  // Update position on drag end
  const handleDragEnd = (id, event, info) => {
    setBoxes((prev) => ({
      ...prev,
      [id]: {
        x: info.point.x,
        y: info.point.y,
      },
    }));
  };

  const {
    isMinimized,
    showSocialShare,
    showLeaveSoon,
    handleMinimize,
    handleCloseSocialShare,
    handleLeaveSoon,
    handleCloseLeaveSoon,
  } = useSocialUI();

  const scrollingRef = useRef(null);

  useEffect(() => {
    gsap.to(scrollingRef.current, {
      xPercent: -50,
      repeat: -1,
      ease: "none",
      duration: 70,
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
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 500,
                  border: "2px dashed #bbb",
                  borderRadius: 10,
                  marginTop: 20,
                  overflow: "hidden", // keep boxes inside container visually
                }}
              >
                {Object.entries(boxes).map(([id, pos]) => (
                  <motion.div
                    key={id}
                    drag
                    dragMomentum={false}
                    dragConstraints={{
                      top: 0,
                      left: 0,
                      right: 600,
                      bottom: 500,
                    }}
                    onDragEnd={(event, info) => handleDragEnd(id, event, info)}
                    style={{
                      position: "absolute",
                      top: pos.y,
                      left: pos.x,
                      width: 100,
                      height: 100,
                      backgroundColor: "#90caf9",
                      border: "2px solid #1976d2",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "grab",
                      userSelect: "none",
                    }}
                  >
                    {id}
                  </motion.div>
                ))}
              </div>
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
