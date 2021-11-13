import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
const ManageAllOrders = () => {
  const [allorders, setAllorders] = useState([]);
  const [status, setStatus] = useState("");
  const [statusDependancy,setStatusDependancy]=useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/allorders")
      .then((res) => res.json())
      .then((data) => setAllorders(data));
  }, [statusDependancy]);

  const handlerToOnStautus = (e) => {
    setStatus(e.target.value);
  };

  const handlerStausUpdate = (id) => {
  const statusUpdate={upadteStatus : status}
    axios.put(`http://localhost:5000/allorders/${id}`,statusUpdate)
      .then(function (response) {
        // handle success
        if(response.data.modifiedCount>0){
          setStatusDependancy(true);
          setStatusDependancy(false);
        };
      })
      .catch(function (error) {
        // handle error
        
      });
  };
  const handlerStausDelete = (id) => {
    axios.delete(`http://localhost:5000/allorders/${id}`)
      .then(function (response) {
        // handle success
        if(response.data.deletedCount>0){
          setStatusDependancy(true);
          setStatusDependancy(false);
        };
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
            <th>User Name</th>
            <th>User Email</th>
            <th>Status</th>
            <th>Status Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        {allorders.map((product) => (
          <tbody>
            <tr>
              <td>{product?.name}</td>
              <td>{product?.user_name}</td>
              <td>{product?.user_email}</td>
              <td>{product?.status}</td>
              <td>
                <Form.Select onChange={handlerToOnStautus}>
                  <option value="Pending">Open this select menu</option>
                  <option value="Approved">Approved</option>
                  <option value="Processing">Processing</option>
                  <option value="Canceled">Canceled</option>
                </Form.Select>
                <button onClick={()=>handlerStausUpdate(product?._id)} className="tablebtn">
                  Update
                </button>
              </td>
              <button onClick={()=>handlerStausDelete(product?._id)} className="tablebtn">Delete</button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageAllOrders;
