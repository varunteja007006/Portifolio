import React from "react";

import { Card, ListGroup } from "react-bootstrap";

import { useThemeContext } from "../hook/useThemeContext";

function TechnicalSkills() {
  const { theme } = useThemeContext();
  return (
    <div>
      {" "}
      <Card
        className={
          `p-2 ` + (theme === "-dark" ? "main-card-dark " : "dropshadow")
        }
      >
        <Card.Body>
          <Card.Title>Technical Skills</Card.Title>
          <ListGroup variant="flush card-text">
            <ListGroup.Item
              className={`shadow ` + (theme === "-dark" ? "text-white" : " ")}
            >
              Linux/ Windows
            </ListGroup.Item>
            <ListGroup.Item
              className={
                `mt-1 shadow ` + (theme === "-dark" ? "text-white" : " ")
              }
            >
              MySQL, Mongo DB
            </ListGroup.Item>
            <ListGroup.Item
              className={
                `mt-1 text-justify shadow ` +
                (theme === "-dark" ? "text-white" : " ")
              }
            >
              Python, HTML, CSS, JavaScript, React, PHP
            </ListGroup.Item>
            <ListGroup.Item
              className={
                `mt-1 shadow ` + (theme === "-dark" ? "text-white" : " ")
              }
            >
              MERN, Django
            </ListGroup.Item>
            <ListGroup.Item
              className={
                `mt-1 text-justify shadow ` +
                (theme === "-dark" ? "text-white" : " ")
              }
            >
              Git, VS code, Postman, TortoiseSVN, Jenkins, Heroku
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TechnicalSkills;
