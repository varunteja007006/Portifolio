import React, { useState } from "react";

import {
  Button,
  Card,
  Collapse,
  Badge,
} from "react-bootstrap";

import budget from "../assests/budget/budget.png";
import budget_1 from "../assests/budget/budget_1.png";
import budget_2 from "../assests/budget/budget_2.png";
import budget_3 from "../assests/budget/budget_3.png";
import budget_4 from "../assests/budget/budget_4.png";

import collabs from "../assests/collabs/collabs.png";
import collabs_1 from "../assests/collabs/collabs_1.png";
import collabs_2 from "../assests/collabs/collabs_2.png";
import collabs_3 from "../assests/collabs/collabs_3.png";
import collabs_4 from "../assests/collabs/collabs_4.png";

import fit from "../assests/fit/fit.png";
import fit_1 from "../assests/fit/fit_1.png";

import myblog from "../assests/myblog/myblog.png";
import myblog_1 from "../assests/myblog/myblog_1.png";

import sentiment_analysis from "../assests/sentiment_analysis/sentiment_analysis.png";
import sentiment_analysis_1 from "../assests/sentiment_analysis/sentiment_analysis_1.png";
import sentiment_analysis_2 from "../assests/sentiment_analysis/sentiment_analysis_2.png";
import sentiment_analysis_3 from "../assests/sentiment_analysis/sentiment_analysis_3.png";
import sentiment_analysis_4 from "../assests/sentiment_analysis/sentiment_analysis_4.png";

import sports_management from "../assests/sports_management/sports_management.png";
import sports_management_1 from "../assests/sports_management/sports_management_1.png";
import sports_management_2 from "../assests/sports_management/sports_management_2.png";
import sports_management_3 from "../assests/sports_management/sports_management_3.png";
import sports_management_4 from "../assests/sports_management/sports_management_4.png";
import sports_management_5 from "../assests/sports_management/sports_management_5.png";
import sports_management_6 from "../assests/sports_management/sports_management_6.png";
import sports_management_7 from "../assests/sports_management/sports_management_7.png";
import sports_management_8 from "../assests/sports_management/sports_management_8.png";
import sports_management_9 from "../assests/sports_management/sports_management_9.png";


import portifolio from "../assests/portifolio/portifolio.png";
import portifolio_1 from "../assests/portifolio/portifolio_1.png";

import sap from "../assests/sap.jpg";

import simple_notes from "../assests/simple_notes.png";

import { useThemeContext } from "../hook/useThemeContext";

