import { Button } from "react-bootstrap";
import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

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
          <h5>First slide label</h5>
          <Button variant="danger">Browse More</Button>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.thechildrenseyeglassstore.com/wp-content/uploads/2018/03/home-page-main-img-3.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <Button variant="danger">Browse More</Button>{" "}
          <Button variant="info">Info</Button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.thechildrenseyeglassstore.com/wp-content/uploads/2018/03/home-page-main-img-3.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <Button variant="danger">Browse More</Button>{" "}
          <Button variant="info">Info</Button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.thechildrenseyeglassstore.com/wp-content/uploads/2018/03/home-page-main-img-3.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>last slide label</h5>
          <Button variant="danger">Browse More</Button>
          <Button variant="info">Info</Button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
