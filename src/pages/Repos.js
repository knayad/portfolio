import Container from "react-bootstrap/Container";
import RepoDetails from "../components/Repositories";

import useFetch from "../hooks/useFetch";

const Repos = () => {
  const { data: projects } = useFetch(
    "https://api.github.com/users/knayad/repos?sort=created&direction=desc&page=1&per_page=6"
  );
  return (
    <Container>
      {projects &&
        projects.map((project) => (
          <Container key={project.id}>
            {/* project={project} allows access to the props in the component */}
            <RepoDetails repo={project} />
          </Container>
        ))}
    </Container>
  );
};

export default Repos;
