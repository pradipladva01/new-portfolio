import React from "react";
import "../styles/Home.css";
import Navbar from "../components/Navbar/Navbar";
import NavbarTop from "../components/Navbar/NavbarTop";
import SocialShare from "../components/SocialShare";
import LeaveSoon from "../components/LeaveSoon";
import FooterBottom from "../components/FooterBottom";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import CollaborationCard from "../components/CollaborationCard";
import HeroSection from "../components/HeroSection";
import useSocialUI from "../components/useSocialUI";
import { useLocation } from "react-router-dom";

const Work = () => {
  const location = useLocation();
  const isWorkPage = location.pathname === "/work";
  const {
    isMinimized,
    showSocialShare,
    showLeaveSoon,
    handleMinimize,
    handleCloseSocialShare,
    handleLeaveSoon,
    handleCloseLeaveSoon,
  } = useSocialUI();
  return (
    <>
      <Helmet>
        <title>Work | Pradip Ladva | {process.env.REACT_APP_APP_NAME}</title>
      </Helmet>
      <div className="main">
        <div className={`main_frame ${isMinimized ? "minimized" : "decrease"}`}>
          <div className="animation_circle_main">
            <div className={`circle_1_main ${isWorkPage ? "work_circle" : ""}`}>
              <div className="circle_1"></div>
            </div>
            <div className={`circle_2_main ${isWorkPage ? "work_circle" : ""}`}>
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
              isWorkPage ? "work_content_main" : ""
            }`}
          >
            <div className="frame_content_inner">
              <HeroSection
                tag="home"
                title="A collection of my best"
                highlight="projects"
                scrollingText="portfolio"
                role=""
                description={
                  <>
                    With many years in web development, I acquired extensive{" "}
                    <br />
                    experience working on projects across multiple industries{" "}
                    <br />
                    and technologies. Let me show you my best creations.
                  </>
                }
              />
              <section className="contact_us_section">
                <div className="container">
                  <div className="contact_box_main">
                    <div className="contact_box">
                      
                    </div>
                  </div>
                </div>
              </section>
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

export default Work;
