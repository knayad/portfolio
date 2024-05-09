import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
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

import busGiphy from "../assets/pages/MIT-bus-stops-giphy.gif";
import pacMan from "../assets/pages/pacMan factory- giphy.gif";
import eyesGiphy from "../assets/pages/giphy-eyes.gif";
import numberRun from "../assets/pages/numberRun-giphy.gif";

import About from "../pages/About";
import HireMe from "../pages/HireMe";
import Reviews from "../pages/Reviews";
import Repos from "../pages/Repos";

function HomePageAccordion() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
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
          <Row className="skillIconG2P">
            <Col>
              <a href="https://developer.mozilla.org/en-US/docs/Web/javascript">
                <FaJs title="JavaScript" />
              </a>
            </Col>
            <Col>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <FaCss3Alt title="CSS" />
              </a>
            </Col>
            {/* <Col>
          <TbBrandJavascript title="JavaScript" />
        </Col> */}
            <Col>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                <FaHtml5 title="HTML" />
              </a>
            </Col>
            <Col>
              <a href="https://www.python.org/">
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
              <a href="https://react.dev/">
                <RiReactjsFill title="React" />
              </a>
            </Col>
            <Col>
              <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">
                <FaBootstrap title="Bootstrap" />
              </a>
            </Col>
            <Col>
              <a href="https://www.python.org/">
                <FaGithub title="GitHub" />
              </a>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          {" "}
          <h1 className="homeH1">
            <TypeWriter text="PROJECTS" delay={150} />
          </h1>
        </Accordion.Header>
        <Accordion.Body>
          <br />
          <br />
          <br />
          <Row>
            <br />
            <br />
            <br />
            <Col className="projectGIFS">
              <a href="https://github.com/knayad/basicAnimationToMaps">
                <img src={busGiphy} alt="bus route map" />
              </a>
            </Col>
            <Col> </Col>
            <Col>
              {" "}
              <a href="https://github.com/knayad/following-eyes">
                <img src={eyesGiphy} alt="eyes Giphy" />
              </a>
            </Col>
          </Row>
          <br />
          <br />

          <Row>
            <Col>
              <a href="https://github.com/knayad/numberRun">
                <img src={numberRun} alt="number run" />
              </a>
            </Col>
            <Col> </Col>
            <Col>
              <a href="https://github.com/knayad/pacManFactory">
                <img src={pacMan} alt="pacMan" />
              </a>
            </Col>
          </Row>
          <Button variant="success" size="sm" href="repos">
            MORE PROJECTS...
          </Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
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
      <Accordion.Item eventKey="3">
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
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          {" "}
          <h1 className="homeH1">
            <TypeWriter text="REVIEWS" delay={150} />
          </h1>
        </Accordion.Header>
        <Accordion.Body>
          <Reviews />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          <h1 className="homeH1">
            <TypeWriter text="REPOSITORIES" delay={150} />
          </h1>
        </Accordion.Header>
        <Accordion.Body>
          <Repos />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default HomePageAccordion;
