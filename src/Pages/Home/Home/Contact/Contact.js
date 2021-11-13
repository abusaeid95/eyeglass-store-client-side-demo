import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Container>
        <Row xs={12}>
          <Col xs={12} md={4}>
            <h1>View Optical Eyeglasses Store</h1>
            <h1 className="text-muted">
              4079 Mowry Ave Fremont 94538 United States (US) Phone:
              (510)793-8997 Fax: (510)793-8902 Email: view@vieweyes.com
            </h1>
            <h3 className="text-muted">View@ViewEyes.com</h3>
            <div className="table">
              <tr>
                <td>Monday</td>
                <td>10:00 AM - 7:30 PM</td>
              </tr>

              <tr>
                <td>Tuesday</td>
                <td>10:00 AM - 7:30 PM</td>
              </tr>

              <tr>
                <td>Wednesday</td>
                <td>10:00 AM - 7:30 PM</td>
              </tr>

              <tr>
                <td>Thursday</td>
                <td>10:00 AM - 7:30 PM</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>10:00 AM - 7:30 PM</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>10:00 AM - 7:30 PM</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>11:00 AM - 4:00 PM</td>
              </tr>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <h1>We are based in the of California</h1>
            <h2>Get in touch</h2>
            <div className="my-5">
                <input type="text" className="w-30 p-2" placeholder="Your Name" required />
                <input type="text" className="w-30 p-2 my-2 mx-2" placeholder="Your Email" required />
                <input type="text" className="w-30 p-2" placeholder="Subject" required />
                <br />
                <textarea className="w-100 p-50 h-50" name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Submit" className="bg-info text-white" />
            </div>
            <div><h2 className="text-warning">We really appreciate your feedback
</h2></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
