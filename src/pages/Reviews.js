import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// assets
import Star from "../assets/pages/bright-yellowstar-svgrepo-com.svg";
// components
import ReviewDetailsTest from "../components/ReviewsDetails";
import ReviewForm from "../components/ReviewForm";
import TypeWriter from "../components/TypeWriter";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch("/api/reviews/");
      const json = await response.json();

      if (response.ok) {
        setReviews(json);
      }
      if (!response.ok) {
        console.error();
      }
    };

    fetchReviews();
  }, []);

  return (
    <Container>
      <h1 id="typeEffect">
        <TypeWriter text="Reviews" delay={100} />
      </h1>
      <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
      <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
      <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
      <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
      <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
      <br />
      <br />
      <Container className="review-list-test">
        {reviews &&
          reviews.map((review) => (
            <Container className="view-review" key={review._id}>
              {/* review={review} allows access to the props in the component */}
              <ReviewDetailsTest review={review} />
            </Container>
          ))}
      </Container>
      <ReviewForm />
    </Container>
  );
};

export default Reviews;
