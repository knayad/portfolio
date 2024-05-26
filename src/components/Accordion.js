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
// import Repositories from "./Repositories";

import NounHero from "../assets/projects/NounHero.png";
import NadiaPortfolio from "../assets/projects/NadiaPortfolio.png";
import ReviewsAPI from "../assets/projects/ReviewsAPI.png";
import pythonPasswords from "../assets/projects/pythonPasswords.png";

import busGiphy from "../assets/projects/MIT-bus-stops-giphy.gif";

import About from "../pages/About";
import HireMe from "../pages/HireMe";
import Reviews from "../pages/Reviews";
import MySpline from "./MySpline";

function HomePageAccordion() {
  return (
    <Accordion defaultActiveKey={["0", "6"]} flush>
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
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          {" "}
          <h1 className="homeH1">
            <TypeWriter text="PROJECTS" delay={150} />
          </h1>
        </Accordion.Header>
        <Accordion.Body>
          <br />
          <p id="aboutMeBlurb">
            Click the thumbnail to checkout the associated Github Repo.
          </p>
          <br />
          <Row>
            <Col>
              <a
                href="https://github.com/knayad/blog"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={NounHero}
                  className="projectImgs"
                  alt="Noun Blog site"
                />
              </a>
            </Col>
            <Col>
              <h2>
                <i>Noun</i>
              </h2>
              <strong>A MERN STACK BLOG SITE USING TAILWIND CSS</strong>
              <br />
              <br />
              <p>
                {" "}
                Client-side blog site using Tailwind CSS and the MERN stack{" "}
                <strong>MongoDB, Express.js, React.js, and Node.js</strong>.
                Created a responsive website for desktop, tablets, and mobile
                using custom React components.{" "}
              </p>
              Get a sneak peek{" "}
              <a
                href="https://blog-afcj.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                here.
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <a
                href="https://github.com/knayad/portfolio-api"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ReviewsAPI}
                  alt="backend MERN stack portfolio site for peer reviews"
                  className="projectImgs"
                />
              </a>
            </Col>
            <Col>
              <h2>
                <i>Portfolio API</i>
              </h2>
              <p>
                Connected MongoDB to the frontend of the project using Mongoose.
                All CRUD routes were created, limited authorization was created
                to restrict use for only retrieval and posting peer reviews.
                React context and React reducer were used to update state for
                new posts. <br />
                <br />
                Check out the Reviews section of this page for more!
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <a
                href="https://github.com/knayad/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={NadiaPortfolio}
                  alt="frontend MERN stack portfolio site"
                  className="projectImgs"
                />
              </a>
            </Col>
            <Col>
              <h2>
                <i>Portfolio</i>
              </h2>
              <strong>MERN STACK STATIC SITE ON GITHUB PAGES</strong>
              <br />
              <br />
              <p>
                Created a static portfolio on GitHub Pages, using the MERN
                stack. Utilized JavaScript (ES6) for custom functions.
                Incorporated Google Fonts, Fonts Awesome, React Icons, Spline,
                React PDF Viewer, and React Bootstrap.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <a
                href="https://github.com/knayad/pythonPasswords"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={pythonPasswords}
                  alt="python password generator"
                  className="projectImgs"
                />
              </a>
            </Col>
            <Col>
              <h2>
                <i>Python Password Generator</i>
              </h2>
              <p>
                Passwords are the linchpin for many programs to keep your
                information safe. Generally, the more complex a password, the
                safer your information. However, many people re-use passwords
                and only make minor modifications to them. This can compromise
                the security of the applications we use by putting the
                authentication process at risk. This python project aims to
                generate more complex passwords.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="projectGIFS">
              <a
                href="https://github.com/knayad/basicAnimationToMaps"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={busGiphy}
                  alt="bus route map"
                  className="projectImgs"
                />
              </a>
            </Col>
            <Col>
              <h2>
                <i>Mapbox API Bus Route</i>
              </h2>
              <p>
                Utilizes the Mapbox library and API, JavaScript, CSS, and HTML
                to render a map on a web page to show real-time data. This
                project is, as such, an animation. MBTA bus data: stops between
                Harvard and MIT with an animated marker on the map to highlight
                the bus routes.
              </p>
            </Col>
          </Row>

          {/* <Button variant="success" size="sm" href="repos">
            MORE PROJECTS...
          </Button> */}
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
      {/* <Accordion.Item eventKey="5">
        <Accordion.Header>
          <h1 className="homeH1">
            <TypeWriter text="REPOSITORIES" delay={150} />
          </h1>
        </Accordion.Header>
        <Accordion.Body>
          <Repositories />
        </Accordion.Body>
      </Accordion.Item> */}
      <Accordion.Item eventKey="6">
        <Accordion.Header>
          <h1 className="homeH1">
            <TypeWriter text="SPLINE" delay={150} />
          </h1>
        </Accordion.Header>
        <Accordion.Body>
          <MySpline />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default HomePageAccordion;
