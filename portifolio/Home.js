import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import myimage from "../assests/vt1.png";

function Home() {
  return (
    <div className="container">
      <Nav.Link href="#scrollspyAbout">
        <span>
          <i className="fa-regular fa-address-card" alt=""></i>
        </span>{" "}
        About me
      </Nav.Link>
      <Nav.Link href="#scrollspyContact">
        <span>
          <i className="fa-regular fa-paper-plane" alt=""></i>
        </span>{" "}
        Contact me
      </Nav.Link>
      <main>
        <Row className="m-2">
          <Col lg={true}>
            <h3 className="m-2">Hello</h3>
            <nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link" href="#scrollspyHeading1">
                    First
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#scrollspyHeading2">
                    Second
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#scrollspyHeading3">
                        Third
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#scrollspyHeading4">
                        Fourth
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example2"
              data-bs-offset="0"
              class="scrollspy-example"
              tabindex="0"
            >
              <h4 id="scrollspyHeading1">First heading</h4>
              <p>...</p>
              <h4 id="scrollspyHeading2">Second heading</h4>
              <p>...</p>
              <h4 id="scrollspyHeading3">Third heading</h4>
              <p>...</p>
              <h4 id="scrollspyHeading4">Fourth heading</h4>
              <p>...</p>
              <h4 id="scrollspyHeading5">Fifth heading</h4>
              <p>...</p>
            </div>
          </Col>
          <Col lg={true}>
            <img className="d-block w-100" src={myimage} alt="First slide" />
          </Col>
        </Row>
      </main>
    </div>
  );
}

export default Home;
