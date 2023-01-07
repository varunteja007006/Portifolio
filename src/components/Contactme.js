import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { Button, Col, Form, Row, Card } from "react-bootstrap";
import { useThemeContext } from "../hook/useThemeContext";

function Contactme() {
  const { theme } = useThemeContext();

  const refForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_KEY,
        process.env.REACT_APP_EMAILJS_TEMPLATE_KEY,
        refForm.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          window.location.reload(false);
        },
        (error) => {
          alert("Failed to send the message, please try again", error);
        }
      );
  };
  return (
    <div>
      <h6 className="text-muted">
        You can contact me or share your feedback by filling the form below
      </h6>
      <Row className="g-3 justify-content-md-center">
        <Col xs={12} md={12} lg={12} className="center">
          <Card
            className={theme === "-dark" ? "main-card-dark " : "dropshadow"}
          >
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
                    className={
                      `ms-0 m-1 shadow ` +
                      (theme === "-dark" ? "send-btn-dark" : "send-btn")
                    }
                  >
                    Send
                  </Button>
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Contactme;
