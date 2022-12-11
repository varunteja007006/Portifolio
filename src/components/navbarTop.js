import React from "react";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import resume from "../assests/varun_resume_pic.pdf";
import { useThemeContext } from "../hook/useThemeContext";

function NavbarTop() {
  const { theme, setTheme } = useThemeContext();
  const setlocal = () => {
    localStorage.setItem("theme", (theme === "-light"? '-dark': '-light'));
  };

  return (
    <div>
      <Navbar
        id="navbartop"
        collapseOnSelect
        expand="lg"
        className={`navbartop${theme}` + " " + `navbar${theme}`}
      >
        <Container>
          <Navbar.Brand href="#Home">
            <h1 className="brand-h1 m-0 p-0">MyPortifolio</h1>
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
                className="btn btn-dark-blue send-btn me-3 shadow-sm"
                download
              >
                <i className="fa-solid fa-file-arrow-down"></i> Resume
              </a>
              <Button
                variant="outline-dark-blue"
                className="shadow-sm theme-btn"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Click to change the theme"
                onClick={() => {
                  setTheme(theme === "-light" ? "-dark" : "-light");
                  setlocal();
                }}
              >
                {theme === "-light" ? (
                  <>
                    <span>
                      <i className="fa-regular fa-moon" alt=""></i>
                    </span>{" "}
                    Dark Mode
                  </>
                ) : (
                  <>
                    <span>
                      <i className="fa-regular fa-sun"></i>
                    </span>{" "}
                    Light Mode
                  </>
                )}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarTop;
