import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import {
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaGithub,
  FaPython,
  FaJs,
} from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";

import TypeWriter from "./TypeWriter";
import Repositories from "./Repositories";

import { accordionProject } from "../text/accordionProject";
import About from "../pages/About";
import HireMe from "../pages/HireMe";
import Reviews from "../pages/Reviews";
// import MySpline from "./MySpline";

function HomePageAccordion() {
  return (
    <Container>
      <Accordion defaultActiveKey={["0", "6"]} flush alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {" "}
            <h1 className="homeH1">
              <TypeWriter text="PROJECTS" delay={150} />
            </h1>
          </Accordion.Header>
          {accordionProject}
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h1 className="homeH1">
              <TypeWriter text="SKILLS & TOOLS" delay={150} />
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            <br />
            <br />
            <br />
            <br />
            <Container fluid>
              <Row className="skillIconG2P">
                <Col>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/javascript"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Container>
                      <FaJs title="JavaScript" />
                    </Container>
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
                  <a
                    href="https://www.python.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaPython title="Python" />
                  </a>
                </Col>
              </Row>
            </Container>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Container fluid>
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
                  <a
                    href="https://www.python.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub title="GitHub" />
                  </a>
                </Col>
              </Row>
            </Container>
            <br />
            <br />
            <br />
            <br />
            <br />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            {" "}
            <h1 className="homeH1">
              <TypeWriter text="REVIEWS" delay={150} />
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            <h2>
              MongoDB as database for reviews (wind-up may cause delay to load):{" "}
            </h2>
            <br />
            <Reviews />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h1 className="homeH1">
              <TypeWriter text="REPOSITORIES" delay={150} />
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            <h2>GitHub's API pulls some recent repositories: </h2>
            <br />
            <br />
            <br />
            <Repositories />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            {" "}
            <h1 className="homeH1">
              <TypeWriter text="ABOUT ME" delay={150} />
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            <About />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>
            {" "}
            <h1 className="homeH1">
              <TypeWriter text="HIRE ME" delay={150} />
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            <HireMe />
          </Accordion.Body>
        </Accordion.Item>

        {/* <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h1 className="homeH1">
              <TypeWriter text="SPLINE" delay={150} />
            </h1>
          </Accordion.Header>
          <Accordion.Body>{my spline?}</Accordion.Body>
        </Accordion.Item> */}
      </Accordion>
      {/* <MySpline /> */}
    </Container>
  );
}

export default HomePageAccordion;
