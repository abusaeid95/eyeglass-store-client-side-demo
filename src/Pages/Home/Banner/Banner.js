import { Button } from "react-bootstrap";
import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.thechildrenseyeglassstore.com/wp-content/uploads/2018/03/home-page-main-img-3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Link to="/eyeglasses"><Button variant="dark">Browse More</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:"41rem"}}
          src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <Link to="/eyeglasses"><Button variant="dark">Browse More</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"  style={{height:"41rem"}}
          src="https://images.unsplash.com/photo-1625591341337-13dc6e871cee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1090&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <Link to="/eyeglasses"><Button variant="dark">Browse More</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"   style={{height:"41rem"}}
          src="https://images.unsplash.com/photo-1616560787695-b94e54457037?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>last slide label</h5>
          <Link to="/eyeglasses"><Button variant="dark">Browse More</Button></Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
