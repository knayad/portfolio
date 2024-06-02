import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import useFetch from "../hooks/useFetch";

export default function Repositories() {
  const { data: projects } = useFetch(
    "https://api.github.com/users/knayad/repos?sort=created&direction=desc&page=1&per_page=6"
  );

  return (
    <Container fluid className="projects">
      <Row>
        <h2>GitHub's API pulls some recent repositories: </h2>{" "}
      </Row>
      <br />
      <Row>
        <Col>
          <h3>
            <b>Project Name</b>
          </h3>
        </Col>
        <Col>
          <h3>
            <b>Main Language</b>
          </h3>
        </Col>
        <Col>
          <h3>
            <b>Description</b>
          </h3>
        </Col>
        <Col>
          <h3>
            <b>Link</b>
          </h3>
        </Col>
      </Row>
      <br />

      {projects.map((i) => {
        return (
          <Row className="project-row" key={i.name}>
            <Col>{i.name}</Col>
            <Col>{i.language}</Col>
            <Col>{i.description}</Col>
            <Col>
              <a href={i.html_url} target="_blank" rel="noreferrer">
                {i.name}
              </a>
            </Col>
            <br />
            <br />
          </Row>
        );
      })}
      <br />
    </Container>
  );
}
