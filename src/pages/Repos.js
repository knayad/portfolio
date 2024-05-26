import Container from "react-bootstrap/Container";
import Repositories from "../components/Repositories";

import TypeWriter from "../components/TypeWriter";

const Repos = () => {
  return (
    <Container>
      <h1 id="typeEffect">
        <TypeWriter text="Repositories" delay={150} />
      </h1>
      <br />
      <Repositories />
    </Container>
  );
};

export default Repos;
