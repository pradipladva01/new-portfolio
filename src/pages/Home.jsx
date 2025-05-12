import React, { useState } from "react";
import "../styles/Home.css";
import Navbar from "../components/Navbar/Navbar";
import NavbarTop from "../components/Navbar/NavbarTop";
import SocialShare from "../components/SocialShare";
import LeaveSoon from "../components/LeaveSoon";

const Home = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSocialShare, setShowSocialShare] = useState(false);
  const [showLeaveSoon, setShowLeaveSoon] = useState(false);

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
  return (
    <>
      <div class="main">
        <div className={`main_frame ${isMinimized ? "minimized" : "decrease"}`}>
          <Navbar />
          <NavbarTop
            isMinimized={isMinimized}
            onMinimize={handleMinimize}
            leaveSoon={handleLeaveSoon}
          />
        {showLeaveSoon && <LeaveSoon onClose={handleCloseLeaveSoon} />}
        </div>
        {showSocialShare && <SocialShare onClose={handleCloseSocialShare} />}
      </div>
    </>
  );
};

export default Home;
