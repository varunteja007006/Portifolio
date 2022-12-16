import React from "react";

import {
  Button,
  Col,
  Row,
  Card,
  ListGroup,
  Collapse,
  Badge,
  Container,
} from "react-bootstrap";

import { useThemeContext } from "../hook/useThemeContext";

function Certifications() {
  const { theme } = useThemeContext();
  return (
    <div>
      <Card
        className={
          `p-2 ` + (theme === "-dark" ? "main-card-dark " : "dropshadow")
        }
      >
        <Card.Body>
          <Card.Title>Certifications</Card.Title>
          <ListGroup variant="flush" className="center card-text">
            <ListGroup.Item
              className={
                `w-100 shadow ` + (theme === "-dark" ? "text-white" : " ")
              }
            >
              Building Web Applications in PHP
              <p
                className={
                  `m-1 p-0 ` + (theme === "-dark" ? " " : "text-muted")
                }
              >
                - Coursera
              </p>
            </ListGroup.Item>
            <ListGroup.Item
              className={
                `w-100 mt-2 shadow ` + (theme === "-dark" ? "text-white" : " ")
              }
            >
              Introduction to Machine Learning
              <p
                className={
                  `m-1 p-0 ` + (theme === "-dark" ? " " : "text-muted")
                }
              >
                - Coursera
              </p>
            </ListGroup.Item>
            <ListGroup.Item
              className={
                `w-100 mt-2 shadow ` + (theme === "-dark" ? "text-white" : " ")
              }
            >
              PCAP Programming Essentials in Python
              <p
                className={
                  `m-1 p-0 ` + (theme === "-dark" ? " " : "text-muted")
                }
              >
                - Cisco
              </p>
            </ListGroup.Item>
            <ListGroup.Item
              className={
                `w-100 mt-2 shadow ` + (theme === "-dark" ? "text-white" : " ")
              }
            >
              Introduction of JavaScript
              <p
                className={
                  `m-1 p-0 ` + (theme === "-dark" ? " " : "text-muted")
                }
              >
                - Great Learning
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Certifications;
