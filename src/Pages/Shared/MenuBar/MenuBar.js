import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "./MenuBar.css";
import useAuth from "../../../Hooks/useAuth";

const MenuBar = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={HashLink} to="/">
            SDC EYEGLASS STORE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to="/">
                HOME
              </Nav.Link>
              {/* <Nav.Link as={HashLink} to="/eyeglasses">
                EYEGLASSES
              </Nav.Link> */}
              <Nav.Link as={HashLink} to="/eyeglasses">
              EYE GLASSES
              </Nav.Link>
              <Nav.Link as={HashLink} to="/contact">
                CONTACT
              </Nav.Link>
            </Nav>
            <Nav>
              {user?.email ?<Nav>
                <Nav.Link as={HashLink} to="/dashboard">
                  {user?.displayName}
                </Nav.Link>
                <Nav.Link as={HashLink} to="/dashboard">
                  DASHBOARD
                </Nav.Link>
                <Nav.Link as={HashLink} to="#" onClick={logout}>
                  LOGOUT
                </Nav.Link>
              </Nav>:
              <Nav.Link as={HashLink} to="/login">
                LOGIN
              </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
