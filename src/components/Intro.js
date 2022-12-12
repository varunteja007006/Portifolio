import React from "react";

import { Col, Row, Card } from "react-bootstrap";
import myImage from "../assests/myImage.jpeg";

import { useThemeContext } from "../hook/useThemeContext";

function Intro() {
  const { theme } = useThemeContext();
  return (
    <div>
      <Row className="g-4 justify-content-md-center">
        <Col xs={12} md={8} lg={8} className="center">
          <Card
            className={
              `p-2 ` + (theme === "-dark" ? "main-card-dark " : "dropshadow")
            }
          >
            <Card.Body>
              <Row className="g-4 justify-content-md-center">
                <Col xs={12} md={8} lg={8}>
                  <h3 className="card-title">VARUN TEJA K</h3>
                  <p className="mb-1">Full Stack Developer</p>
                  <Card.Text className="text-justify">
                    I am a computer science engineer with problem-solving skills
                    to solve challenges in the workplace. I love to explore,
                    research, and learn about new and popular technologies. I am
                    looking for an opportunity to apply my skills to develop
                    services and solutions.
                  </Card.Text>
                </Col>
                <Col xs={12} md={4} lg={4}>
                  <img
                    src={myImage}
                    alt=""
                    className="w-100 myimage shadow-lg"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Intro;
