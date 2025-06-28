import React from "react";
import "../styles/Home.css";
import "../styles/About.css";
import Navbar from "../components/Navbar/Navbar";
import NavbarTop from "../components/Navbar/NavbarTop";
import SocialShare from "../components/SocialShare";
import LeaveSoon from "../components/LeaveSoon";
import FooterBottom from "../components/FooterBottom";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import CollaborationCard from "../components/CollaborationCard";
import { Link, useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import useSocialUI from "../components/useSocialUI";
import portrait from "../resources/images/portrait.JPG";
import AnimatedLinkButton from "../components/AnimatedLinkButton";

const AboutUs = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

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
                title={
                  <>
                    Let’s get to <br /> know
                  </>
                }
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
              <section className="about_section">
                <div className="container">
                  <div className="about_content_main">
                    <div className="about_me_box box">
                      <div className="about_me_top box_top">
                        <h6>about-me</h6>
                      </div>
                      <div className="about_me_bottom box_bottom">
                        <p>
                          Hi! I'm <span className="green">Pradip</span>, I'm a{" "}
                          <span className="blue">
                            Freelance Front-end Web Developer
                          </span>
                          {""}!
                        </p>
                        <p>
                          My focus is on{" "}
                          <span className="red">creative development</span>: my
                          skills described as the{" "}
                          <span className="purple">meeting point</span>, between{" "}
                          <span className="yellow">creativity</span> and{" "}
                          <span className="light_blue">
                            technical proficiency
                          </span>{" "}
                        </p>
                        <p>
                          I integrate complex but smooth <span>animations</span>{" "}
                          and <span className="blue">interactions</span>, into
                          my projects, to present the website information in an
                          <span className="red">engaging way</span>, and make it
                          a{" "}
                          <span className="light_blue">
                            memorable experience
                          </span>{" "}
                        </p>
                        <p>
                          I strive to deliver projects that are{" "}
                          <span className="purple">visually compelling</span> by
                          working closely with the {""}
                          <span className="yellow">designer</span> , but also
                          technically outstanding with a{" "}
                          <span>clean and properly structured code</span>. All
                          of this, without forgetting about{" "}
                          <span className="red">web performances</span> and{" "}
                          <span className="blue">technical SEO</span> aspects.
                        </p>
                      </div>
                    </div>
                    <div className="where_work_box box">
                      <div className="where_work_top box_top">
                        <h6>where-i-work</h6>
                      </div>
                      <div className="where_work_bottom box_bottom">
                        <p>Currently based in Surat, India 🇮🇳</p>
                        <p>
                          Available for remote collaborations across{" "}
                          <span className="red">India</span> 🇮🇳 and worldwide 🌎
                        </p>
                      </div>
                    </div>
                    <div className="portrait_box box">
                      <div className="portrait_box_top box_top">
                        <h6>portrait</h6>
                      </div>
                      <div className="portrait_box_bottom box_bottom">
                        <div className="image_main">
                          <img src={portrait} alt={portrait} />
                        </div>
                      </div>
                    </div>
                    <div className="online_box box">
                      <div className="online_box_top box_top">
                        <h6>me-online</h6>
                      </div>
                      <div className="online_box_bottom box_bottom">
                        <p>
                          <Link to="">
                            linkedin{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              className=" iconify iconify--custom"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <g fill="currentColor">
                                <path d="M7 6a1 1 0 0 0-1 1 1 1 0 0 0 1 1h7.59l-8.3 8.3a1 1 0 0 0 0 1.4 1 1 0 0 0 1.42 0L16 9.42V17a1 1 0 0 0 1 1 1 1 0 0 0 1-1V7l-.03-.17-.03-.14-.02-.07a1 1 0 0 0-.21-.33 1 1 0 0 0-.33-.21A1 1 0 0 0 17 6Z"></path>
                              </g>
                            </svg>
                          </Link>
                        </p>
                        <p>
                          <Link to="">
                            instagram{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              className=" iconify iconify--custom"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <g fill="currentColor">
                                <path d="M7 6a1 1 0 0 0-1 1 1 1 0 0 0 1 1h7.59l-8.3 8.3a1 1 0 0 0 0 1.4 1 1 0 0 0 1.42 0L16 9.42V17a1 1 0 0 0 1 1 1 1 0 0 0 1-1V7l-.03-.17-.03-.14-.02-.07a1 1 0 0 0-.21-.33 1 1 0 0 0-.33-.21A1 1 0 0 0 17 6Z"></path>
                              </g>
                            </svg>
                          </Link>
                        </p>
                        <p>
                          <Link to="">
                            twitter{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              className=" iconify iconify--custom"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <g fill="currentColor">
                                <path d="M7 6a1 1 0 0 0-1 1 1 1 0 0 0 1 1h7.59l-8.3 8.3a1 1 0 0 0 0 1.4 1 1 0 0 0 1.42 0L16 9.42V17a1 1 0 0 0 1 1 1 1 0 0 0 1-1V7l-.03-.17-.03-.14-.02-.07a1 1 0 0 0-.21-.33 1 1 0 0 0-.33-.21A1 1 0 0 0 17 6Z"></path>
                              </g>
                            </svg>
                          </Link>
                        </p>
                        <p>
                          <Link>
                            discord{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              className=" iconify iconify--custom"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <g fill="currentColor">
                                <path d="M7 6a1 1 0 0 0-1 1 1 1 0 0 0 1 1h7.59l-8.3 8.3a1 1 0 0 0 0 1.4 1 1 0 0 0 1.42 0L16 9.42V17a1 1 0 0 0 1 1 1 1 0 0 0 1-1V7l-.03-.17-.03-.14-.02-.07a1 1 0 0 0-.21-.33 1 1 0 0 0-.33-.21A1 1 0 0 0 17 6Z"></path>
                              </g>
                            </svg>
                          </Link>
                        </p>
                        <p>
                          <Link to="">
                            github{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              className=" iconify iconify--custom"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <g fill="currentColor">
                                <path d="M7 6a1 1 0 0 0-1 1 1 1 0 0 0 1 1h7.59l-8.3 8.3a1 1 0 0 0 0 1.4 1 1 0 0 0 1.42 0L16 9.42V17a1 1 0 0 0 1 1 1 1 0 0 0 1-1V7l-.03-.17-.03-.14-.02-.07a1 1 0 0 0-.21-.33 1 1 0 0 0-.33-.21A1 1 0 0 0 17 6Z"></path>
                              </g>
                            </svg>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="get_in_touch_main">
                    <AnimatedLinkButton
                      to="/contact"
                      text="about-me"
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
              </section>
              <section className="tech_stack_section">
                <div className="container">
                  <h1>
                    Some of the techs I like to <br /> <span>work with</span>
                  </h1>
                  <div className="tech_stack_main"></div>
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

export default AboutUs;
