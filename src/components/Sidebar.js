import React from "react";
import { useState } from "react";

import { ButtonGroup } from "react-bootstrap";

import { useThemeContext } from "../hook/useThemeContext";

import ThemeButton from "./ThemeButton";

function Sidebar() {
  const { theme } = useThemeContext();
  const [activateSidebar, setActivateSidebar] = useState(null);
  const [activateMiniSidebar, setActivateMiniSidebar] = useState(null);
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (window.screen.width > 800 && document.documentElement.scrollTop > 20) {
      setActivateSidebar(true);
      setActivateMiniSidebar(null);
    } else {
      setActivateSidebar(null);
      if (document.documentElement.scrollTop > 20) { setActivateMiniSidebar(true); }
      else {
        setActivateMiniSidebar(null);
      }
    }
  }
  return (
    <>
      {activateSidebar && (
        <>
          {" "}
          <div>
            <ButtonGroup
              vertical
              id="sideBar"
              className={
                `p-2 sideBar-` + (theme === "-dark" ? "dark" : "light")
              }
            >
              <a
                id="scrolltopbtn"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Scroll to navigation bar"
                className={
                  `btn shadow border-3 border-` +
                  (theme === "-dark" ? "light text-light" : "dark text-dark")
                }
                href="#navbartop"
              >
                Scroll to Top{" "}
                <i
                  className={
                    `fa-solid fa-up-long ` +
                    (theme === "-dark" ? "text-light" : "text-dark")
                  }
                ></i>
              </a>
              <a
                id="scrolltopbtn"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Scroll to see My Intro..."
                className={
                  `btn shadow border-3 border-` +
                  (theme === "-dark" ? "light text-light" : "dark text-dark")
                }
                href="#Home"
              >
                Introduction
              </a>
              <a
                id="scrolltopbtn"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Scroll to know About Me.."
                className={
                  `btn shadow border-3 border-` +
                  (theme === "-dark" ? "light text-light" : "dark text-dark")
                }
                href="#About"
              >
                About Me
              </a>
              <a
                id="scrolltopbtn"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Scroll to check my Skills..."
                className={
                  `btn shadow border-3 border-` +
                  (theme === "-dark" ? "light text-light" : "dark text-dark")
                }
                href="#Skills"
              >
                My Skills
              </a>{" "}
              <a
                id="scrolltopbtn"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Scroll to leave me a message..."
                className={
                  `btn shadow border-3 border-` +
                  (theme === "-dark" ? "light text-light" : "dark text-dark")
                }
                href="#Contact"
              >
                Contact Me
              </a>
            </ButtonGroup>
            <div
              id="sideThemebtn"
              className={
                `p-2 sideThemebtn-` + (theme === "-dark" ? "dark" : "light")
              }
            >
              <ThemeButton></ThemeButton>
            </div>
          </div>{" "}
        </>
      )}
      {activateMiniSidebar && (
        <>
          {" "}
          <div>
            <ButtonGroup
              vertical
              id="sideBar"
              className={
                `p-2 sideBar-` + (theme === "-dark" ? "dark" : "light")
              }
            >
              <a
                id="scrolltopbtn"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Scroll to navigation bar"
                style={{
                  width: "3rem",
                  position: "fixed",
                  right: 15,
                  bottom: 30,
                }}
                className={
                  `btn shadow border-3 border-` +
                  (theme === "-dark" ? "light text-light" : "dark text-dark")
                }
                href="#navbartop"
              >
                <i
                  className={
                    `fa-solid fa-up-long ` +
                    (theme === "-dark" ? "text-light" : "text-dark")
                  }
                ></i>
              </a>
            </ButtonGroup>
          </div>{" "}
        </>
      )}
    </>
  );
}

export default Sidebar;
