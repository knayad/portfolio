import React from "react";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import sup from "../assets/pages/bastrad-sup.png";

import HomePageAccordion from "../components/Accordion";
import ModalComponent from "../components/ModalComponent";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col className="landing-page-col">
          <Container fluid className="nameTagSize">
            <h1 id="my-name-tag-hello">
              <b>HELLO</b>
              <br />
              <p id="my-name-tag">MY NAME IS</p>
              <span>
                <h3 id="my-name">Nadia Ayad</h3>
              </span>
            </h1>
          </Container>
        </Col>{" "}
        <Col>
          <br />
          <img id="sup" alt="sup?" src={sup} />
          <p id="my-spiel">
            I am a full stack web developer with an interest in data science.
          </p>
          {/* <span>
            <Button variant="success" size="lg" href="hire">
              Hire Me
            </Button>{" "}
            <Button variant="success" size="lg" href="about">
              About Me
            </Button>
          </span> */}
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <HomePageAccordion />
      </Row>
      <ModalComponent />
    </Container>
  );
};

export default Home;
