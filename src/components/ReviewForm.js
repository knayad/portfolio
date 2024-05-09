import { useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

const ReviewForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState();
  const [body, setBody] = useState();
  const [error, setError] = useState(null);

  const handleReload = () => {
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const review = { title, author, body };

    const response = await fetch(
      "https://portfolio-api-op4o.onrender.com/api/reviews/",
      {
        method: "POST",
        body: JSON.stringify(review),
        headers: { "Content-Type": "application/json" },
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      console.log(error);
    }
    if (response.ok) {
      setError(null);
      console.log("Review was added!", json);

      setTitle("");
      setAuthor("");
      setBody("");
    }
  };

  return (
    <Container className="create-review">
      <br />
      <br />
      <Row>
        <br />
        <h2> Create a review! </h2>
        <br />
        <Form onSubmit={handleSubmit}>
          <Form.Label>
            <h3>Title:</h3>
          </Form.Label>
          <Form.Control
            required
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Required."
          />
          <Form.Control.Feedback type="invalid">
            Required.
          </Form.Control.Feedback>
          <Form.Label>
            <h3>Author:</h3>
          </Form.Label>
          <Form.Control
            required
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Required. Your name will not be displayed, but please let me know who you are!"
          />
          <Form.Control.Feedback type="invalid">
            Required.
          </Form.Control.Feedback>
          <Form.Group className="mb-3" controlId="body">
            <Form.Label>
              <h3>Review:</h3>
            </Form.Label>
            <Form.Control
              required
              type="text"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              as="textarea"
              rows={5}
              placeholder="What do you have to say?"
            />
            <Form.Control.Feedback type="invalid">
              Required.
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            onClick={handleReload}
            variant="outline-primary"
            type="submit"
          >
            Submit
          </Button>

          {/* <Button disabled variant="outline-secondary" type="submit">
              Adding review...
            </Button> */}

          <br />
          <br />
        </Form>
        <small>
          <b>*Inappropriate comments will be removed.</b>
        </small>
        <br />
        <br />
      </Row>
      {error && <div className="error"> {error}</div>}
    </Container>
  );
};

export default ReviewForm;
