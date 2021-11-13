import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './HomeProducts.css'

const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Container className="my-3">
        <h1><span>Best Selling</span></h1>
        
      <Row xs={1} md={3} className="g-4 mt-2">
        {products.slice(0,6).map(product => (
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" style={{height:'160px'}} src={product.img} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                {/* <Card.Text>
                  <Rating initialRating={product.rating} readonly 
                  emptySymbol={<i class="far fa-star"></i>}
                  fullSymbol={<i class="fas fa-star"></i>}/>
                </Card.Text> */}
                <Link to={`placeorder/${product?._id}`}><Button className="bstbutn">Buy Now</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Link to="/eyeglasses"><Button style={{width:"180px"}} className="bstbutn">View More</Button></Link>
    </Container>

      {/* <Container>
        <h1 className="my-3">Trending Now</h1>
          <Row xs={1} md={3}  className="rounded-lg">
        {products.slice(0, 6).map((product) => (
          <Card  className="img-fluid card mt-3">
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Link to={`placeorder/${product?._id}`}><Button className="bg-info  px-3 py-2 text-white rounded">Order Now</Button></Link>
            </Card.Body>
          </Card>
        ))}
        </Row>
        <Link to="eyeglasses/"><Button className="bg-primary px-5 py-2 my-3 text-white rounded">View More</Button></Link>
      </Container> */}
    </div>
  );
};

export default HomeProducts;
