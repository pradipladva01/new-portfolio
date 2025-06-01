import React, { useEffect, useRef } from "react";
import "../styles/Home.css";
import gsap from "gsap";
import Navbar from "../components/Navbar/Navbar";
import NavbarTop from "../components/Navbar/NavbarTop";
import SocialShare from "../components/SocialShare";
import LeaveSoon from "../components/LeaveSoon";
import FooterBottom from "../components/FooterBottom";
import portrait from "../resources/images/portrait.JPG";
import { Draggable } from "gsap/Draggable";
import { Link } from "react-router-dom";
import AnimatedLinkButton from "../components/AnimatedLinkButton";
import ProjectData from "./data/ProjectData";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import CollaborationCard from "../components/CollaborationCard";
import HeroSection from "../components/HeroSection";
import useSocialUI from "../components/useSocialUI";

gsap.registerPlugin(Draggable);

const Home = () => {
  const boxRefs = useRef([]);

  useEffect(() => {
    boxRefs.current.forEach((ref) => {
      if (ref) {
        Draggable.create(ref, {
          type: "x,y",
          bounds: ".about_content_main",
          inertia: true,
          edgeResistance: 1,
          zIndexBoost: true,
        });
      }
    });
  }, []);

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
        <title>Pradip Ladva | {process.env.REACT_APP_APP_NAME}</title>
      </Helmet>
      <div className="main">
        <div className={`main_frame ${isMinimized ? "minimized" : "decrease"}`}>
          <div className="animation_circle_main">
            <div className="circle_1_main">
              <div className="circle_1"></div>
            </div>
            <div className="circle_2_main">
              <div className="circle_2"></div>
            </div>
          </div>
          <Navbar />
          <NavbarTop
            isMinimized={isMinimized}
            onMinimize={handleMinimize}
            leaveSoon={handleLeaveSoon}
          />
          <div className="main_frame_content">
            <div className="frame_content_inner">
              <HeroSection
                tag="home"
                title="Hi, I’m Pradip, a"
                highlight="creative"
                scrollingText="developer"
                role="developer"
                description={
                  <>
                    I bring value to web development projects by merging
                    <br /> technical expertise with creativity and aesthetics.
                  </>
                }
              />
              <section className="about_section">
                <div className="container">
                  <h1>
                    Your <span>creative</span> web developer
                  </h1>
                  <div className="about_content_main">
                    <div
                      className="about_me_box box"
                      ref={(el) => (boxRefs.current[0] = el)}
                    >
                      <div className="about_me_top box_top">
                        <h6>about-me</h6>
                      </div>
                      <div className="about_me_bottom box_bottom">
                        <p>
                          Nice to meet you! I'm Pradip, I'm a{" "}
                          <span>Freelance Web Developer</span>{" "}
                        </p>
                        <p>
                          I'm passionate about both{" "}
                          <span className="blue">web design</span> and{" "}
                          <span className="red">web development</span>, with a
                          particular focus on{" "}
                          <span className="yellow">front-end development</span>{" "}
                          in all of its aspects. This is where both my{" "}
                          <span className="purple">technical</span> and{" "}
                          <span className="light_blue">creative</span> skills
                          can be used at their best.
                        </p>
                        <p>
                          I bring my <span>expertise</span> in my collaborations
                          with <span className="yellow">web agencies</span>,{" "}
                          <span className="blue">design studios</span>, and
                          other{" "}
                          <span className="red">freelance professionals</span>{" "}
                          in the field, to add value to the projects I work on.{" "}
                        </p>
                        <p>
                          <span className="purple">Coding</span> for me is not
                          just my work, I like {""}
                          <span className="red">experimenting</span> with many{" "}
                          <span className="yellow">technologies</span> and I
                          also maintain some <span>personal projects</span> .
                          Whenever I can, I like to contribute to{" "}
                          <span>open-source</span> to give back to the
                          community.
                        </p>
                      </div>
                    </div>
                    <div
                      className="where_work_box box"
                      ref={(el) => (boxRefs.current[1] = el)}
                    >
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
                    <div
                      className="portrait_box box"
                      ref={(el) => (boxRefs.current[2] = el)}
                    >
                      <div className="portrait_box_top box_top">
                        <h6>portrait</h6>
                      </div>
                      <div className="portrait_box_bottom box_bottom">
                        <div className="image_main">
                          <img src={portrait} alt={portrait} />
                        </div>
                      </div>
                    </div>
                    <div
                      className="hobbies_box box"
                      ref={(el) => (boxRefs.current[3] = el)}
                    >
                      <div className="hobbies_box_top box_top">
                        <h6>hobbies</h6>
                      </div>
                      <div className="hobbies_box_bottom box_bottom">
                        <p>🏏 cricket</p>
                        <p>🎧 music</p>
                        <p>✈️ traveling</p>
                      </div>
                    </div>
                    <div
                      className="online_box box"
                      ref={(el) => (boxRefs.current[4] = el)}
                    >
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
              <section className="project_section">
                <div className="container">
                  <h1>
                    Projects <span>highlight</span>
                  </h1>
                  <div className="projects_list">
                    {ProjectData.slice(0, 3).map((project) => (
                      <Link to={project.link} key={project.id}>
                        <div className="project_box">
                          <div className="number">{project.number}</div>
                          <h3>{project.title}</h3>
                          <div className="project_year">{project.year}</div>
                          <div className="project_tech">
                            {project.tech.map((techItem, i) => (
                              <div className="pill" key={i}>
                                {techItem}
                              </div>
                            ))}
                          </div>
                          <div className="project_image">
                            <div className="image_card">
                              <img src={project.image} alt={project.title} />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="get_in_touch_main">
                    <AnimatedLinkButton
                      to="/"
                      text="all-projects"
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

export default Home;
