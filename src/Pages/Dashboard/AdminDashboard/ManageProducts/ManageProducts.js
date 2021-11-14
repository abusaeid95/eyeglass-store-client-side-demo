import React, { useEffect, useState } from "react";
import "./ManageProducts.css";
import { Table } from "react-bootstrap";
import axios from "axios";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [statusDependancy, setStatusDependancy] = useState(false);
  useEffect(() => {
    fetch("https://glacial-chamber-66798.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [statusDependancy]);

  const handlerStausDelete = (id) => {
    axios
      .delete(`https://glacial-chamber-66798.herokuapp.com/products/${id}`)
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
  return (
    <div>
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        {products.map((product) => (
          <tbody>
            <tr>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product?.rating}</td>
              <button
                onClick={() => handlerStausDelete(product?._id)}
                className="tablebtn"
              >
                Delete
              </button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageProducts;
