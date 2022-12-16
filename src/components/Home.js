import React from "react";

import {
  Col,
  Row,
  Container,
} from "react-bootstrap";

import { useThemeContext } from "../hook/useThemeContext";

import Intro from "./Intro";
import Contactme from "./Contactme";
import Aboutme from "./Aboutme";
import Sidebar from "./Sidebar";
import IndustrySkills from "./IndustrySkills";
import TechnicalSkills from "./TechnicalSkills";
import Certifications from "./Certifications";
import Projects from "./Projects";

function Home() {
  const { theme } = useThemeContext();

  return (
    <main className={`pb-4 ` + `${theme}`}>
      <Container className="pt-3">
        <section id="Home" className="Home mt-4 mb-5">
          <Intro></Intro>
        </section>
        <section id="About" className="About centering mt-4 mb-5">
          <h3>About Me</h3>
          <Aboutme></Aboutme>
        </section>
        <section id="Skills" className="Skills centering mt-3 mb-5">
          <h3>Skills</h3>
          <Row className="g-3 justify-content-md-center">
            <Row className="g-3 justify-content-md-center">
              <Col xs={12} md={4} lg={4}>
                <IndustrySkills></IndustrySkills>
              </Col>
              <Col xs={12} md={4} lg={4}>
                <TechnicalSkills></TechnicalSkills>
              </Col>
            </Row>
            <Row className="g-3 justify-content-md-center">
              <Col xs={12} md={8} lg={8} className="center">
              <Projects></Projects>
              </Col>
            </Row>
            <Row className="g-3 justify-content-md-center pt-3">
              <Col xs={12} md={8} lg={8} className="center">
               <Certifications></Certifications>
              </Col>
            </Row>
          </Row>
        </section>
        <section id="Contact" className="Contact centering mt-4">
          <h3>Contact Me</h3>
          <Contactme></Contactme>
        </section>
        {/* side navigation*/}
        <Sidebar></Sidebar>
      </Container>
    </main>
  );
}

export default Home;
