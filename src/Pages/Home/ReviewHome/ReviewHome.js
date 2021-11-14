import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import "./ReviewHome.css";

const ReviewHome = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container className="my-5">
      <h1 className="my-5">Reviews</h1>
      <Row xs={1} md={3} className="g-4">
        {reviews.map(review => (
          <Col>
            <div class="container-review">
              <div class="card__container">
                <div class="card-review">
                  <div class="card__content">
                    <h3 class="card__header">{review?.productName}</h3>
                    <p class="card__info">
                    {review?.comment}
                    </p>
                    <Rating initialRating={review.rating} readonly 
                  emptySymbol={<i class="far fa-star"></i>}
                  fullSymbol={<i class="fas fa-star icon-color"></i>}/>
                    <h3 class="card__header">____{review?.user_name
}</h3>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ReviewHome;
