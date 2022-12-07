<Row xs={1} md={2} className="g-4">
  <Col xs={12} md={6} lg={6}>
    <Card>
      <Card.Img variant="top" src={sap} />
      <Card.Body>
        <Card.Title className="h-50%">
          SAP SuccessFactors EC & PMGM (Present){" "}
        </Card.Title>
        <Card.Text>
          <p className="text-muted center">Tata Consultancy Services</p>
          <Collapse in={open}>
            <div id="collapse-text-one">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Collapse>
        </Card.Text>
        <Card.Footer className="card-footer">
          <span>
            {" "}
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="collapse-text-one"
              aria-expanded={open}
              variant="outline-dark-blue"
              className="send-btn"
            >
              More info...
            </Button>
          </span>
          <span>
            <a
              href="https://github.com/varunteja007006?tab=repositories"
              target="_blank"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Github"
              className="btn project-btn"
            >
              <i className="fa-brands fa-github" alt=""></i>
            </a>
          </span>
        </Card.Footer>
      </Card.Body>
    </Card>
  </Col>{" "}
  <Col xs={12} md={6} lg={6}>
    <Card className="">
      <Card.Img variant="top" src={sap} />
      <Card.Body className="">
        <Card.Title>Twitter Sentiment Analysis</Card.Title>
        <Card.Text className="text-justify">
          <p className="text-muted center">Django, Python</p>
          <Collapse in={open}>
            <div id="collapse-text-one">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Collapse>
        </Card.Text>
        <Card.Footer className="card-footer">
          <span>
            {" "}
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="collapse-text-one"
              aria-expanded={open}
              variant="outline-dark-blue"
              className="send-btn"
            >
              More info...
            </Button>
          </span>
          <span>
            <a
              href="https://github.com/varunteja007006?tab=repositories"
              target="_blank"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Github"
              className="btn project-btn"
            >
              <i className="fa-brands fa-github" alt=""></i>
            </a>
          </span>
        </Card.Footer>
      </Card.Body>
    </Card>
  </Col>{" "}
  <Col xs={12} md={6} lg={6}>
    <Card className="">
      <Card.Img variant="top" src={sap} />
      <Card.Body className="">
        <Card.Title>
          Sports Management Website
          <p className="text-muted">CSS, HTML, JavaScript, MySQL, PHP</p>
        </Card.Title>
        <Card.Text className="text-justify">
          <Collapse in={open}>
            <div id="collapse-text-one">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Collapse>
        </Card.Text>
        <Card.Footer className="card-footer">
          <span>
            {" "}
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="collapse-text-one"
              aria-expanded={open}
              variant="outline-dark-blue"
              className="send-btn"
            >
              More info...
            </Button>
          </span>
          <span>
            <a
              href="https://github.com/varunteja007006?tab=repositories"
              target="_blank"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Github"
              className="btn project-btn"
            >
              <i className="fa-brands fa-github" alt=""></i>
            </a>
          </span>
        </Card.Footer>
      </Card.Body>
    </Card>
  </Col>
</Row>;