function Projects() {
  const [open, setOpen] = useState(false);
  const { theme } = useThemeContext();

  return (
    <div>
      <Card
        className={
          `p-2 ` + (theme === "-dark" ? "main-card-dark " : "dropshadow")
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
            <div className="m-2 p-0">
              <Card.Img
                src={sap}
                style={{ height: "50%" }}
                className="border border-2 rounded-top"
              />
            </div>
            <Card.Body>
              <Card.Title>SAP SuccessFactors EC & PMGM</Card.Title>
              <div className="text-justify card-text">
                <p
                  className={
                    `m-1 p-0 ` + (theme === "-dark" ? "center" : "text-muted")
                  }
                >
                  Tata Consultancy Services
                </p>
                <ul>
                  <li>
                    Supporting and Testing SAP Successfactors EC and PMGM
                    modules for the users in EMEA region.
                  </li>{" "}
                  <li>Employee Central</li>
                  <li className="mt-2">
                    Updating and Providing enhancements to clients/customers
                    that will increase their productivity and interoperability
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
            <div className="card-img-size m-2 p-0 border border-2 rounded-top border-dark">
              <Card.Img src={fit} className="rounded-0" />
              <Card.Img src={fit_1} className="rounded-0" />
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
                MERN stack application,{" "}
                <Badge pill bg="success">
                  React
                </Badge>{" "}
                on the front end and on the backend{" "}
                <Badge pill bg="success">
                  Node js
                </Badge>{" "}
                and{" "}
                <Badge pill bg="success">
                  Express
                </Badge>{" "}
                as middleware with{" "}
                <Badge pill bg="success">
                  MongoDB
                </Badge>{" "}
                database. Hosted this web app on{" "}
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
                href="https://github.com/varunteja007006/MERNstackdeploy"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Github Link"
                className={
                  `btn mt-2 ` +
                  (theme === "-dark" ? "project-btn-dark" : "project-btn")
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
                  (theme === "-dark" ? "project-btn-dark" : "project-btn")
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
            <div className="card-img-size m-2 p-0 border border-2 rounded-top border-dark">
              <Card.Img src={sentiment_analysis} className="rounded-0" />
              <Card.Img src={sentiment_analysis_1} className="rounded-0" />
              <Card.Img src={sentiment_analysis_2} className="rounded-0" />
              <Card.Img src={sentiment_analysis_3} className="rounded-0" />
              <Card.Img src={sentiment_analysis_4} className="rounded-0" />
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
                  (theme === "-dark" ? "project-btn-dark" : "project-btn")
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
            <div className="card-img-size m-2 p-0 border border-2 rounded-top border-dark">
              <Card.Img src={sports_management} className="rounded-0" />
              <Card.Img src={sports_management_1} className="rounded-0" />
              <Card.Img src={sports_management_2} className="rounded-0" />
              <Card.Img src={sports_management_3} className="rounded-0" />
              <Card.Img src={sports_management_4} className="rounded-0" />
              <Card.Img src={sports_management_5} className="rounded-0" />
              <Card.Img src={sports_management_6} className="rounded-0" />
              <Card.Img src={sports_management_7} className="rounded-0" />
              <Card.Img src={sports_management_8} className="rounded-0" />
              <Card.Img src={sports_management_9} className="rounded-0" />
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
                is also used to update the contents on the homepage (Sports
                infomration snippets).
              </div>
              <a
                href="https://github.com/varunteja007006/Sportz-Management-Website-Bootstrap"
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Github Link"
                className={
                  `btn mt-2 ` +
                  (theme === "-dark" ? "project-btn-dark" : "project-btn")
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
            <div className="card-img-size m-2 p-0 border border-2 rounded-top border-dark">
              <Card.Img src={budget} className="rounded-0" />{" "}
              <Card.Img src={budget_1} className="rounded-0" />{" "}
              <Card.Img src={budget_2} className="rounded-0" />{" "}
              <Card.Img src={budget_3} className="rounded-0" />{" "}
              <Card.Img src={budget_4} className="rounded-0" />
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
                is used to design it as simple as possible. The most attractive
                part is how it displays various data that is analyzed by{" "}
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
                  (theme === "-dark" ? "project-btn-dark" : "project-btn")
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
              <div className="card-img-size m-2 p-0 border border-2 rounded-top border-dark">
                <Card.Img src={collabs} className="rounded-0" />
                <Card.Img src={collabs_1} className="rounded-0" />
                <Card.Img src={collabs_2} className="rounded-0" />
                <Card.Img src={collabs_3} className="rounded-0" />
                <Card.Img src={collabs_4} className="rounded-0" />
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
                  Collabs is built as a college collaboration tool. Users can
                  login and post their skills and projects. It will help other
                  interested parties to contact you for collaboration. It is
                  built on{" "}
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
                    (theme === "-dark" ? "project-btn-dark" : "project-btn")
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
              <div className="card-img-size m-2 p-0 border border-2 rounded-top border-dark">
                <Card.Img src={portifolio} className="rounded-0" />
                <Card.Img src={portifolio_1} className="rounded-0" />
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
                  This Portifolio website is a resume to show my skills and
                  qualifications.{" "}
                  <Badge pill bg="success">
                    React
                  </Badge>{" "}
                  and{" "}
                  <Badge pill bg="success">
                    Bootstrap SASS
                  </Badge>{" "}
                  is used. Elegantly built and also has a contact form that
                  submits your form which is then mailed to me by{" "}
                  <Badge pill bg="success">
                    Email Js
                  </Badge>{" "}
                  . This website is can be viewed in dark mode as well.
                </div>
                <a
                  href="https://github.com/varunteja007006/Portifolio"
                  target="_blank"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Github Link"
                  className={
                    `btn mt-2 ` +
                    (theme === "-dark" ? "project-btn-dark" : "project-btn")
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
                    (theme === "-dark" ? "project-btn-dark" : "project-btn")
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
              <div className="card-img-size m-2 p-0 border border-2 rounded-top border-dark">
                <Card.Img src={myblog} className="rounded-0" />
                <Card.Img src={myblog_1} className="rounded-0" />
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
                  Simple Blog is built on React and data is saved on Json server
                  (localhost, port 8000). This was built to learn{" "}
                  <Badge pill bg="success">
                    SASS
                  </Badge>{" "}
                  and{" "}
                  <Badge pill bg="success">
                    React
                  </Badge>
                  . Most importantly it helped me to understand CRUD operations
                  better.
                </div>
                <a
                  href="https://github.com/varunteja007006/Simple-Blog-React"
                  target="_blank"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Github Link"
                  className={
                    `btn mt-2 ` +
                    (theme === "-dark" ? "project-btn-dark" : "project-btn")
                  }
                >
                  <i className="fa-brands fa-github" alt=""></i>
                </a>
              </Card.Body>
            </Card>
          </Collapse>
          {/*
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
                  React Notes is a simple react project that I built to learn
                  the CRUD operations. It is simple project that can be deployed
                  on the Json server (localhost, port 8000).{" "}
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
                    (theme === "-dark" ? "project-btn-dark" : "project-btn")
                  }
                >
                  <i className="fa-brands fa-github" alt=""></i>
                </a>
              </Card.Body>
            </Card>
          </Collapse> */}
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
    </div>
  );
}

export default Projects;
