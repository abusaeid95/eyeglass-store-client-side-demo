import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./BestSeller.css";
import Rating from 'react-rating'
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const products = [
    {
      img: "https://i.ibb.co/X2wGQFJ/195418-eyeglasses-angle-view.webp",
      name: "Shiratori Vintage Retro Half Frame Horn Rimmed Optics",
      rating: 5,
    },
    {
      img: "https://i.ibb.co/4NdCPXB/btwo.jpg",
      name: "V.W.E. Rectangular Frame Clear Lens Designer Half Rim Eyeglasses",
      rating: 5,
    },
    {
      img: "https://i.ibb.co/QPynjdf/bthree.jpg",
      name: "LUOMON Customize Prescription Glasses Men Plain Eyeglasses",
      rating: 5,
    },
  ];
  return (
    <Container className="my-3">
        <h1><span>Best Selling</span></h1>
        
      <Row xs={1} md={3} className="g-4 mt-2">
        {products.map((product, idx) => (
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" style={{height:'210px'}} src={product.img} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <Rating initialRating={product.rating} readonly 
                  emptySymbol={<i class="far fa-star"></i>}
                  fullSymbol={<i class="fas fa-star"></i>}/>
                </Card.Text>
                <Link to="/eyeglasses"><Button className="bstbutn">Buy Now</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BestSeller;
