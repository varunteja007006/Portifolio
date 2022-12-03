import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  Col,
  Form,
  Row,
  Card,
  ListGroup,
  Collapse,
} from "react-bootstrap";

import myimage from "../assests/vt1.jpeg";
import sap from "../assests/sap_successfactors.jpg";

function Home() {
  const [open, setOpen] = useState(false);
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
    <main className="container p-2">
      <section id="Home" className="mt-4 mb-5">
        <Row className="g-4 justify-content-md-center">
          <Col xs={12} md={8} lg={8} className="center">
            <Card className="dropshadow p-2">
              <Card.Body>
                <Row className="g-4 justify-content-md-center">
                  <Col xs={12} md={8} lg={8}>
                    <Card.Title>VARUN TEJA K</Card.Title>
                    <p className="job-role text-muted mb-1">
                      Full Stack Developer
                    </p>
                    <Card.Text className="text-justify">
                      I am a computer science engineer with problem-solving
                      skills to solve challenges in the workplace. I love to
                      explore, research, and learn about new and popular
                      technologies. I am looking for an opportunity to apply my
                      skills to develop services and solutions.
                    </Card.Text>
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <img
                      src={myimage}
                      alt=""
                      className="w-100 myimage shadow-lg"
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <section id="About" className="centering mt-4 mb-5">
        <h3>About Me</h3>
        <Row className="g-4 justify-content-md-center m-0">
          <Col xs={12} md={8} lg={8} className="center m-0">
            <Card className="dropshadow p-2">
              <Card.Body>
                <Card.Title>Work Experience</Card.Title>
                <Card.Text>
                  <ListGroup horizontal className="shadow">
                    <ListGroup.Item className="w-50 centering">
                      <p className="m-0 p-0">
                        <b> SAP SuccessFactors Consultant (2021 - Present)</b>
                      </p>
                      <p className="text-muted m-0 p-0">
                        Tata Consultancy Services
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item className="text-justify w-50">
                      <ul>
                        <li>
                          Supporting and Testing SAP Successfactors EC and PMGM
                          modules.
                        </li>
                        <li className="mt-2">
                          Updating and Providing enhancements to
                          clients/customers that will increase their
                          productivity and interoperability
                        </li>
                      </ul>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={8} lg={8} className="center">
            <Card className="dropshadow p-2">
              <Card.Body>
                <Card.Title>Academics</Card.Title>
                <Card.Text>
                  <ListGroup horizontal className="shadow">
                    <ListGroup.Item variant=" " className="w-50 centering">
                      <p className="m-0 p-0">
                        <b>Graduation - BTech CSE (2017-2021)</b>
                      </p>
                      <p className="text-muted m-0 p-0">8.6 CGPA</p>
                    </ListGroup.Item>
                    <ListGroup.Item variant=" " className="text-justify w-50">
                      Vel Tech R&D Institute of Science & Technology, Deemed to
                      be a University
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup horizontal className="mt-1 shadow">
                    <ListGroup.Item variant=" " className="w-50 centering">
                      <p className="m-0 p-0">
                        <b>Intermediate - MPC (2017-2015)</b>
                      </p>
                      <p className="text-muted m-0 p-0">95%</p>
                    </ListGroup.Item>
                    <ListGroup.Item variant=" " className="text-justify w-50">
                      Narayana Junior College
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup horizontal className="mt-1 shadow">
                    <ListGroup.Item variant=" " className="w-50 centering">
                      <p className="m-0 p-0">
                        <b>Secondary Education - 10th (2015)</b>
                      </p>
                      <p className="text-muted m-0 p-0">9.8 CGPA</p>
                    </ListGroup.Item>
                    <ListGroup.Item variant=" " className="text-justify w-50">
                      The Bodhi School
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <section id="Skills" className="centering mt-4 mb-5">
        <h3>Skills</h3>
        <Row className="g-3 justify-content-md-center">
          <Row className="g-3 justify-content-md-center">
            <Col xs={12} md={4} lg={4}>
              <Card className="dropshadow p-2">
                <Card.Body>
                  <Card.Title>Industry Skills</Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item variant=" " className="shadow">
                        Object Oriented Programming System
                      </ListGroup.Item>
                      <ListGroup.Item variant=" " className="mt-1 shadow">
                        Database Management System
                      </ListGroup.Item>
                      <ListGroup.Item variant=" " className="mt-1 shadow">
                        Software Development and Life Cycle
                      </ListGroup.Item>
                      <ListGroup.Item variant=" " className="mt-1 shadow">
                        Data Structures and Algorithms
                      </ListGroup.Item>
                      <ListGroup.Item variant=" " className="mt-1 shadow">
                        Problem Solving
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Card className="dropshadow p-2">
                <Card.Body>
                  <Card.Title>Technical Skills</Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item variant=" " className="shadow">
                        Linux/ Windows
                      </ListGroup.Item>
                      <ListGroup.Item variant=" " className="mt-1 shadow">
                        MySQL, Mongo DB
                      </ListGroup.Item>
                      <ListGroup.Item
                        variant=" "
                        className="mt-1 text-justify shadow"
                      >
                        Python, HTML, CSS, JavaScript, React, PHP
                      </ListGroup.Item>
                      <ListGroup.Item variant=" " className="mt-1 shadow">
                        MERN, Django
                      </ListGroup.Item>
                      <ListGroup.Item
                        variant=" "
                        className="mt-1 text-justify shadow"
                      >
                        Git, VS code, Postman, TortoiseSVN, Jenkins, Heroku
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="g-3 justify-content-md-center">
            <Col xs={12} md={8} lg={8} className="center">
              <Card className="dropshadow p-2">
                <Card.Body>
                  <Card.Title>Projects</Card.Title>
                  <Card className="border border-dark-blue rounded-2 shadow">
                    <Row>
                      <Col xs={12} md={12} lg={4} className="m-auto">
                        <Card.Img variant="top" src={sap} />
                      </Col>
                      <Col>
                        <Card.Body>
                          <Card.Title>
                            SAP SuccessFactors EC & PMGM (Present)
                          </Card.Title>
                          <Card.Text className="text-justify">
                            <p className="text-muted center">
                              Tata Consultancy Services
                            </p>
                            Update descriptions
                          </Card.Text>
                          <a
                            href="https://github.com/varunteja007006?tab=repositories"
                            target="_blank"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Github"
                            className="btn btn-outline-dark-blue project-btn"
                          >
                            <i className="fa-brands fa-github" alt=""></i>
                          </a>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                  <Card className="border border-dark-blue rounded-2 shadow">
                    <Row>
                      <Col xs={12} md={12} lg={4} className="m-auto">
                        <Card.Img variant="top" src={sap} />
                      </Col>
                      <Col>
                        <Card.Body>
                          <Card.Title>Fit App</Card.Title>
                          <Card.Text className="text-justify">
                            <p className="text-muted center">
                              Mongo DB, Express JS, Node JS, React, SASS
                            </p>
                            Update descriptions
                          </Card.Text>
                          <a
                            href="https://github.com/varunteja007006/MERNstack"
                            target="_blank"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Github"
                            className="btn btn-outline-dark-blue project-btn"
                          >
                            <i className="fa-brands fa-github" alt=""></i>
                          </a>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                  <Card className="border border-dark-blue rounded-2 shadow">
                    <Row>
                      <Col xs={12} md={12} lg={4} className="m-auto">
                        <Card.Img variant="top" src={sap} />
                      </Col>
                      <Col>
                        <Card.Body>
                          <Card.Title>Twitter Sentiment Analysis</Card.Title>
                          <Card.Text className="text-justify">
                            <p className="text-muted center">
                              Django, CSS, HTML, JavaScript
                            </p>
                            Update descriptions
                          </Card.Text>
                          <a
                            href="https://github.com/varunteja007006/Twitter-Sentiment-analysis-on-politicians-using-Django"
                            target="_blank"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Github"
                            className="btn btn-outline-dark-blue project-btn"
                          >
                            <i className="fa-brands fa-github" alt=""></i>
                          </a>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                  <Card className="border border-dark-blue rounded-2 shadow">
                    <Row>
                      <Col xs={12} md={12} lg={4} className="m-auto">
                        <Card.Img variant="top" src={sap} />
                      </Col>
                      <Col>
                        <Card.Body>
                          <Card.Title>Sports Management Website</Card.Title>
                          <Card.Text className="text-justify">
                            <p className="text-muted center">
                              CSS, HTML, JavaScript, MySQL, PHP
                            </p>
                            Update descriptions
                          </Card.Text>
                          <a
                            href="https://github.com/varunteja007006/Sportz-Management-Website-Bootstrap"
                            target="_blank"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Github"
                            className="btn btn-outline-dark-blue project-btn"
                          >
                            <i className="fa-brands fa-github" alt=""></i>
                          </a>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                  <Card className="border border-dark-blue rounded-2 shadow">
                    <Row>
                      <Col xs={12} md={12} lg={4} className="m-auto">
                        <Card.Img variant="top" src={sap} />
                      </Col>
                      <Col>
                        <Card.Body>
                          <Card.Title>Budget</Card.Title>
                          <Card.Text className="text-justify">
                            <p className="text-muted center">
                              Django, CSS (Bootstrap css), HTML, JavaScript
                            </p>
                            Update descriptions
                          </Card.Text>
                          <a
                            href="https://github.com/varunteja007006/Budget"
                            target="_blank"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Github"
                            className="btn btn-outline-dark-blue project-btn"
                          >
                            <i className="fa-brands fa-github" alt=""></i>
                          </a>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                  <Collapse in={open}>
                    <Card className="border border-dark-blue rounded-2 shadow">
                      <Row>
                        <Col xs={12} md={12} lg={4} className="m-auto">
                          <Card.Img variant="top" src={sap} />
                        </Col>
                        <Col>
                          <Card.Body>
                            <Card.Title>Collabs</Card.Title>
                            <Card.Text className="text-justify">
                              <p className="text-muted center">React, SCSS</p>
                              Update descriptions...
                            </Card.Text>
                            <a
                              href="https://github.com/varunteja007006/collabs_WebApp_Django"
                              target="_blank"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Github"
                              className="btn btn-outline-dark-blue project-btn"
                            >
                              <i className="fa-brands fa-github" alt=""></i>
                            </a>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Collapse>
                  <Collapse in={open}>
                    <Card className="border border-dark-blue rounded-2 shadow">
                      <Row>
                        <Col xs={12} md={12} lg={4} className="m-auto">
                          <Card.Img variant="top" src={sap} />
                        </Col>
                        <Col>
                          <Card.Body>
                            <Card.Title>Portifolio</Card.Title>
                            <Card.Text className="text-justify">
                              <p className="text-muted center">React, SCSS</p>
                              Update descriptions...
                            </Card.Text>
                            <a
                              href="https://github.com/varunteja007006/Portifolio"
                              target="_blank"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Github"
                              className="btn btn-outline-dark-blue project-btn"
                            >
                              <i className="fa-brands fa-github" alt=""></i>
                            </a>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Collapse>
                  <Collapse in={open}>
                    <Card className="border border-dark-blue rounded-2 shadow">
                      <Row>
                        <Col xs={12} md={12} lg={4} className="m-auto">
                          <Card.Img variant="top" src={sap} />
                        </Col>
                        <Col>
                          <Card.Body>
                            <Card.Title>Simple Blog</Card.Title>
                            <Card.Text className="text-justify">
                              <p className="text-muted center">React, SCSS</p>
                              Update descriptions...
                            </Card.Text>
                            <a
                              href="https://github.com/varunteja007006/Simple-Blog-React"
                              target="_blank"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Github"
                              className="btn btn-outline-dark-blue project-btn"
                            >
                              <i className="fa-brands fa-github" alt=""></i>
                            </a>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Collapse>
                  <Collapse in={open}>
                    <Card className="border border-dark-blue rounded-2 shadow">
                      <Row>
                        <Col xs={12} md={12} lg={4} className="m-auto">
                          <Card.Img variant="top" src={sap} />
                        </Col>
                        <Col>
                          <Card.Body>
                            <Card.Title>React Notes</Card.Title>
                            <Card.Text className="text-justify">
                              <p className="text-muted center">React, SCSS</p>
                              Update descriptions...
                            </Card.Text>
                            <a
                              href="https://github.com/varunteja007006/react_notes"
                              target="_blank"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Github"
                              className="btn btn-outline-dark-blue project-btn"
                            >
                              <i className="fa-brands fa-github" alt=""></i>
                            </a>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Collapse>
                  <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-fade-text"
                    aria-expanded={open}
                    variant="outline-dark-blue"
                    className="mt-3 send-btn shadow-sm"
                  >
                    Click for more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="g-3 justify-content-md-center">
            <Col xs={12} md={8} lg={8} className="center">
              <Card className="dropshadow p-2">
                <Card.Body>
                  <Card.Title>Certifications</Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush" className="center">
                      <ListGroup.Item className="w-100 shadow">
                        Building Web Applications in PHP
                        <p className="text-muted m-0">- Coursera</p>
                      </ListGroup.Item>
                      <ListGroup.Item className="w-100 mt-2 shadow">
                        Introduction to Machine Learning
                        <p className="text-muted m-0">- Coursera</p>
                      </ListGroup.Item>
                      <ListGroup.Item className="w-100 mt-2 shadow">
                        PCAP Programming Essentials in Python
                        <p className="text-muted m-0">- Cisco</p>
                      </ListGroup.Item>
                      <ListGroup.Item className="w-100 mt-2 shadow">
                        Introduction of JavaScript
                        <p className="text-muted m-0 ">- Great Learning</p>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </section>
      <section id="Contact" className="centering mt-4 mb-5">
        <h3>Contact Me</h3>
        <h6 className="text-muted">
          You can contact me by filling the form below
        </h6>
        <Row className="g-3 justify-content-md-center">
          <Col xs={12} md={12} lg={12} className="center">
            <Card className="dropshadow">
              <Card.Body>
                <form
                  ref={refForm}
                  onSubmit={sendEmail}
                  className="contact-form"
                >
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
                      className="ms-0 m-1 send-btn shadow"
                      variant="outline-dark-blue"
                    >
                      Send
                    </Button>
                  </div>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </main>
  );
}

export default Home;
