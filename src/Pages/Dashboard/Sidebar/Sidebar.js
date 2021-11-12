import React from "react";
import { Nav } from "react-bootstrap";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="my-5">
      <Nav variant="tabs" defaultActiveKey="#" className="flex-column">
        <Nav.Item>
          <Nav.Link to="allorders">All Orders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="#">Manager Orders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/addproduct">Add Product</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="#">Update Product</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
