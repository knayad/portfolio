import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CalzRat from "../assets/projects/CalzoneRat.png";
import obst from "../assets/projects/obscourse.png";
import TBCC from "../assets/projects/TBCC.png";
import NounHero from "../assets/projects/NounHero.png";
import NadiaPortfolio from "../assets/projects/NadiaPortfolio.png";
import ReviewsAPI from "../assets/projects/ReviewsAPI.png";
import pythonPasswords from "../assets/projects/pythonPasswords.png";

import busGiphy from "../assets/projects/MIT-bus-stops-giphy.gif";

const accordionProject = (
  <Accordion.Body>
    <br />
    <h2>Some thumbnails may have an associated project.</h2>
    <br />
    <br />
    <Row>
      <Col>
        <h2>
          <i>Calzone Rat</i>
        </h2>
        {/* <a href="youtube link?" target="_blank" rel="noreferrer"> */}
        <img src={CalzRat} className="projectImgs" alt="Calzone Rat" />
        {/* </a> */}
      </Col>
      <Col>
        <br />
        <br />
        <strong>UNREAL ENGINE 5 & C++ COMPONENTS</strong>
        <br />
        <br />
        <p>
          Used <strong>pointers and references in C++</strong> to manage memory
          and pass data efficiently. Utilized{" "}
          <strong>Actor and Scene Components</strong>
          to build modular build. Implemented{" "}
          <strong>dynamic lighting using Lumen</strong>
          and designed <strong>
            modular levels with reusable assets.
          </strong>{" "}
          Explored
          <strong>different loop types.</strong> Experimented with textures to
          enhance visual design, called
          <strong>C++ functions from Blueprints</strong> for flexible scripting,
          and created <strong>player animations</strong> to bring characters to
          life.
        </p>
        <br />
      </Col>
    </Row>
    <Row>
      <Col>
        <h2>
          <i>Obstacle Course</i>
        </h2>
        {/* <a href="n/a" target="_blank" rel="noreferrer"> */}
        <img src={obst} className="projectImgs" alt="Obst Course" />
        {/* </a> */}
      </Col>
      <Col>
        <br />
        <br />
        <strong>UNREAL ENGINE 5 & C++</strong>
        <br />
        <br />
        <p>
          <strong>C++ fundamentals,</strong> including{" "}
          <strong>
            syntax structure, local variables, and class creation.
          </strong>{" "}
          Organized header and source files; separation of{" "}
          <strong>member variables and functions.</strong> Created child classes
          using inheritance and integrated{" "}
          <strong>Unreal Engine features</strong> such as{" "}
          <strong>
            UE_LOG, UPROPERTY, and types like FString, FVector, and FRotator.
          </strong>{" "}
          Used <strong>GameMode and Character classes</strong> and{" "}
          <strong>modular game</strong> development in Unreal Engine. Created{" "}
          <strong>double-sided textures.</strong>
        </p>
        <br />
      </Col>
    </Row>
    <Row>
      <Col>
        <h2>
          <i>The Boss Coffee Company</i>
        </h2>
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
        <br />
        <br />
        <strong>E-COMMERCE SHOPIFY STORE</strong>
        <br />
        <br />
        <p>
          Built and launched an <strong> active Shopify</strong> site for{" "}
          <strong> desktop and mobile,</strong> with seamless product listings,
          <strong> payment gateways, and customer support tools.</strong>{" "}
          Integrated <strong> Shopify apps</strong> for customer communication,
          order fulfillment, identify customer trends, and optimize product
          listings to enhance the user experience. Utilized prior coding
          experience to create a <strong> sleek and modern design. </strong>{" "}
          <br /> Want some boss coffee?
        </p>
        <br />
      </Col>
    </Row>
    <Row>
      <Col>
        <h2>
          <i>Noun</i>
        </h2>
        <a
          // href="https://github.com/knayad/blog"
          href="https://blog-afcj.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={NounHero} className="projectImgs" alt="Noun Blog site" />
        </a>
      </Col>
      <Col>
        <br />
        <br />
        <strong>MERN STACK BLOG SITE USING TAILWIND CSS</strong>
        <br />
        <br />
        <p>
          {" "}
          <strong> Client-side </strong> blog site using{" "}
          <strong> Tailwind CSS </strong> and the <strong> MERN stack.</strong>{" "}
          <strong>MongoDB, Express.js, React.js, and Node.js</strong>. Created a{" "}
          <strong> responsive website for desktop, tablets, and mobile</strong>
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
        <h2>
          <i>Portfolio API</i>
        </h2>
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
        <br />
        <br />
        <strong>RESTRICTED BACKEND FOR REVIEWS</strong>
        <br />
        <br />
        <p>
          Connected <strong> MongoDB</strong> to the frontend of the project
          using <strong>Mongoose.</strong> All <strong>CRUD routes</strong> were
          created, <strong>limited authorization</strong> was created to
          restrict use for only retrieval and posting peer reviews.{" "}
          <strong>React context and React reducer</strong> were used to update
          state for new posts. <br />
          <br />
          Check out the Reviews section of this page for more!
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h2>
          <i>Portfolio</i>
        </h2>
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
        <br />
        <br />
        <strong>MERN STACK STATIC SITE ON GITHUB PAGES</strong>
        <br />
        <br />
        <p>
          Created a <strong>static portfolio on GitHub Pages,</strong> using the{" "}
          <strong>MERN</strong> stack. Utilized{" "}
          <strong>JavaScript (ES6)</strong> for{" "}
          <strong>custom functions.</strong> Incorporated{" "}
          <strong>
            Google Fonts, Fonts Awesome, React Icons, Spline, React PDF Viewer,
            and React Bootstrap.
          </strong>
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h2>
          <i>Python Password Generator</i>
        </h2>
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
        <br />
        <br />
        <strong>INPUT BASED RANDOM GENERATOR</strong>
        <br />
        <br />
        <p>
          This <strong>python</strong> project aims to{" "}
          <strong>generate more complex passwords.</strong> You can{" "}
          <strong>customize the inputs</strong> for a{" "}
          <strong>randomly generated</strong> output. Passwords are the linchpin
          for many programs to keep your information safe. Generally, the more
          complex a password, the safer your information. However, many people
          re-use passwords and only make minor modifications to them. This can
          compromise the security of the applications we use by putting the
          authentication process at risk.
        </p>
      </Col>
    </Row>
    <Row>
      <Col className="projectGIFS">
        <h2>
          <i>Mapbox API Bus Route</i>
        </h2>
        <a
          href="https://github.com/knayad/basicAnimationToMaps"
          target="_blank"
          rel="noreferrer"
        >
          <img src={busGiphy} alt="bus route map" className="projectImgs" />
        </a>
      </Col>
      <Col>
        <br />
        <br />
        <strong>REALTIME BUS DATA</strong>
        <br />
        <br />
        <p>
          Utilizes the{" "}
          <strong>Mapbox library and API, JavaScript, CSS, and HTML</strong> to{" "}
          <strong>render a map on a web page to show real-time data.</strong>{" "}
          This project is, as such,{" "}
          <strong>an animation. MBTA bus data:</strong> stops between Harvard
          and MIT with an animated <strong>marker on the map</strong> to
          highlight the bus routes.
        </p>
      </Col>
    </Row>
    {/* <Button variant="success" size="sm" href="repos">
MORE PROJECTS...
</Button> */}
  </Accordion.Body>
);

export { accordionProject };
