import Button from '@restart/ui/esm/Button';
import './EyeGlasses.css'
import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const EyeGlasses = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])
    return (
      <>
        <div>
            <Container>
                <h1>Eye Glasses</h1>
                <div className="eyeline"></div>
          <Row xs={1} md={3}  className="rounded-lg">
        {products.map((product) => (
          <Card  className="img-fluid card mt-3">
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Link to={`/placeorder/${product._id}`}><Button className="bg-info  px-3 py-2 text-white rounded">Order Now</Button></Link>
            </Card.Body>
          </Card>
        ))}
        </Row>
        <Link to="/eyeglasses"><Button className="bg-primary px-5 py-2 my-3 text-white rounded">View More</Button></Link>
      </Container>
        </div>
        </>
    );
};

export default EyeGlasses;