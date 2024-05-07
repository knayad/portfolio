import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// destructure from the props from the access gotten by "reviews={reviews}" (on the Reviews Page) and passed props through.
const ReviewDetailsTest = ({ review }) => {
  return (
    <Container className="review-details-test">
      <Row>
        <h2>{review.title}</h2>
      </Row>
      <Row>
        <p>{review.body}</p>
      </Row>
    </Container>
  );
};

export default ReviewDetailsTest;
