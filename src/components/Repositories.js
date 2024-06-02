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

      {projects &&
        projects.map((project) => (
          <Row className="project-row" key={project.id}>
            <Col>{project.name}</Col>
            <Col>{project.language}</Col>
            <Col>{project.description}</Col>
            <Col>
              <a href={project.html_url} target="_blank" rel="noreferrer">
                {project.name}
              </a>
            </Col>
            <br />
            <br />
          </Row>
        ))}
      <br />
    </Container>
  );
}
