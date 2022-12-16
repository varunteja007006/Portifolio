import React from "react";

import { Card, ListGroup } from "react-bootstrap";

import { useThemeContext } from "../hook/useThemeContext";

function IndustrySkills() {
  const { theme } = useThemeContext();
  return (
    <div>
      <Card
        className={
          `p-2 ` + (theme === "-dark" ? "main-card-dark " : "dropshadow")
        }
      >
        <Card.Body>
          <Card.Title>Industry Skills</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item
              className={
                `shadow card-text ` + (theme === "-dark" ? "text-white" : " ")
              }
            >
              Object Oriented Programming System
            </ListGroup.Item>
            <ListGroup.Item
              className={
                `mt-1 shadow ` + (theme === "-dark" ? "text-white" : " ")
              }
            >
              Database Management System
            </ListGroup.Item>
            <ListGroup.Item
              className={
                `mt-1 shadow ` + (theme === "-dark" ? "text-white" : " ")
              }
            >
              Software Development and Life Cycle
            </ListGroup.Item>
            <ListGroup.Item
              className={
                `mt-1 shadow ` + (theme === "-dark" ? "text-white" : " ")
              }
            >
              Data Structures and Algorithms
            </ListGroup.Item>
            <ListGroup.Item
              className={
                `mt-1 shadow ` + (theme === "-dark" ? "text-white" : " ")
              }
            >
              Problem Solving
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default IndustrySkills;
