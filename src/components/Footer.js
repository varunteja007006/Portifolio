import React from "react";
import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { useThemeContext } from "../hook/useThemeContext";

function Footer() {
  const { theme } = useThemeContext();
  return (
    <div className={theme}>
      <footer className="p-3 footer">
        <Row>
          <Col className="centering">
            <p className="mt-3">My Portifolio - VARUN TEJA K</p>
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
              <span className="alignitems center">
                <i className="fa-solid fa-phone"></i>
                <span>7893798770</span>
              </span>
            </p>
            <p className="mt-2">
              <a
                href="www.linkedin.com/in/varun-teja-k-833522149"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="LinkedIn"
                className="avoidVoid"
              >
                <i className="fa-brands fa-linkedin" alt=""></i>
              </a>
              <a
                href="https://www.facebook.com/varun.teja.kp"
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
                href="https://www.google.com"
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
