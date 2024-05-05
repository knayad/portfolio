import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import {
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaGithub,
  FaPython,
  FaJs,
} from "react-icons/fa";
// import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";

import sup from "../assets/home/bastrad-sup.png";
import busGiphy from "../assets/home/MIT-bus-stops-giphy.gif";
import pacMan from "../assets/home/pacMan factory- giphy.gif";
import eyesGiphy from "../assets/home/giphy-eyes.gif";
import numberRun from "../assets/home/numberRun-giphy.gif";

import MySpline from "../components/MySpline";
import TypeWriter from "../components/TypeWriter";
import ModalComponent from "../components/ModalComponent";

const Home = () => {
  return (
    <Container>
      <Row>
        {/* <TypeWriter text="Welcome" delay={150} /> */}
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
          {/* <img alt="Skull with roses" src={skull} /> */}
          <img id="sup" alt="sup?" src={sup} />
          <p id="my-spiel">
            I am a full stack web developer with an interest in data science.
          </p>
          <span>
            <Button variant="success" size="lg" href="hire">
              Hire Me
            </Button>{" "}
            <Button variant="success" size="lg" href="about">
              About Me
            </Button>
          </span>
        </Col>
      </Row>
      <br />
      <br />
      <h1 className="homeH1">
        <TypeWriter text="SKILLS & TOOLS" delay={150} />
      </h1>
      <br />
      <br />

      <br />
      <br />
      <Row className="skillIconG2P">
        <Col>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/javascript"
            target="_blank"
            rel="noreferrer"
          >
            <FaJs title="JavaScript" />
          </a>
        </Col>
        <Col>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
          >
            <FaCss3Alt title="CSS" />
          </a>
        </Col>
        {/* <Col>
          <TbBrandJavascript title="JavaScript" />
        </Col> */}
        <Col>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noreferrer"
          >
            <FaHtml5 title="HTML" />
          </a>
        </Col>
        <Col>
          <a href="https://www.python.org/" target="_blank" rel="noreferrer">
            <FaPython title="Python" />
          </a>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row className="skillIconP2G">
        <Col>
          <a href="https://react.dev/" rel="noreferrer">
            <RiReactjsFill title="React" />
          </a>
        </Col>
        <Col>
          <a
            href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
            target="_blank"
            rel="noreferrer"
          >
            <FaBootstrap title="Bootstrap" />
          </a>
        </Col>
        <Col>
          <a href="https://www.python.org/" target="_blank" rel="noreferrer">
            <FaGithub title="GitHub" />
          </a>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row>
        <h1 className="homeH1">
          <TypeWriter text="PROJECTS" delay={150} />
        </h1>
        <br />
        <br />
        <br />
        <Col className="projectGIFS">
          <a
            href="https://github.com/knayad/basicAnimationToMaps"
            target="_blank"
            rel="noreferrer"
          >
            <img src={busGiphy} alt="bus route map" />
          </a>
        </Col>
        <Col> </Col>
        <Col>
          {" "}
          <a
            href="https://github.com/knayad/following-eyes"
            target="_blank"
            rel="noreferrer"
          >
            <img src={eyesGiphy} alt="eyes Giphy" />
          </a>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col id="spline">
          <MySpline />
          <br />
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            href="https://github.com/knayad/numberRun"
            target="_blank"
            rel="noreferrer"
          >
            <img src={numberRun} alt="number run" />
          </a>
          <Button variant="success" size="md" href="repos">
            MORE PROJECTS...
          </Button>
        </Col>
        <Col> </Col>
        <Col>
          <a
            href="https://github.com/knayad/pacManFactory"
            target="_blank"
            rel="noreferrer"
          >
            <img src={pacMan} alt="pacMan" />
          </a>
        </Col>
      </Row>
      <ModalComponent />
    </Container>
  );
};

export default Home;
