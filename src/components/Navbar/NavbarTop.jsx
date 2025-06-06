import React, { useState, useEffect } from "react";

import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const NavbarTop = ({ isMinimized, onMinimize, leaveSoon }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const isContactPage = location.pathname === "/contact";
  const isWorkPage = location.pathname === "/work";

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <>
      <div className="navbar_top_section">
        <Link
          to="/"
          className={`navbar_top_link ${isAboutPage ? "about_top_bar" : ""} ${
            isContactPage ? "contact_top_bar" : ""
          } ${isWorkPage ? "work_top_bar" : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="114"
            height="16"
            viewBox="0 0 114 16"
            fill="none"
          >
            <path
              d="M1.41122 4.27461H2.68583V5.40933L2.48376 6.29534H2.84127C3.1677 5.0829 4.1936 4.11917 5.96562 4.11917C8.20397 4.11917 9.64956 5.84456 9.64956 8.14508C9.64956 10.4301 8.20397 12.1554 5.96562 12.1554C4.1936 12.1554 3.1677 11.1917 2.84127 9.99482H2.48376L2.68583 10.8653V14.829H1.41122V4.27461ZM2.68583 8.14508C2.68583 10.1969 4.00707 11.0674 5.59257 11.0674C7.1936 11.0674 8.37495 10.1658 8.37495 8.14508C8.37495 6.10881 7.1936 5.20725 5.59257 5.20725C4.00707 5.20725 2.68583 6.07772 2.68583 8.14508ZM11.4147 12V5.19171C11.4147 4.46114 11.7566 4.10363 12.4872 4.13471L16.7774 4.27461V5.36269L12.6893 5.2228V12H11.4147ZM17.9195 9.85492C17.9195 8.62694 18.65 7.78756 20.4532 7.60104L23.5309 7.3057C23.4532 5.89119 22.6915 5.19171 21.3547 5.19171C20.2355 5.19171 19.1941 5.68912 19.1941 7.15026H17.9506C17.9506 5.54922 19.163 4.11917 21.3547 4.11917C23.5153 4.11917 24.8055 5.54922 24.8055 7.61658V10.9119H25.9402V12H24.5723C23.9817 12 23.6552 11.6736 23.6552 11.0984V10.6788L23.8573 9.87047H23.4842C23.1889 11.0518 22.3651 12.1554 20.4998 12.1554C18.2614 12.1554 17.9195 10.6632 17.9195 9.85492ZM19.1941 9.69948C19.1941 10.5855 19.7537 11.0674 20.6552 11.0674C22.4117 11.0674 23.5309 9.85492 23.5309 8.25389L20.6708 8.54922C19.6915 8.64249 19.1941 8.93782 19.1941 9.69948ZM35.0531 12H33.7785V10.8653L33.9961 9.99482H33.6231C33.2967 11.1917 32.2552 12.1554 30.4987 12.1554C28.2604 12.1554 26.8148 10.4301 26.8148 8.12953C26.8148 5.84456 28.2604 4.11917 30.4987 4.11917C32.2552 4.11917 33.2967 5.0829 33.6231 6.29534H33.9961L33.7785 5.40933V0.575129H35.0531V12ZM33.7785 8.12953C33.7785 6.07772 32.4728 5.20725 30.8718 5.20725C29.2708 5.20725 28.0894 6.07772 28.0894 8.12953C28.0894 10.1969 29.2708 11.0674 30.8718 11.0674C32.4728 11.0674 33.7785 10.1969 33.7785 8.12953ZM39.4289 3.04663C38.7916 3.04663 38.3097 2.58031 38.3097 1.95855C38.3097 1.36788 38.7916 0.88601 39.4289 0.88601C40.0507 0.88601 40.5481 1.36788 40.5481 1.95855C40.5481 2.58031 40.0507 3.04663 39.4289 3.04663ZM36.8486 12V10.9119H39.0248V5.2228L37.4237 5.36269V4.27461L39.2113 4.11917C39.9419 4.05699 40.2217 4.46114 40.2217 5.05181V10.9119H42.3978V12H36.8486ZM44.0207 4.27461H45.2953V5.40933L45.0933 6.29534H45.4508C45.7772 5.0829 46.8031 4.11917 48.5751 4.11917C50.8135 4.11917 52.2591 5.84456 52.2591 8.14508C52.2591 10.4301 50.8135 12.1554 48.5751 12.1554C46.8031 12.1554 45.7772 11.1917 45.4508 9.99482H45.0933L45.2953 10.8653V14.829H44.0207V4.27461ZM45.2953 8.14508C45.2953 10.1969 46.6166 11.0674 48.2021 11.0674C49.8031 11.0674 50.9844 10.1658 50.9844 8.14508C50.9844 6.10881 49.8031 5.20725 48.2021 5.20725C46.6166 5.20725 45.2953 6.07772 45.2953 8.14508Z"
              fill="white"
            />
            <path
              className="ladva"
              d="M57.6692 1.04145H61.7884V2.02072H58.835V13.3523H61.7884V14.3316H57.6692V1.04145ZM63.7417 12V10.9119H65.9179V1.52332L64.3168 1.66321V0.575129L66.1199 0.419688C66.835 0.357513 67.1769 0.761657 67.1769 1.49223V10.9119H69.3375V12H63.7417ZM70.6521 9.85492C70.6521 8.62694 71.3827 7.78756 73.1858 7.60104L76.2635 7.3057C76.1858 5.89119 75.4241 5.19171 74.0873 5.19171C72.9682 5.19171 71.9267 5.68912 71.9267 7.15026H70.6832C70.6832 5.54922 71.8956 4.11917 74.0873 4.11917C76.248 4.11917 77.5381 5.54922 77.5381 7.61658V10.9119H78.6728V12H77.305C76.7143 12 76.3879 11.6736 76.3879 11.0984V10.6788L76.5899 9.87047H76.2169C75.9215 11.0518 75.0977 12.1554 73.2324 12.1554C70.9941 12.1554 70.6521 10.6632 70.6521 9.85492ZM71.9267 9.69948C71.9267 10.5855 72.4863 11.0674 73.3879 11.0674C75.1443 11.0674 76.2635 9.85492 76.2635 8.25389L73.4034 8.54922C72.4241 8.64249 71.9267 8.93782 71.9267 9.69948ZM87.7858 12H86.5112V10.8653L86.7288 9.99482H86.3557C86.0293 11.1917 84.9878 12.1554 83.2314 12.1554C80.993 12.1554 79.5474 10.4301 79.5474 8.12953C79.5474 5.84456 80.993 4.11917 83.2314 4.11917C84.9878 4.11917 86.0293 5.0829 86.3557 6.29534H86.7288L86.5112 5.40933V0.575129H87.7858V12ZM86.5112 8.12953C86.5112 6.07772 85.2055 5.20725 83.6044 5.20725C82.0034 5.20725 80.822 6.07772 80.822 8.12953C80.822 10.1969 82.0034 11.0674 83.6044 11.0674C85.2055 11.0674 86.5112 10.1969 86.5112 8.12953ZM95.6864 4.27461H96.9144L94.3962 12H91.8159L89.2667 4.27461H90.5102L92.9196 11.6425H93.2926L95.6864 4.27461ZM97.9149 9.85492C97.9149 8.62694 98.6455 7.78756 100.449 7.60104L103.526 7.3057C103.449 5.89119 102.687 5.19171 101.35 5.19171C100.231 5.19171 99.1895 5.68912 99.1895 7.15026H97.946C97.946 5.54922 99.1584 4.11917 101.35 4.11917C103.511 4.11917 104.801 5.54922 104.801 7.61658V10.9119H105.936V12H104.568C103.977 12 103.651 11.6736 103.651 11.0984V10.6788L103.853 9.87047H103.48C103.184 11.0518 102.361 12.1554 100.495 12.1554C98.2569 12.1554 97.9149 10.6632 97.9149 9.85492ZM99.1895 9.69948C99.1895 10.5855 99.7491 11.0674 100.651 11.0674C102.407 11.0674 103.526 9.85492 103.526 8.25389L100.666 8.54922C99.6869 8.64249 99.1895 8.93782 99.1895 9.69948ZM111.699 1.04145V14.3316H107.58V13.3523H110.534V2.02072H107.58V1.04145H111.699Z"
              fill="white"
            />
          </svg>
        </Link>
        <div className="navbar_controls">
          <button className="minimize_button" onClick={onMinimize}>
            {isMinimized ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="iconify iconify--custom"
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
              >
                <g fill="currentColor">
                  <path d="M8 2.67c.37 0 .67.3.67.66v4h4a.67.67 0 1 1 0 1.34h-4v4a.67.67 0 1 1-1.34 0v-4h-4a.67.67 0 1 1 0-1.34h4v-4c0-.36.3-.66.67-.66z" />
                </g>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="iconify iconify--custom"
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
              >
                <g fill="currentColor">
                  <path d="M2.67 8c0-.37.3-.67.66-.67h9.34a.67.67 0 1 1 0 1.34H3.33A.67.67 0 0 1 2.67 8" />
                </g>
              </svg>
            )}
          </button>
          <button
            onClick={toggleFullscreen}
            className="fullscreen_button"
            aria-label="Toggle Fullscreen"
          >
            {isFullscreen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className=" iconify iconify--custom"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
              >
                <g fill="currentColor">
                  <path d="M7.44.67q-.53 0-.9.02a2 2 0 0 0-.78.2 2 2 0 0 0-.87.87 2 2 0 0 0-.2.78q-.02.37-.02.9v1.23H3.44q-.53 0-.9.02a2 2 0 0 0-.78.2 2 2 0 0 0-.88.87 2 2 0 0 0-.2.78l-.01.9v5.12q0 .52.02.9a2 2 0 0 0 .2.78 2 2 0 0 0 .87.88 2 2 0 0 0 .78.2l.9.01h5.12q.53 0 .9-.02a2 2 0 0 0 .78-.2 2 2 0 0 0 .88-.87 2 2 0 0 0 .2-.78l.01-.9v-1.23h1.23q.52 0 .9-.02a2 2 0 0 0 .78-.2 2 2 0 0 0 .88-.87 2 2 0 0 0 .2-.78l.01-.9V3.44q0-.52-.02-.9a2 2 0 0 0-.2-.78 2 2 0 0 0-.87-.88 2 2 0 0 0-.78-.2l-.9-.01zM7.47 2h5.06q.56 0 .83.02a1 1 0 0 1 .28.05.7.7 0 0 1 .29.3q.02.03.05.27c.02.2.02.44.02.83v5.06q0 .56-.02.83a1 1 0 0 1-.05.27.7.7 0 0 1-.3.3 1 1 0 0 1-.28.05l-.82.02H7.47q-.57 0-.82-.02a1 1 0 0 1-.29-.05.7.7 0 0 1-.29-.3 1 1 0 0 1-.05-.28L6 8.53V3.47q0-.57.02-.82a1 1 0 0 1 .05-.29.7.7 0 0 1 .3-.29q.03-.02.28-.05Q6.9 2 7.47 2m-4 4h1.2v2.56q0 .52.02.9a2 2 0 0 0 .2.78 2 2 0 0 0 .87.88 2 2 0 0 0 .78.2l.9.01H10v1.2q0 .56-.02.83a1 1 0 0 1-.05.28.7.7 0 0 1-.3.29 1 1 0 0 1-.28.05q-.25.02-.82.02H3.47c-.39 0-.63 0-.82-.02a1 1 0 0 1-.29-.05.7.7 0 0 1-.29-.3 1 1 0 0 1-.05-.28Q2 13.1 2 12.53V7.47q0-.57.02-.82a1 1 0 0 1 .05-.29.7.7 0 0 1 .3-.29q.03-.03.28-.05T3.47 6"></path>
                </g>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="iconify iconify--custom"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M8.2 4c-1.12 0-1.82-.05-2.56.33a3 3 0 0 0-1.31 1.3C3.95 6.39 4 7.09 4 8.2v7.6c0 1.12-.05 1.82.33 2.56a3 3 0 0 0 1.3 1.31c.75.38 1.45.33 2.57.33h7.6c1.12 0 1.82.05 2.56-.33a3 3 0 0 0 1.31-1.3c.38-.75.33-1.45.33-2.57V8.2c0-1.12.05-1.82-.33-2.56a3 3 0 0 0-1.3-1.31C17.61 3.95 16.91 4 15.8 4Zm0 2h7.6c1.12 0 1.54.05 1.65.1a1 1 0 0 1 .44.45c.06.11.11.53.11 1.65v7.6c0 1.12-.05 1.54-.1 1.65a1 1 0 0 1-.45.44c-.11.06-.53.11-1.65.11H8.2a6 6 0 0 1-1.65-.1 1 1 0 0 1-.44-.45A6 6 0 0 1 6 15.8V8.2c0-1.12.05-1.54.1-1.65a1 1 0 0 1 .45-.44C6.66 6.05 7.08 6 8.2 6"
                />
              </svg>
            )}
          </button>
          <button className="close_button" onClick={leaveSoon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className=" iconify iconify--custom"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <g fill="currentColor">
                <path d="M3.53 3.53a.67.67 0 0 1 .94 0L8 7.06l3.53-3.53a.67.67 0 1 1 .94.94L8.94 8l3.53 3.53a.67.67 0 1 1-.94.94L8 8.94l-3.53 3.53a.67.67 0 1 1-.94-.94L7.06 8 3.53 4.47a.67.67 0 0 1 0-.94"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavbarTop;
