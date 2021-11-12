import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";

const HomeProducts = () => {

    const card={
        height:"350px"
    }
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Container>
          <Row xs={1} md={3}  className="rounded-lg">
        {products.map((product) => (
          <Card  className="img-fluid card mt-3">
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeProducts;
