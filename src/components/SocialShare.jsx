import React, { useEffect, useState } from "react";
import closeIcon from "../resources/images/close_icon.svg";
import facebookIcon from "../resources/images/facebook_icon.svg";
import twitterIcon from "../resources/images/twitter_icon.svg";
import linkedinIcon from "../resources/images/linkedin_icon.svg";
import mailIcon from "../resources/images/email_icon.svg";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const SocialShare = ({ onClose }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseClick = () => {
    setAnimate(false);
    onClose();
  };
  return (
    <>
      <div className={`social_share ${animate ? "show" : ""}`}>
        <div class="social_share_inner">
          <div class="social_top">
            <h6>social-share</h6>
            <button className="close_button" onClick={handleCloseClick}>
              <img src={closeIcon} alt="close" />
            </button>
          </div>
          <div class="social_bottom">
            <span>share</span>
            <Link to="/">
              <img src={facebookIcon} alt={facebookIcon} />
            </Link>
            <Link to="/">
              <img src={twitterIcon} alt={twitterIcon} />
            </Link>
            <Link to="/">
              <img src={linkedinIcon} alt={linkedinIcon} />
            </Link>
            <Link to="/">
              <img src={mailIcon} alt={mailIcon} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialShare;
