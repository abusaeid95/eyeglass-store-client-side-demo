import axios from "axios";
import "./MyOrders.css";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import useAuth from "../../../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  const [statusDependancy, setStatusDependancy] = useState(false);
  useEffect(() => {
    fetch(
      `https://glacial-chamber-66798.herokuapp.com/myorders?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email, statusDependancy]);

  const handlerStausDelete = (id) => {
    const proceed = window.confirm("Are you want to cancel?");
    if (proceed) {
      axios
        .delete(`https://glacial-chamber-66798.herokuapp.com/allorders/${id}`)
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
    }
  };
  return (
    <>
      <Card>
        {myOrders.map((myorder) => (
          <Card.Body>
            <div className="row ofrimg">
              <div className="col">
                <h3>{myorder.productName}</h3>
              </div>
              <div className="col">
                <h3>{myorder.status}</h3>
              </div>
              <div className="col">
                <h3>$ {myorder.productPrice}</h3>
              </div>
              <div className="col">
                <h3>
                  <img src={myorder.productImg} alt="" />
                </h3>
              </div>
              <div className="col mt-auto mb-auto ">
                <button
                  onClick={() => handlerStausDelete(myorder._id)}
                  className="bg-danger p-2 px-4 me-2 rounded text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Card.Body>
        ))}
      </Card>
    </>
    // <>
    //   <Row xs={1} md={2} className="g-4">
    //     {myOrders.map((order) => (
    //       <Col>
    //         <Card>
    //           <Card.Img variant="top" src={order?.productImg} />
    //           <Card.Body>
    //             <Card.Title>{order?.productName}</Card.Title>
    //             <Card.Text>{order?.productPrice}</Card.Text>
    //             <Card.Text>{order?.satus}</Card.Text>
    //             <button
    //               onClick={() => handlerStausDelete(order?._id)}
    //               className="tablebtn"
    //             >
    //               Delete
    //             </button>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //     ))}
    //   </Row>
    // </>
  );
};

export default MyOrders;
