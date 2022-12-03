import React from "react";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="mt-3">
      <footer className="p-3">
        <Row>
          <Col>
            <p className="mt-3">MyPortifolio - VARUN TEJA K</p>
            <p>
              <a
                href="mailto:varunteja007006@gmail.com"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Click to mail me"
              >
                <span className="alignitems center">
                  <i className="fa-solid fa-envelope"></i>
                  <span>varunteja007006@gmail.com</span>
                </span>
              </a>
            </p>
            <p data-bs-toggle="tooltip" data-bs-placement="top" title="Call me">
              <i className="fa-solid fa-phone small"></i>
              7893798770
            </p>
            <p className="mt-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="LinkedIn"
                className="avoidVoid"
              >
                <i className="fa-brands fa-linkedin" alt=""></i>
              </a>
              <a
                href="https://www.fb.com"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Facebook"
              >
                <i className="fa-brands fa-facebook" alt=""></i>
              </a>
              <a
                href="https://github.com/varunteja007006?tab=repositories"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Github"
              >
                <i className="fa-brands fa-github" alt=""></i>
              </a>
              <a
                href="google.com"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Google - Present"
              >
                <i className="fa-solid fa-file-powerpoint" alt=""></i>
              </a>
            </p>
          </Col>
        </Row>
      </footer>
    </div>
  );
}

export default Footer;
