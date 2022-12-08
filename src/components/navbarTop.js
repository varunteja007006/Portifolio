import React from "react";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import testfile from "../assests/myImage.jpeg";

function navbarTop() {
  return (
    <div>
      <Navbar id="navbartop" collapseOnSelect expand="lg" className="navbartop">
        <Container>
          <Navbar.Brand href="#Home">
            <h1 className="brand-h1 m-0 p-0">MyPortifolio</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <a
                href={testfile}
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Click to download my resume"
                className="btn btn-dark-blue btn send-btn me-3 shadow-sm"
                download
              >
                <i className="fa-solid fa-file-arrow-down"></i>{" "}
                Resume
              </a>
              {/*
              <Button
                variant="outline-dark-blue"
                className="shadow-sm theme-btn"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Click to change the theme"
              >
                <span>
                  <i className="fa-regular fa-moon" alt=""></i>
                </span>
                Light
              </Button>
              */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default navbarTop;
