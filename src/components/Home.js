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
  Badge,
} from "react-bootstrap";

import budget from "../assests/budget.png";
import collabs from "../assests/collabs.png";
import fit from "../assests/fit.png";
import myblog from "../assests/myblog.png";
import myImage from "../assests/myImage.jpeg";
import portifolio from "../assests/portifolio.png";
import sap from "../assests/sap_2.jpg";
import sentiment_analysis from "../assests/sentiment_analysis.png";
import simple_notes from "../assests/simple_notes.png";
import sports_management from "../assests/sports_management.png";

function Home() {
  const [showMore, setShowMore] = useState("Show More...");
  const [showLess, setShowLess] = useState(null);
  const [open, setOpen] = useState(false);

  const changeBtnStatus = () => {
    if (showMore === "Show More...") {
      setShowMore(null);
      setShowLess("Show Less...");
    }
    if (showLess === "Show Less...") {
      setShowMore("Show More...");
      setShowLess(null);
    }
  };

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
                    <h3 className="card-title">VARUN TEJA K</h3>
                    <p className="mb-1">Full Stack Developer</p>
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
      </section>
      <section id="About" className="centering mt-4 mb-5">
        <h3>About Me</h3>
        <Row className="g-4 justify-content-md-center m-0">
          <Col xs={12} md={8} lg={8} className="center m-0">
            <Card className="dropshadow p-2">
              <Card.Body>
                <Card.Title>Work Experience</Card.Title>
                <ListGroup horizontal className="shadow card-text">
                  <ListGroup.Item className="w-50 centering">
                    <p className="m-0 p-0">
                      <b> SAP SuccessFactors Consultant</b>
                    </p>{" "}
                    <p className="m-0 p-0">Tata Consultancy Services</p>
                    <p className="text-muted m-1 p-0">2021 - Present</p>
                  </ListGroup.Item>
                  <ListGroup.Item className="text-justify w-50">
                    <ul>
                      <li>
                        Supporting and Testing SAP Successfactors EC and PMGM
                        modules.
                      </li>
                      <li className="mt-2">
                        Updating and Providing enhancements to clients/customers
                        that will increase their productivity and
                        interoperability
                      </li>
                    </ul>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={8} lg={8} className="center">
            <Card className="dropshadow p-2">
              <Card.Body>
                <Card.Title>Academics</Card.Title>
                <ListGroup horizontal className="shadow card-text">
                  <ListGroup.Item variant=" " className="w-50 centering">
                    <p className="m-0 p-0">
                      <b>Computer Science Engineering (B.Tech) </b>
                    </p>
                    <p className="m-0 p-0">8.6 CGPA</p>
                    <p className="text-muted m-0 p-0">2017-2021</p>
                  </ListGroup.Item>
                  <ListGroup.Item
                    variant=" "
                    className="text-justify w-50 centering"
                  >
                    Vel Tech R&D Institute of Science & Technology, Deemed to be
                    a University
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal className="mt-1 shadow card-text">
                  <ListGroup.Item variant=" " className="w-50 centering">
                    <p className="m-0 p-0">
                      <b>Intermediate - MPC</b>
                    </p>
                    <p className="m-0 p-0">95%</p>
                    <p className="text-muted m-0 p-0">2017-2015</p>
                  </ListGroup.Item>
                  <ListGroup.Item
                    variant=" "
                    className="text-justify w-50 centering"
                  >
                    Narayana Junior College
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal className="mt-1 shadow card-text">
                  <ListGroup.Item variant=" " className="w-50 centering">
                    <p className="m-0 p-0">
                      <b>Secondary Education - 10th</b>
                    </p>
                    <p className="m-0 p-0">9.8 CGPA</p>
                    <span className="text-muted m-0 p-0">2015</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    variant=" "
                    className="text-justify w-50 centering"
                  >
                    The Bodhi School
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <section id="Skills" className="centering mt-3 mb-5">
        <h3>Skills</h3>
        <Row className="g-3 justify-content-md-center">
          <Row className="g-3 justify-content-md-center">
            <Col xs={12} md={4} lg={4}>
              <Card className="dropshadow p-2">
                <Card.Body>
                  <Card.Title>Industry Skills</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item variant=" " className="shadow card-text">
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
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Card className="dropshadow p-2">
                <Card.Body>
                  <Card.Title>Technical Skills</Card.Title>
                  <ListGroup variant="flush card-text">
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
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="g-3 justify-content-md-center">
            <Col xs={12} md={8} lg={8} className="center">
              <Card className="dropshadow p-2">
                <Card.Body>
                  <Card.Title>Projects</Card.Title>
                  <Card className="border rounded-2 mt-2 mb-2 shadow">
                    <div className="m-1 p-1">
                      <Card.Img
                        src={sap}
                        style={{ height: "50%" }}
                        className="border border-2 rounded-2"
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>SAP SuccessFactors EC & PMGM</Card.Title>
                      <div className="text-justify card-text">
                        <p className="text-muted center">
                          Tata Consultancy Services
                        </p>
                        <ul>
                          <li>
                            Supporting and Testing SAP Successfactors EC and
                            PMGM modules.
                          </li>
                          <li className="mt-2">
                            Updating and Providing enhancements to
                            clients/customers that will increase their
                            productivity and interoperability
                          </li>
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card className="border rounded-2 mb-2 shadow">
                    <div className="card-img-size">
                      <Card.Img
                        src={fit}
                        className="border border-3 border-dark rounded-2"
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>Fit App</Card.Title>
                      <div className="text-justify card-text">
                        <p className="center">
                          <Badge pill bg="warning" text="dark">
                            Mongo DB
                          </Badge>{" "}
                          <Badge pill bg="warning" text="dark">
                            Express JS
                          </Badge>{" "}
                          <Badge pill bg="warning" text="dark">
                            Node JS
                          </Badge>{" "}
                          <Badge pill bg="warning" text="dark">
                            React
                          </Badge>{" "}
                          <Badge pill bg="warning" text="dark">
                            Bootstrap SASS
                          </Badge>
                        </p>
                        MERN stack application, React on the front end and on
                        the backend Node js and Express as middleware with
                        MongoDB database. Hosted this web app on{" "}
                        <Badge bg="success">Heroku</Badge> (backend) &{" "}
                        <Badge bg="success">Netlify</Badge> (frontend).
                      </div>
                      <a
                        href="https://github.com/varunteja007006/MERNstack"
                        target="_blank"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Github Link"
                        className="btn btn-outline-dark-blue project-btn mt-2"
                      >
                        <i className="fa-brands fa-github" alt=""></i>
                      </a>
                      <a
                        href="https://gleaming-rabanadas-387c5c.netlify.app"
                        target="_blank"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Launch Web App"
                        className="btn btn-outline-dark-blue project-btn ms-3 mt-2"
                      >
                        <i className="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card className="border rounded-2 mb-2 shadow">
                    <div className="card-img-size">
                      <Card.Img
                        src={sentiment_analysis}
                        className="border border-3 border-dark rounded-2"
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>Twitter Sentiment Analysis</Card.Title>
                      <div className="text-justify card-text">
                        <p className="center">
                          <Badge pill bg="warning" text="dark">
                            Django
                          </Badge>{" "}
                          <Badge pill bg="warning" text="dark">
                            CSS
                          </Badge>{" "}
                          <Badge pill bg="warning" text="dark">
                            HTML
                          </Badge>{" "}
                          <Badge pill bg="warning" text="dark">
                            JavaScript
                          </Badge>{" "}
                        </p>
                        Update descriptionsPenatibus consectetur ultricies ex
                        hendrerit faucibus facilisi. Consectetur lobortis
                        suscipit eleifend quam in eros aptent ornare iaculis.
                        Natoque molestie hac nec inceptos odio. Lacinia nullam
                        ante tincidunt euismod placerat arcu efficitur enim orci
                        faucibus libero.
                      </div>
                      <a
                        href="https://github.com/varunteja007006/Twitter-Sentiment-analysis-on-politicians-using-Django"
                        target="_blank"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Github Link"
                        className="btn btn-outline-dark-blue project-btn mt-2"
                      >
                        <i className="fa-brands fa-github" alt=""></i>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card className="border rounded-2 mb-2 shadow">
                    <div className="card-img-size">
                      <Card.Img
                        src={sports_management}
                        className="border border-3 border-dark rounded-2"
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>Sports Management Website</Card.Title>
                      <div className="text-justify card-text">
                        <p className="center">
                          <Badge pill bg="warning" text="dark">
                            CSS
                          </Badge>{" "}
                          <Badge pill bg="warning" text="dark">
                            HTML
                          </Badge>{" "}
                          <Badge pill bg="warning" text="dark">
                            JavaScript
                          </Badge>{" "}
                          <Badge pill bg="warning" text="dark">
                            MySQL
                          </Badge>{" "}
                          <Badge pill bg="warning" text="dark">
                            PHP
                          </Badge>{" "}
                        </p>
                        Update descriptions
                      </div>
                      <a
                        href="https://github.com/varunteja007006/Sportz-Management-Website-Bootstrap"
                        target="_blank"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Github Link"
                        className="btn btn-outline-dark-blue project-btn mt-2"
                      >
                        <i className="fa-brands fa-github" alt=""></i>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card className="border rounded-2 mb-2 shadow">
                    <div className="card-img-size">
                      <Card.Img
                        src={budget}
                        className="border border-3 border-dark rounded-2"
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>Budget</Card.Title>
                      <div className="text-justify card-text">
                        <p className="center">
                          <Badge pill bg="warning" text="dark">
                            Django
                          </Badge>{" "}
                          <Badge pill bg="warning" text="dark">
                            Bootstrap CSS
                          </Badge>{" "}
                          <Badge pill bg="warning" text="dark">
                            HTML
                          </Badge>{" "}
                        </p>
                        Update descriptions
                      </div>
                      <a
                        href="https://github.com/varunteja007006/Budget"
                        target="_blank"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Github Link"
                        className="btn btn-outline-dark-blue project-btn mt-2"
                      >
                        <i className="fa-brands fa-github" alt=""></i>
                      </a>
                    </Card.Body>
                  </Card>
                  <Collapse in={open}>
                    <Card className="border rounded-2 mb-2 shadow">
                      <div className="card-img-size">
                        <Card.Img
                          src={collabs}
                          className="border border-3 border-dark rounded-2"
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>Collabs</Card.Title>
                        <div className="text-justify card-text">
                          <p className="center">
                            <Badge pill bg="warning" text="dark">
                              Django
                            </Badge>{" "}
                            <Badge pill bg="warning" text="dark">
                              Materialize CSS
                            </Badge>{" "}
                            <Badge pill bg="warning" text="dark">
                              HTML
                            </Badge>{" "}
                          </p>
                          Update descriptions...
                        </div>
                        <a
                          href="https://github.com/varunteja007006/collabs_WebApp_Django"
                          target="_blank"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Github Link"
                          className="btn btn-outline-dark-blue project-btn mt-2"
                        >
                          <i className="fa-brands fa-github" alt=""></i>
                        </a>
                      </Card.Body>
                    </Card>
                  </Collapse>
                  <Collapse in={open}>
                    <Card className="border rounded-2 mb-2 shadow">
                      <div className="card-img-size">
                        <Card.Img
                          src={portifolio}
                          className="border border-3 border-dark rounded-2"
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>Portifolio</Card.Title>
                        <div className="text-justify card-text">
                          <p className="center">
                            <Badge pill bg="warning" text="dark">
                              React
                            </Badge>{" "}
                            <Badge pill bg="warning" text="dark">
                              Bootstrap SASS
                            </Badge>{" "}
                          </p>
                          A simple portifolio website built on react.
                        </div>
                        <a
                          href="https://github.com/varunteja007006/Portifolio"
                          target="_blank"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Github Link"
                          className="btn btn-outline-dark-blue project-btn mt-2"
                        >
                          <i className="fa-brands fa-github" alt=""></i>
                        </a>
                        <a
                          href="https://beautiful-meerkat-18a36f.netlify.app/"
                          target="_blank"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Launch Web App"
                          className="btn btn-outline-dark-blue project-btn ms-3 mt-2"
                        >
                          <i className="fa-solid fa-up-right-from-square"></i>
                        </a>
                      </Card.Body>
                    </Card>
                  </Collapse>
                  <Collapse in={open}>
                    <Card className="border rounded-2 mb-2 shadow">
                      <div className="card-img-size">
                        <Card.Img
                          src={myblog}
                          className="border border-3 border-dark rounded-2"
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>Simple Blog</Card.Title>
                        <div className="text-justify card-text">
                          <p className="text-muted center">
                            <Badge pill bg="warning" text="dark">
                              React
                            </Badge>{" "}
                            <Badge pill bg="warning" text="dark">
                              Bootstrap SASS
                            </Badge>{" "}
                          </p>
                          Simple Blog is built on with React and data is saved
                          on Json server (localhost, port 8000)
                        </div>
                        <a
                          href="https://github.com/varunteja007006/Simple-Blog-React"
                          target="_blank"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Github Link"
                          className="btn btn-outline-dark-blue project-btn mt-2"
                        >
                          <i className="fa-brands fa-github" alt=""></i>
                        </a>
                      </Card.Body>
                    </Card>
                  </Collapse>
                  <Collapse in={open}>
                    <Card className="border rounded-2 mb-2 shadow">
                      <div className="card-img-size">
                        <Card.Img
                          src={simple_notes}
                          className="border border-3 border-dark rounded-2"
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>React Notes</Card.Title>
                        <div className="text-justify card-text">
                          <p className="center">
                            <Badge pill bg="warning" text="dark">
                              React
                            </Badge>{" "}
                            <Badge pill bg="warning" text="dark">
                              Bootstrap SASS
                            </Badge>{" "}
                          </p>
                          Update descriptions...
                        </div>
                        <a
                          href="https://github.com/varunteja007006/react_notes"
                          target="_blank"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Github Link"
                          className="btn btn-outline-dark-blue project-btn mt-2"
                        >
                          <i className="fa-brands fa-github" alt=""></i>
                        </a>
                      </Card.Body>
                    </Card>
                  </Collapse>
                  <Button
                    onClick={() => {
                      setOpen(!open);
                      changeBtnStatus();
                    }}
                    aria-controls="example-fade-text"
                    aria-expanded={open}
                    variant="outline-dark-blue"
                    className="mt-3 send-btn shadow-sm"
                  >
                    {!showLess && "Show More"}
                    {!showMore && "Show Less"}
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
                  <ListGroup variant="flush" className="center card-text">
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
