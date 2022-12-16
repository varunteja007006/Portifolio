import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import resume from "../assests/varun_resume_pic.pdf";
import { useThemeContext } from "../hook/useThemeContext";
import ThemeButton from "./ThemeButton";

function Topnavbar() {
  const { theme } = useThemeContext();

  return (
    <div>
      <Navbar
        id="navbartop"
        collapseOnSelect
        expand="lg"
        className={`navbartop${theme} navbar${theme}`}
      >
        <Container>
          <Navbar.Brand href="#Home">
            <h1
              className={
                `m-0 p-0 brand-h1` + (theme === "-dark" ? `-dark` : ``)
              }
            >
              My Portifolio
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <a
                href={resume}
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Click to download my resume"
                className={
                  `btn me-3 shadow-sm ` +
                  (theme === "-dark" ? "send-btn-dark" : "send-btn")
                }
                download
              >
                <i className="fa-solid fa-file-arrow-down"></i> Resume
              </a>
              <ThemeButton></ThemeButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Topnavbar;
