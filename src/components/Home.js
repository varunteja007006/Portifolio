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
  Container,
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
import { useThemeContext } from "../hook/useThemeContext";

function Home() {
  const [open, setOpen] = useState(false);
  const { theme } = useThemeContext();

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
    <main className={`pb-4` + ` ` + `${theme}`}>
      <Container className="pt-3">
        <section id="Home" className="mt-4 mb-5">
          <Row className="g-4 justify-content-md-center">
            <Col xs={12} md={8} lg={8} className="center">
              <Card
                className={
                  `p-2 ` +
                  (theme === "-dark" ? "main-card-dark " : "dropshadow")
                }
              >
                <Card.Body>
                  <Row className="g-4 justify-content-md-center">
                    <Col xs={12} md={8} lg={8}>
                      <h3 className="card-title">VARUN TEJA K</h3>
                      <p className="mb-1">Full Stack Developer</p>
                      <Card.Text className="text-justify">
                        I am a computer science engineer with problem-solving
                        skills to solve challenges in the workplace. I love to
                        explore, research, and learn about new and popular
                        technologies. I am looking for an opportunity to apply
                        my skills to develop services and solutions.
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
              <Card
                className={
                  `p-2 ` +
                  (theme === "-dark" ? "main-card-dark " : "dropshadow")
                }
              >
                <Card.Body>
                  <Card.Title>Work Experience</Card.Title>
                  <ListGroup horizontal className="shadow card-text">
                    <ListGroup.Item
                      className={
                        `w-50 centering ` +
                        (theme === "-dark" ? "text-white" : " ")
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
                          Updating and Providing enhancements to
                          clients/customers that will increase their
                          productivity and interoperability
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
                  `p-2 ` +
                  (theme === "-dark" ? "main-card-dark " : "dropshadow")
                }
              >
                <Card.Body>
                  <Card.Title>Academics</Card.Title>
                  <ListGroup horizontal className="shadow card-text">
                    <ListGroup.Item
                      className={
                        `w-50 centering ` +
                        (theme === "-dark" ? "text-white" : " ")
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
                      Vel Tech R&D Institute of Science & Technology, Deemed to
                      be a University
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup horizontal className="mt-1 shadow card-text">
                    <ListGroup.Item
                      className={
                        `w-50 centering ` +
                        (theme === "-dark" ? "text-white" : " ")
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
                        `w-50 centering ` +
                        (theme === "-dark" ? "text-white" : " ")
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
        </section>
        <section id="Skills" className="centering mt-3 mb-5">
          <h3>Skills</h3>
          <Row className="g-3 justify-content-md-center">
            <Row className="g-3 justify-content-md-center">
              <Col xs={12} md={4} lg={4}>
                <Card
                  className={
                    `p-2 ` +
                    (theme === "-dark" ? "main-card-dark " : "dropshadow")
                  }
                >
                  <Card.Body>
                    <Card.Title>Industry Skills</Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item
                        className={
                          `shadow card-text ` +
                          (theme === "-dark" ? "text-white" : " ")
                        }
                      >
                        Object Oriented Programming System
                      </ListGroup.Item>
                      <ListGroup.Item
                        className={
                          `mt-1 shadow ` +
                          (theme === "-dark" ? "text-white" : " ")
                        }
                      >
                        Database Management System
                      </ListGroup.Item>
                      <ListGroup.Item
                        className={
                          `mt-1 shadow ` +
                          (theme === "-dark" ? "text-white" : " ")
                        }
                      >
                        Software Development and Life Cycle
                      </ListGroup.Item>
                      <ListGroup.Item
                        className={
                          `mt-1 shadow ` +
                          (theme === "-dark" ? "text-white" : " ")
                        }
                      >
                        Data Structures and Algorithms
                      </ListGroup.Item>
                      <ListGroup.Item
                        className={
                          `mt-1 shadow ` +
                          (theme === "-dark" ? "text-white" : " ")
                        }
                      >
                        Problem Solving
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4} lg={4}>
                <Card
                  className={
                    `p-2 ` +
                    (theme === "-dark" ? "main-card-dark " : "dropshadow")
                  }
                >
                  <Card.Body>
                    <Card.Title>Technical Skills</Card.Title>
                    <ListGroup variant="flush card-text">
                      <ListGroup.Item
                        className={
                          `shadow ` + (theme === "-dark" ? "text-white" : " ")
                        }
                      >
                        Linux/ Windows
                      </ListGroup.Item>
                      <ListGroup.Item
                        className={
                          `mt-1 shadow ` +
                          (theme === "-dark" ? "text-white" : " ")
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
                          `mt-1 shadow ` +
                          (theme === "-dark" ? "text-white" : " ")
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
              </Col>
            </Row>
            <Row className="g-3 justify-content-md-center">
              <Col xs={12} md={8} lg={8} className="center">
                <Card
                  className={
                    `p-2 ` +
                    (theme === "-dark" ? "main-card-dark " : "dropshadow")
                  }
                >
                  <Card.Body>
                    <Card.Title>Projects</Card.Title>
                    <Card
                      className={
                        theme === "-dark"
                          ? `mb-4 mt-2 bg-card-color`
                          : `border rounded-2 shadow mb-4 mt-2 bg-card-color`
                      }
                    >
                      <div className="m-1 p-2">
                        <Card.Img
                          src={sap}
                          style={{ height: "50%" }}
                          className="border border-2 rounded-2"
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>SAP SuccessFactors EC & PMGM</Card.Title>
                        <div className="text-justify card-text">
                          <p
                            className={
                              `m-1 p-0 ` +
                              (theme === "-dark" ? "center" : "text-muted")
                            }
                          >
                            Tata Consultancy Services
                          </p>
                          <ul>
                            <li>
                              Supporting and Testing SAP Successfactors EC and
                              PMGM modules for the users in EMEA region.
                            </li>{" "}
                            <li>Employee Central</li>
                            <li className="mt-2">
                              Updating and Providing enhancements to
                              clients/customers that will increase their
                              productivity and interoperability
                            </li>
                          </ul>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card
                      className={
                        theme === "-dark"
                          ? `mb-4 bg-card-color`
                          : `border rounded-2 shadow mb-4 bg-card-color`
                      }
                    >
                      <div className="card-img-size mt-2 p-2">
                        <Card.Img
                          src={fit}
                          className="border border-3 border-dark rounded-2"
                        />
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
                          <Badge pill bg="success">
                            Heroku
                          </Badge>{" "}
                          (backend) &{" "}
                          <Badge pill bg="success">
                            Netlify
                          </Badge>{" "}
                          (frontend).
                        </div>
                        <a
                          href="https://github.com/varunteja007006/MERNstack"
                          target="_blank"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Github Link"
                          className={
                            `btn mt-2 ` +
                            (theme === "-dark"
                              ? "project-btn-dark"
                              : "project-btn")
                          }
                        >
                          <i className="fa-brands fa-github" alt=""></i>
                        </a>
                        <a
                          href="https://gleaming-rabanadas-387c5c.netlify.app"
                          target="_blank"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Launch Web App"
                          className={
                            `btn mt-2 ms-3 ` +
                            (theme === "-dark"
                              ? "project-btn-dark"
                              : "project-btn")
                          }
                        >
                          <i className="fa-solid fa-up-right-from-square"></i>
                        </a>
                      </Card.Body>
                    </Card>
                    <Card
                      className={
                        theme === "-dark"
                          ? `mb-4 bg-card-color`
                          : `border rounded-2 shadow mb-4 bg-card-color`
                      }
                    >
                      <div className="card-img-size mt-2 p-2">
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
                          This is my second project. Built on the{" "}
                          <Badge pill bg="success">
                            Django
                          </Badge>{" "}
                          framework provided the flexibilty to test my{" "}
                          <Badge pill bg="success">
                            Python
                          </Badge>{" "}
                          skills. I used various Python packages -{" "}
                          <Badge pill bg="success">
                            NLTK
                          </Badge>{" "}
                          ,{" "}
                          <Badge pill bg="success">
                            Numpy
                          </Badge>{" "}
                          ,{" "}
                          <Badge pill bg="success">
                            TextBlob
                          </Badge>{" "}
                          ,{" "}
                          <Badge pill bg="success">
                            Tweepy
                          </Badge>{" "}
                          ,{" "}
                          <Badge pill bg="success">
                            Pandas
                          </Badge>
                          .
                        </div>
                        <a
                          href="https://github.com/varunteja007006/Twitter-Sentiment-analysis-on-politicians-using-Django"
                          target="_blank"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Github Link"
                          className={
                            `btn mt-2 ` +
                            (theme === "-dark"
                              ? "project-btn-dark"
                              : "project-btn")
                          }
                        >
                          <i className="fa-brands fa-github" alt=""></i>
                        </a>
                      </Card.Body>
                    </Card>
                    <Card
                      className={
                        theme === "-dark"
                          ? `mb-4 bg-card-color`
                          : `border rounded-2 shadow mb-4 bg-card-color`
                      }
                    >
                      <div className="card-img-size mt-2 p-2">
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
                          This is my first project. It was built using{" "}
                          <Badge pill bg="success">
                            PHP
                          </Badge>{" "}
                          to communicate with{" "}
                          <Badge pill bg="success">
                            MySQL
                          </Badge>{" "}
                          server on localhost. The webpage built with{" "}
                          <Badge pill bg="success">
                            HTML
                          </Badge>{" "}
                          &{" "}
                          <Badge pill bg="success">
                            Bootstrap CSS
                          </Badge>{" "}
                          .
                          <Badge pill bg="success">
                            AJAX
                          </Badge>{" "}
                          is also used to update the contents on the homepage
                          (Sports infomration snippets).
                        </div>
                        <a
                          href="https://github.com/varunteja007006/Sportz-Management-Website-Bootstrap"
                          target="_blank"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Github Link"
                          className={
                            `btn mt-2 ` +
                            (theme === "-dark"
                              ? "project-btn-dark"
                              : "project-btn")
                          }
                        >
                          <i className="fa-brands fa-github" alt=""></i>
                        </a>
                      </Card.Body>
                    </Card>
                    <Card
                      className={
                        theme === "-dark"
                          ? `mb-4 bg-card-color`
                          : `border rounded-2 shadow mb-4 bg-card-color`
                      }
                    >
                      <div className="card-img-size mt-2 p-2">
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
                          Budget is a{" "}
                          <Badge pill bg="success">
                            Django
                          </Badge>{" "}
                          based web app.{" "}
                          <Badge pill bg="success">
                            Bootstrap CSS
                          </Badge>{" "}
                          is used to design it as simple as possible. The most
                          attractive part is how it displays various data that
                          is analyzed by{" "}
                          <Badge pill bg="success">
                            Python
                          </Badge>{" "}
                          . Python libraries such as{" "}
                          <Badge pill bg="success">
                            Numpy
                          </Badge>
                          ,{" "}
                          <Badge pill bg="success">
                            Matplotlib
                          </Badge>{" "}
                          are used to display{" "}
                          <Badge pill bg="success">
                            dot graphs
                          </Badge>
                          ,{" "}
                          <Badge pill bg="success">
                            bar charts
                          </Badge>
                          ,{" "}
                          <Badge pill bg="success">
                            pie charts
                          </Badge>
                          , etc.. This data can also be downloaded in{" "}
                          <Badge pill bg="success">
                            .csv
                          </Badge>{" "}
                          format.
                        </div>
                        <a
                          href="https://github.com/varunteja007006/Budget"
                          target="_blank"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Github Link"
                          className={
                            `btn mt-2 ` +
                            (theme === "-dark"
                              ? "project-btn-dark"
                              : "project-btn")
                          }
                        >
                          <i className="fa-brands fa-github" alt=""></i>
                        </a>
                      </Card.Body>
                    </Card>
                    <Collapse in={open}>
                      <Card
                        className={
                          theme === "-dark"
                            ? `mb-4 bg-card-color`
                            : `border rounded-2 shadow mb-4 bg-card-color`
                        }
                      >
                        <div className="card-img-size mt-2 p-2">
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
                            Collabs is built as a college collaboration tool.
                            Users can login and post their skills and projects.
                            It will help other interested parties to contact you
                            for collaboration. It is built on{" "}
                            <Badge pill bg="success">
                              Django
                            </Badge>
                            .{"  "}
                            <Badge pill bg="success">
                              Materialize CSS
                            </Badge>{" "}
                            is used to style the website.
                          </div>
                          <a
                            href="https://github.com/varunteja007006/collabs_WebApp_Django"
                            target="_blank"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Github Link"
                            className={
                              `btn mt-2 ` +
                              (theme === "-dark"
                                ? "project-btn-dark"
                                : "project-btn")
                            }
                          >
                            <i className="fa-brands fa-github" alt=""></i>
                          </a>
                        </Card.Body>
                      </Card>
                    </Collapse>
                    <Collapse in={open}>
                      <Card
                        className={
                          theme === "-dark"
                            ? `mb-4 bg-card-color`
                            : `border rounded-2 shadow mb-4 bg-card-color`
                        }
                      >
                        <div className="card-img-size mt-2 p-2">
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
                            This Portifolio website is a resume to show my
                            skills and qualifications.{" "}
                            <Badge pill bg="success">
                              React
                            </Badge>{" "}
                            and{" "}
                            <Badge pill bg="success">
                              Bootstrap SASS
                            </Badge>{" "}
                            is used. Elegantly built and also has a contact form
                            that submits your form which is then mailed to me by{" "}
                            <Badge pill bg="success">
                              Email Js
                            </Badge>{" "}
                            . This website is can be viewed in dark mode as
                            well.
                          </div>
                          <a
                            href="https://github.com/varunteja007006/Portifolio"
                            target="_blank"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Github Link"
                            className={
                              `btn mt-2 ` +
                              (theme === "-dark"
                                ? "project-btn-dark"
                                : "project-btn")
                            }
                          >
                            <i className="fa-brands fa-github" alt=""></i>
                          </a>
                          <a
                            href="https://beautiful-meerkat-18a36f.netlify.app/"
                            target="_blank"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Launch Web App"
                            className={
                              `btn mt-2 ms-3 ` +
                              (theme === "-dark"
                                ? "project-btn-dark"
                                : "project-btn")
                            }
                          >
                            <i className="fa-solid fa-up-right-from-square"></i>
                          </a>
                        </Card.Body>
                      </Card>
                    </Collapse>
                    <Collapse in={open}>
                      <Card
                        className={
                          theme === "-dark"
                            ? `mb-4 bg-card-color`
                            : `border rounded-2 shadow mb-4 bg-card-color`
                        }
                      >
                        <div className="card-img-size mt-2 p-2">
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
                                SASS
                              </Badge>{" "}
                            </p>
                            Simple Blog is built on React and data is saved on
                            Json server (localhost, port 8000). This was built
                            to learn{" "}
                            <Badge pill bg="success">
                              SASS
                            </Badge>{" "}
                            and{" "}
                            <Badge pill bg="success">
                              React
                            </Badge>
                            . Most importantly it helped me to understand CRUD
                            operations better.
                          </div>
                          <a
                            href="https://github.com/varunteja007006/Simple-Blog-React"
                            target="_blank"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Github Link"
                            className={
                              `btn mt-2 ` +
                              (theme === "-dark"
                                ? "project-btn-dark"
                                : "project-btn")
                            }
                          >
                            <i className="fa-brands fa-github" alt=""></i>
                          </a>
                        </Card.Body>
                      </Card>
                    </Collapse>
                    <Collapse in={open}>
                      <Card
                        className={
                          theme === "-dark"
                            ? `mb-4 bg-card-color`
                            : `border rounded-2 shadow mb-4  bg-card-color`
                        }
                      >
                        <div className="card-img-size mt-2 p-2">
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
                            React Notes is a simple react project that I built
                            to learn the CRUD operations. It is simple project
                            that can be deployed on the Json server (localhost,
                            port 8000).{" "}
                            <Badge pill bg="success">
                              React
                            </Badge>{" "}
                            and{" "}
                            <Badge pill bg="success">
                              Bootstrap SASS
                            </Badge>{" "}
                            is used on the frontend.
                          </div>
                          <a
                            href="https://github.com/varunteja007006/react_notes"
                            target="_blank"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Github Link"
                            className={
                              `btn mt-2 ` +
                              (theme === "-dark"
                                ? "project-btn-dark"
                                : "project-btn")
                            }
                          >
                            <i className="fa-brands fa-github" alt=""></i>
                          </a>
                        </Card.Body>
                      </Card>
                    </Collapse>
                    <Button
                      onClick={() => {
                        setOpen(!open);
                      }}
                      aria-controls="example-fade-text"
                      aria-expanded={open}
                      variant="outline-dark-blue"
                      className={
                        `mt-3 shadow-sm ` +
                        (theme === "-dark" ? "send-btn-dark" : "send-btn")
                      }
                    >
                      {open === true ? "Show less" : "Show more"}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="g-3 justify-content-md-center pt-3">
              <Col xs={12} md={8} lg={8} className="center">
                <Card
                  className={
                    `p-2 ` +
                    (theme === "-dark" ? "main-card-dark " : "dropshadow")
                  }
                >
                  <Card.Body>
                    <Card.Title>Certifications</Card.Title>
                    <ListGroup variant="flush" className="center card-text">
                      <ListGroup.Item
                        className={
                          `w-100 shadow ` +
                          (theme === "-dark" ? "text-white" : " ")
                        }
                      >
                        Building Web Applications in PHP
                        <p
                          className={
                            `m-1 p-0 ` +
                            (theme === "-dark" ? " " : "text-muted")
                          }
                        >
                          - Coursera
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item
                        className={
                          `w-100 mt-2 shadow ` +
                          (theme === "-dark" ? "text-white" : " ")
                        }
                      >
                        Introduction to Machine Learning
                        <p
                          className={
                            `m-1 p-0 ` +
                            (theme === "-dark" ? " " : "text-muted")
                          }
                        >
                          - Coursera
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item
                        className={
                          `w-100 mt-2 shadow ` +
                          (theme === "-dark" ? "text-white" : " ")
                        }
                      >
                        PCAP Programming Essentials in Python
                        <p
                          className={
                            `m-1 p-0 ` +
                            (theme === "-dark" ? " " : "text-muted")
                          }
                        >
                          - Cisco
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item
                        className={
                          `w-100 mt-2 shadow ` +
                          (theme === "-dark" ? "text-white" : " ")
                        }
                      >
                        Introduction of JavaScript
                        <p
                          className={
                            `m-1 p-0 ` +
                            (theme === "-dark" ? " " : "text-muted")
                          }
                        >
                          - Great Learning
                        </p>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Row>
        </section>
        <section id="Contact" className="centering mt-4">
          <h3>Contact Me</h3>
          <h6 className="text-muted">
            You can contact me or share your feedback by filling the form below
          </h6>
          <Row className="g-3 justify-content-md-center">
            <Col xs={12} md={12} lg={12} className="center">
              <Card
                className={theme === "-dark" ? "main-card-dark " : "dropshadow"}
              >
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
        </section>
      </Container>
    </main>
  );
}

export default Home;
