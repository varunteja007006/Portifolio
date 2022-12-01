import React from "react";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function navbarTop() {
  return (
    <div>
      <Navbar
        id="navbartop"
        collapseOnSelect
        expand="lg"
        bg="light"
      >
        <Container>
          <Navbar.Brand href="#Home">
            <h1 className="brand-h1">MyPortifolio</h1>{" "}
          </Navbar.Brand>{" "}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Button variant="outline-dark-blue theme-btn">
                <span>
                  <i className="fa-regular fa-moon" alt=""></i>
                </span>
                Light
              </Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default navbarTop;
