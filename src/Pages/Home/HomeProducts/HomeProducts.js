import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./HomeProducts.css";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://glacial-chamber-66798.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Container className="my-3">
        <h1>
          <span>Trending Eyeglasses</span>
        </h1>

        <Row xs={1} md={3} className="g-4 mt-2">
          {products.slice(0, 6).map((product) => (
            <Col>
              <Card className="">
                <Card.Img
                  variant="top"
                  style={{ height: "300px" }}
                  src={product.img}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product?.description.slice(0, 120)}</Card.Text>
                  <Card.Body>
                    <Card.Text>$ {product?.price}</Card.Text>
                    <Card.Text>
                      <Rating
                        initialRating={product.rating}
                        readonly
                        emptySymbol={<i class="far fa-star"></i>}
                        fullSymbol={<i class="fas fa-star icon-color"></i>}
                      />
                    </Card.Text>
                  </Card.Body>
                  <Link to={`placeorder/${product?._id}`}>
                    <Button className="bstbutn">Buy Now</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Link to="/eyeglasses">
          <Button style={{ width: "180px" }} className="bstbutn">
            View More
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default HomeProducts;
