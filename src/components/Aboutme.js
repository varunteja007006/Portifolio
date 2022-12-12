import React from "react";

import { Col, Row, Card, ListGroup } from "react-bootstrap";

import { useThemeContext } from "../hook/useThemeContext";

function Aboutme() {
  const { theme } = useThemeContext();

  return (
    <div>
      <Row className="g-4 justify-content-md-center m-0">
        <Col xs={12} md={8} lg={8} className="center m-0">
          <Card
            className={
              `p-2 ` + (theme === "-dark" ? "main-card-dark " : "dropshadow")
            }
          >
            <Card.Body>
              <Card.Title>Work Experience</Card.Title>
              <ListGroup horizontal className="shadow card-text">
                <ListGroup.Item
                  className={
                    `w-50 centering ` + (theme === "-dark" ? "text-white" : " ")
                  }
                >
                  <p className="m-0 p-0">
                    <b> SAP SuccessFactors Consultant</b>
                  </p>{" "}
                  <p className="m-0 p-0">Tata Consultancy Services</p>
                  <p
                    className={
                      `m-1 p-0 ` + (theme === "-dark" ? " " : "text-muted")
                    }
                  >
                    2021 - Present
                  </p>
                </ListGroup.Item>
                <ListGroup.Item
                  className={
                    `text-justify w-50 ` +
                    (theme === "-dark" ? "text-white" : " ")
                  }
                >
                  <ul>
                    <li>
                      Supporting and Testing SAP Successfactors EC and PMGM
                      modules.
                    </li>
                    <li className="mt-2">
                      Updating and Providing enhancements to clients/customers
                      that will increase their productivity and interoperability
                    </li>
                  </ul>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={8} lg={8} className="center">
          <Card
            className={
              `p-2 ` + (theme === "-dark" ? "main-card-dark " : "dropshadow")
            }
          >
            <Card.Body>
              <Card.Title>Academics</Card.Title>
              <ListGroup horizontal className="shadow card-text">
                <ListGroup.Item
                  className={
                    `w-50 centering ` + (theme === "-dark" ? "text-white" : " ")
                  }
                >
                  <p className="m-0 p-0">
                    <b>Computer Science Engineering (B.Tech) </b>
                  </p>
                  <p className="m-0 p-0">8.6 CGPA</p>
                  <p
                    className={
                      `m-0 p-0 ` + (theme === "-dark" ? " " : "text-muted")
                    }
                  >
                    2017-2021
                  </p>
                </ListGroup.Item>
                <ListGroup.Item
                  className={
                    `text-justify w-50 centering ` +
                    (theme === "-dark" ? "text-white" : " ")
                  }
                >
                  Vel Tech R&D Institute of Science & Technology, Deemed to be a
                  University
                </ListGroup.Item>
              </ListGroup>
              <ListGroup horizontal className="mt-1 shadow card-text">
                <ListGroup.Item
                  className={
                    `w-50 centering ` + (theme === "-dark" ? "text-white" : " ")
                  }
                >
                  <p className="m-0 p-0">
                    <b>Intermediate - MPC</b>
                  </p>
                  <p className="m-0 p-0">95%</p>
                  <p
                    className={
                      `m-0 p-0 ` + (theme === "-dark" ? " " : "text-muted")
                    }
                  >
                    2017-2015
                  </p>
                </ListGroup.Item>
                <ListGroup.Item
                  className={
                    `text-justify w-50 centering ` +
                    (theme === "-dark" ? "text-white" : " ")
                  }
                >
                  Narayana Junior College
                </ListGroup.Item>
              </ListGroup>
              <ListGroup horizontal className="mt-1 shadow card-text">
                <ListGroup.Item
                  className={
                    `w-50 centering ` + (theme === "-dark" ? "text-white" : " ")
                  }
                >
                  <p className="m-0 p-0">
                    <b>Secondary Education - 10th</b>
                  </p>
                  <p className="m-0 p-0">9.8 CGPA</p>
                  <span
                    className={
                      `m-0 p-0 ` + (theme === "-dark" ? " " : "text-muted")
                    }
                  >
                    2015
                  </span>
                </ListGroup.Item>
                <ListGroup.Item
                  className={
                    `text-justify w-50 centering ` +
                    (theme === "-dark" ? "text-white" : " ")
                  }
                >
                  The Bodhi School
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Aboutme;
