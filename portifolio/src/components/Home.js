import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  Col,
  Form,
  Row,
  Alert,
  Card,
  ListGroup,
  Container,
} from "react-bootstrap";

import myimage from "../assests/vt1.png";

function Home() {
  const refForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_awp39hr",
        "template_cen9b4d",
        refForm.current,
        "w1IIVhZfu4I7kN4tr"
      )
      .then(
        () => {
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };
  return (
    <main className="container">
      <div class="centering"></div>
      <div
        data-bs-spy="scroll"
        data-bs-target="navbartop"
        data-bs-offset="0"
        className="scrollspy-example"
        tabindex="0"
      >
        <section className="m-2 pt-2" id="Home">
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card border="dark">
                <Card.Img variant="top" src="holder.js/100px160" alt="" />
                <Card.Body>
                  <Card.Title>VARUN TEJA K</Card.Title>
                  <p className="job-role text-muted">Full Stack Developer</p>
                  <Card.Text>
                    I am a computer science engineer with problem-solving skills
                    to solve challenges in the workplace. I love to explore,
                    research, and learn about new and popular technologies. I am
                    looking for an opportunity to apply my skills to develop
                    services and solutions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <section id="scrollspyAbout" className="centering">
          <h4>About Me</h4>
          <Row className="g-4 justify-content-md-center">
            {" "}
            <Col xs={12} md={9} lg={9}>
              <Card border="dark">
                <Card.Body>
                  <Card.Title>Work Experience</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>{" "}
            <Col xs={12} md={9} lg={9}>
              <Card border="dark">
                <Card.Img variant="top" src="holder.js/100px160" alt="" />
                <Card.Body>
                  <Card.Title>Academics</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>{" "}
            <Col xs={12} md={9} lg={9}>
              <Card border="dark">
                <Card.Img variant="top" src="holder.js/100px160" alt="" />
                <Card.Body>
                  <Card.Title>Projects</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Card border="dark">
                <Card.Img variant="top" src="holder.js/100px160" alt="" />
                <Card.Body>
                  <Card.Title>Skills</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>{" "}
            <Col xs={12} md={6} lg={6}>
              <Card border="dark">
                <Card.Img variant="top" src="holder.js/100px160" alt="" />
                <Card.Body>
                  <Card.Title>Industry Skills</Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item variant="dark-blue">
                        Object Oriented Programming System
                      </ListGroup.Item>
                      <ListGroup.Item variant="dark-blue" className="mt-1">
                        Database Management System
                      </ListGroup.Item>
                      <ListGroup.Item variant="dark-blue" className="mt-1">
                        Software Development and Life Cycle
                      </ListGroup.Item>
                      <ListGroup.Item variant="dark-blue" className="mt-1">
                        Data Structures and Algorithms
                      </ListGroup.Item>{" "}
                      <ListGroup.Item variant="dark-blue" className="mt-1">
                        Problem Solving
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>{" "}
            <Col xs={12} md={9} lg={9} className="center">
              <Card border="dark">
                <Card.Body>
                  <Card.Title>Certifications</Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush" className="center">
                      <ListGroup.Item variant="dark-blue" className="w-50">
                        Building Web Applications in PHP
                        <p className="text-muted m-0">- Coursera</p>
                      </ListGroup.Item>{" "}
                      <ListGroup.Item variant="dark-blue" className="w-50 mt-2">
                        Introduction to Machine Learning
                        <p className="text-muted m-0">- Coursera</p>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <section id="scrollspyAbout" className="centering mt-4">
          <h4 id="scrollspyContact">Contact Me</h4>
          <h6 className="text-muted">
            You can contact me by filling the form below
          </h6>
          <Card border="dark" className="w-50">
            <Card.Body>
              <form ref={refForm} onSubmit={sendEmail} className="contact-form">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="ms-0 m-1"
                />
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  className="ms-0 m-1"
                  required
                />
                <Form.Control
                  as="textarea"
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Message"
                  className="ms-0 m-1"
                  required
                ></Form.Control>
                <div className="center">
                  <Button
                    type="submit"
                    value="Send"
                    className="ms-0 m-1"
                    variant="dark-blue"
                  >
                    Send
                  </Button>{" "}
                </div>
              </form>
            </Card.Body>
          </Card>
        </section>
      </div>
    </main>
  );
}

export default Home;
