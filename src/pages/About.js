import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { useEffect, useState } from "react";
// import Typewriter from "../components/TypeWriter";

import skull from "../assets/pages/skull.png";
import { AboutMeList } from "../text/aboutMeList";

// import { Link } from "react-scroll";

const About = () => {
  const [joke, setJoke] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 5500));
    }

    if (joke) {
      simulateNetworkRequest().then(() => {
        setJoke(false);
      });
    }
  }, [joke]);

  const handleClick = () => setJoke(true);

  return (
    <Container id="particle">
      <br />
      <h1 id="typeEffect">
        {/* <Typewriter text="About Me" delay={200} /> */}
      </h1>
      <br />
      <Container>
        <Row>
          <Col sm={{ span: 1, offset: 0 }}>
            {/* 1 - empty left 30 <br /> */}
          </Col>

          <Col md={{ span: 8, offset: 1 }}>
            {/* 2 <br /> about me stuff */}
            <p id="aboutMeBlurb">
              I love travel, jokes, food, learning, and enjoying the company of
              myself and others.
            </p>
            {/* <span> */}
            {/* <Link
                to="reviews"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <Button href="reviews">REVIEWS</Button>{" "}
              </Link> */}
            {/* <Button href="reviews">REVIEWS</Button>{" "}
              <Button href="hire">HIRE</Button>
            </span> */}
            <br />
            <br />
          </Col>
        </Row>

        <Col>
          <Row>
            <Col lg={{ offset: 1 }} className="about">
              <p> Get to know some of my interests!</p>
              <ul>
                <li>
                  <b>Coffee:</b>{" "}
                  <p>
                    I better know how to make a decent cup of coffee. I worked
                    in the industry for almost a decade.{" "}
                  </p>
                </li>
                <li>
                  <b>Languages:</b>I want to be a polygot, but I lack the
                  confidence to speak! My approximate CEFR/ or general levels
                  are as follows:
                  <ul>
                    <li>
                      French: ~A2 (everyday topics) to ~B1 (complex ideas).
                    </li>
                    <li>
                      Spanish: ~A1 (basic interactions) to ~A2 (everday topics).
                    </li>
                    <li>Japanese: ~A1 (basic interactions).</li>
                    <li>
                      Arabic: Reading, writing, essential phrases, and grammar
                      concepts.
                    </li>
                    <li>Portuguese: Essential phrases, simple grammar.</li>
                  </ul>
                </li>
                <li>
                  <b>Coding: </b>
                  <p>Q: What do cats and programmers have in common?</p>
                  <p>
                    A:{" "}
                    <Button
                      variant="primary"
                      disabled={joke}
                      onClick={!joke ? handleClick : null}
                    >
                      {joke
                        ? "When either one is unusually happy and excited, it is because they found a bug."
                        : "Click to see the answer"}
                    </Button>
                  </p>
                </li>
              </ul>
              {/* post joke half */}
              {AboutMeList}
            </Col>
            <Col>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <img alt="Skull with roses" src={skull} />
            </Col>
          </Row>
        </Col>

        <Col sm={{ span: 1, offset: 1 }}>{/* 3 - friend30 <br /> */}</Col>
      </Container>
      <Row>
        <Col md={{ span: 9, offset: 1 }}>{/* <Reviews id="reviews" /> */}</Col>
      </Row>
    </Container>
  );
};

export default About;
