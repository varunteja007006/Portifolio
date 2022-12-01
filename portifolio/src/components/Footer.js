import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function Footer() {
  return (
    <div className="mt-3">
      <footer className="p-3">
        <p>MyPortifolio - VARUN TEJA K</p>
        <p>
          <a
            href="mailto:varunteja007006@gmail.com"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Click to mail me"
          >
            Email : varunteja007006@gmail.com
          </a>
        </p>
        <p data-bs-toggle="tooltip" data-bs-placement="top" title="Call me">
          Phone : 7893798770
        </p>
        <p>
          <a href="https://www.linkedin.com" target="_blank">
            <i className="fa-brands fa-linkedin" alt=""></i>
          </a>
          <a href="https://www.fb.com" target="_blank">
            <i className="fa-brands fa-facebook" alt=""></i>
          </a>
          <a href="https://www.github.com" target="_blank">
            <i className="fa-brands fa-github" alt=""></i>
          </a>
          <a href="google.com" target="_blank">
            <i className="fa-regular fa-file-powerpoint" alt=""></i>
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
