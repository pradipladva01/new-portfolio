import React from "react";
import portrait from "../resources/images/portrait.JPG";
import AnimatedLinkButton from "./AnimatedLinkButton";
import { useLocation } from "react-router-dom";

const CollaborationCard = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const isContactPage = location.pathname === "/contact";
  const isWorkPage = location.pathname === "/work";
  return (
    <>
      <section
        className={`collaboration_section ${
          isAboutPage ? "about_collaboration" : ""
        } ${isContactPage ? "contact_collaboration" : ""} ${
          isWorkPage ? "work_collaboration" : ""
        }`}
      >
        <div className="container">
          <div className="collaboration_card_main">
            <div className="collaboration_card">
              <div className="collaboration_top">
                <h6>collaboration</h6>
              </div>
              <div className="collaboration_bottom">
                <div className="collaboration_img">
                  <img src={portrait} alt={portrait} />
                  <div className="hand_emoji">
                    <span>👋</span>
                  </div>
                </div>
                <div className="collaboration_content">
                  <h3>Let’s work together on your next project</h3>
                  <div className="get_in_touch_main">
                    <AnimatedLinkButton
                      to="/"
                      text="let's-get-in-touch"
                      emoji={
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--custom"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <g fill="currentColor">
                              <path d="M12 4a1 1 0 0 0-.707.293 1 1 0 0 0 0 1.414L16.586 11H5a1 1 0 0 0-1 1 1 1 0 0 0 1 1h11.586l-5.293 5.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 .26-.447 1 1 0 0 0 0-.18L20 12a1 1 0 0 0-.033-.166 1 1 0 0 0-.028-.143 1 1 0 0 0-.232-.398l-7-7A1 1 0 0 0 12 4"></path>
                            </g>
                          </svg>
                        </>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CollaborationCard;
