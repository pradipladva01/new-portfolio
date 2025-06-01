import React, { useEffect, useRef, useState } from "react";
import "../styles/Home.css";
import "../styles/About.css";
import gsap from "gsap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from "../components/Navbar/Navbar";
import NavbarTop from "../components/Navbar/NavbarTop";
import SocialShare from "../components/SocialShare";
import LeaveSoon from "../components/LeaveSoon";
import FooterBottom from "../components/FooterBottom";
import { Draggable } from "gsap/Draggable";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import AnimatedLinkButton from "../components/AnimatedLinkButton";
import { useSnackbar } from "notistack";
import useSocialUI from "../components/useSocialUI";

const validationSchema = Yup.object({
  fullName: Yup.string().required(
    "Oops! I need a name to know who's saying hi."
  ),
  website: Yup.string()
    .url("That link’s a bit shy—try giving it the right format.")
    .nullable(),
  email: Yup.string()
    .email("That email looks like it took a wrong turn—mind fixing it?")
    .required("Without your email, my replies get lost in space."),
  message: Yup.string().required("I’m all ears—don’t keep me waiting!"),
});

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
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

  const {
    isMinimized,
    showSocialShare,
    showLeaveSoon,
    handleMinimize,
    handleCloseSocialShare,
    handleLeaveSoon,
    handleCloseLeaveSoon,
  } = useSocialUI();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      website: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      try {
        await fetch(
          "https://script.google.com/macros/s/AKfycbwyCiTNTgr1VIBoB2C1txqTJrVxH1jUwysjIIROfF7UuWLmW0pYiYKWj_EB25hEOr-K/exec",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
            mode: "no-cors",
          }
        );

        setTimeout(() => {
          setIsLoading(false);
          setShowThankYou(true);
          enqueueSnackbar(
            "Thank you for message! I'll get back to you soon :)",
            {
              variant: "success",
            }
          );
          resetForm();
        }, 2000);
      } catch (error) {
        setIsLoading(false);
        enqueueSnackbar("Failed to send message. Please try again later.", {
          variant: "error",
        });
      }
    },
  });

  return (
    <>
      <Helmet>
        <title>Contact | Pradip Ladva | {process.env.REACT_APP_APP_NAME}</title>
      </Helmet>
      <div className="main">
        <div className={`main_frame ${isMinimized ? "minimized" : "decrease"}`}>
          <div className="animation_circle_main">
            <div
              className={`circle_1_main ${
                isContactPage ? "contact_circle" : ""
              }`}
            >
              <div className="circle_1"></div>
            </div>
            <div
              className={`circle_2_main ${
                isContactPage ? "contact_circle" : ""
              }`}
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
              isContactPage ? "contact_content_main" : ""
            }`}
          >
            <div className="frame_content_inner">
              <HeroSection
                tag="Contact"
                title={<>Do you want to talk about a</>}
                scrollingText="hello"
                highlight="project"
                role="?"
                description={
                  <>
                    Whether you have a project you want to work on together or
                    just want <br /> us to meet and have a chat, you are in the
                    right place: let's get in touch.
                  </>
                }
              />
              <section className="contact_us_section">
                <div className="container">
                  <div className="contact_box_main">
                    <div className="contact_box">
                      <div className="contact_box_top">
                        <h6>write-me</h6>
                      </div>
                      <div className="contact_box_bottom">
                        {showThankYou ? (
                          <div className="thank_you_box">
                            <h2>Thank You!</h2>
                            <p>
                              Your message has been received. I'll get back to
                              you soon 🚀
                            </p>
                          </div>
                        ) : (
                          <form
                            noValidate
                            method="POST"
                            onSubmit={formik.handleSubmit}
                            autoComplete="off"
                          >
                            <div className="input_main">
                              <span className="number">01</span>
                              <div className="form_control">
                                <label htmlFor="fullName">
                                  <p>
                                    full-name
                                    <span className="input_star"> *</span>
                                  </p>
                                </label>
                              </div>
                              <input
                                autoComplete="off"
                                type="text"
                                name="fullName"
                                id="fullName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.fullName}
                              />
                              {formik.touched.fullName &&
                                formik.errors.fullName && (
                                  <span className="error">
                                    {formik.errors.fullName}
                                  </span>
                                )}
                            </div>
                            <div className="input_main">
                              <span className="number">02</span>
                              <div className="form_control">
                                <label htmlFor="website">
                                  <p>website</p>
                                </label>
                              </div>
                              <input
                                autoComplete="off"
                                type="text"
                                name="website"
                                id="website"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.website}
                              />
                              {formik.touched.website &&
                                formik.errors.website && (
                                  <span className="error">
                                    {formik.errors.website}
                                  </span>
                                )}
                            </div>
                            <div className="input_main">
                              <span className="number">03</span>
                              <div className="form_control">
                                <label htmlFor="email">
                                  <p>
                                    email<span className="input_star"> *</span>
                                  </p>
                                </label>
                              </div>
                              <input
                                autoComplete="off"
                                type="email"
                                name="email"
                                id="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                              />
                              {formik.touched.email && formik.errors.email && (
                                <span className="error">
                                  {formik.errors.email}
                                </span>
                              )}
                            </div>
                            <div className="input_main">
                              <span className="number">04</span>
                              <div className="form_control">
                                <label htmlFor="email">
                                  <p>
                                    your-message
                                    <span className="input_star"> *</span>
                                  </p>
                                </label>
                              </div>
                              <textarea
                                autoComplete="off"
                                type="text"
                                name="message"
                                id="message"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                              />
                              {formik.touched.message &&
                                formik.errors.message && (
                                  <span className="error">
                                    {formik.errors.message}
                                  </span>
                                )}
                            </div>
                            <div className="input_main">
                              <AnimatedLinkButton
                                disabled={isLoading}
                                text={
                                  isLoading ? "sending-magic" : "send-it-over!"
                                }
                                asButton={true}
                                type="submit"
                                emoji={
                                  isLoading ? (
                                    "💫"
                                  ) : (
                                    <>
                                      <svg
                                        data-v-d2a9e98c=""
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="img"
                                        className=" iconify iconify--custom"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24"
                                      >
                                        <g fill="currentColor">
                                          <path d="M6.8 3c-1.68 0-2.66-.05-3.62.44a4 4 0 0 0-1.74 1.74c-.3.57-.38 1.2-.41 1.94v.07C1 7.67 1 8.15 1 8.8v6.4c0 1.68-.05 2.66.44 3.62a4 4 0 0 0 1.74 1.74c.96.5 1.94.44 3.62.44h10.4c1.68 0 2.66.05 3.62-.44a4 4 0 0 0 1.74-1.74c.5-.96.44-1.94.44-3.62V8.8c0-.64 0-1.12-.03-1.6a1 1 0 0 0 0-.44 4 4 0 0 0-.4-1.58 4 4 0 0 0-1.75-1.74c-.96-.5-1.94-.44-3.62-.44Zm0 2h10.4c1.68 0 2.38.05 2.7.22q.58.3.88.87c.03.06.02.42.04.51l-7.56 5.3c-.66.46-.91.6-1.02.63a1 1 0 0 1-.48 0c-.1-.03-.36-.17-1.02-.63L3.18 6.6c.02-.09 0-.45.04-.5a2 2 0 0 1 .87-.88C4.42 5.05 5.12 5 6.8 5M3 8.92l4.54 3.18-4.46 4.03c-.02-.37-.08-.35-.08-.93Zm18 0v6.28c0 .58-.06.56-.08.93l-4.46-4.03ZM9.22 13.28l.37.26c.66.46 1.07.78 1.68.93a3 3 0 0 0 1.46 0c.6-.15 1.02-.47 1.68-.93l.37-.26 5.59 5.04c-.16.16-.26.36-.46.46-.33.17-1.03.22-2.71.22H6.8c-1.68 0-2.38-.05-2.7-.22-.2-.1-.31-.3-.47-.46Z"></path>
                                        </g>
                                      </svg>
                                    </>
                                  )
                                }
                              />
                            </div>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
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
