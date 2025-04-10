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

import TBCC from "../assets/projects/TBCC.png";
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
    <Container>
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
            <h2>Click the thumbnail to look at the associated project.</h2>
            <br />
            <br />
            <Row>
              <Col>
                <a
                  href="https://thebosscoffeecompany.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={TBCC}
                    className="projectImgs"
                    alt="The Boss Coffee Company website screenshot"
                  />
                </a>
              </Col>
              <Col>
                <h2>
                  <i>The Boss Coffee Company</i>
                </h2>
                <strong>E-COMMERCE SHOPIFY STORE</strong>
                <br />
                <br />
                <p>
                  Built and launched an <strong> active Shopify</strong> site
                  for <strong> desktop and mobile,</strong> with seamless
                  product listings,
                  <strong>
                    {" "}
                    payment gateways, and customer support tools.
                  </strong>{" "}
                  Integrated <strong> Shopify apps</strong> for customer
                  communication, order fulfillment, identify customer trends,
                  and optimize product listings to enhance the user experience.
                  Utilized prior coding experience to create a{" "}
                  <strong> sleek and modern design. </strong> <br /> Want some
                  boss coffee?
                </p>
                <br />
              </Col>
            </Row>
            <Row>
              <Col>
                <a
                  // href="https://github.com/knayad/blog"
                  href="https://blog-afcj.onrender.com/"
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
                <strong>MERN STACK BLOG SITE USING TAILWIND CSS</strong>
                <br />
                <br />
                <p>
                  {" "}
                  <strong> Client-side </strong> blog site using{" "}
                  <strong> Tailwind CSS </strong> and the{" "}
                  <strong> MERN stack.</strong>{" "}
                  <strong>MongoDB, Express.js, React.js, and Node.js</strong>.
                  Created a{" "}
                  <strong>
                    {" "}
                    responsive website for desktop, tablets, and mobile
                  </strong>
                  using <strong>custom React components.</strong>{" "}
                </p>
                {/* Get a sneak peek{" "}
              <a
                href="https://blog-afcj.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                here.
              </a> */}
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
                <strong>RESTRICTED BACKEND FOR REVIEWS</strong>
                <br />
                <br />
                <p>
                  Connected <strong> MongoDB</strong> to the frontend of the
                  project using
                  <strong>Mongoose.</strong> All <strong>CRUD routes</strong>{" "}
                  were created, <strong>limited authorization</strong>
                  was created to restrict use for only retrieval and posting
                  peer reviews. <strong>
                    React context and React reducer
                  </strong>{" "}
                  were used to update state for new posts. <br />
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
                  Created a <strong>static portfolio on GitHub Pages,</strong>{" "}
                  using the <strong>MERN</strong>
                  stack. Utilized <strong>JavaScript (ES6)</strong> for{" "}
                  <strong>custom functions.</strong>
                  Incorporated{" "}
                  <strong>
                    Google Fonts, Fonts Awesome, React Icons, Spline, React PDF
                    Viewer, and React Bootstrap.
                  </strong>
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
                <strong>INPUT BASED RANDOM GENERATOR</strong>
                <br />
                <br />
                <p>
                  This <strong>python</strong> project aims to
                  <strong>generate more complex passwords.</strong> You can{" "}
                  <strong>customize the inputs</strong> for a{" "}
                  <strong>randomly generated</strong> output. Passwords are the
                  linchpin for many programs to keep your information safe.
                  Generally, the more complex a password, the safer your
                  information. However, many people re-use passwords and only
                  make minor modifications to them. This can compromise the
                  security of the applications we use by putting the
                  authentication process at risk.
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
                <strong>REALTIME BUS DATA</strong>
                <br />
                <br />
                <p>
                  Utilizes the{" "}
                  <strong>
                    Mapbox library and API, JavaScript, CSS, and HTML
                  </strong>
                  to{" "}
                  <strong>
                    render a map on a web page to show real-time data.
                  </strong>{" "}
                  This project is, as such,{" "}
                  <strong>an animation. MBTA bus data:</strong> stops between
                  Harvard and MIT with an animated{" "}
                  <strong>marker on the map</strong> to highlight the bus
                  routes.
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
        <Accordion.Item eventKey="3">
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

        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h1 className="homeH1">
              <TypeWriter text="SPLINE" delay={150} />
            </h1>
          </Accordion.Header>
          <Accordion.Body>{/* <MySpline /> */}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <MySpline />
    </Container>
  );
}

export default HomePageAccordion;
