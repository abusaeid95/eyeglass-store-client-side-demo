import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import useAuth from "../../../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  const [statusDependancy, setStatusDependancy] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/myorders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email, statusDependancy]);

  const handlerStausDelete = (id) => {
    axios
      .delete(`http://localhost:5000/allorders/${id}`)
      .then(function (response) {
        // handle success
        if (response.data.deletedCount > 0) {
          setStatusDependancy(true);
          setStatusDependancy(false);
        }
      })
      .catch(function (error) {
        // handle error
      });
  };
  console.log(myOrders);
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {myOrders.map((order) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={order?.productImg} />
              <Card.Body>
                <Card.Title>{order?.productName}</Card.Title>
                <Card.Text>{order?.productPrice}</Card.Text>
                <Card.Text>{order?.satus}</Card.Text>
                <button
                  onClick={() => handlerStausDelete(order?._id)}
                  className="tablebtn"
                >
                  Delete
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MyOrders;
