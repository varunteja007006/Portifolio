import React from "react";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
              <Button
                variant="outline-dark-blue"
                className="shadow-sm theme-btn"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Click to change the theme"
              >
                <span>
                  <i className="fa-regular fa-moon" alt=""></i>
                </span>
                Light
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default navbarTop;
