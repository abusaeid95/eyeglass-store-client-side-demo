import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "./MenuBar.css";
import useAuth from "../../../Hooks/useAuth";

const MenuBar = () => {
  const { user, logout } = useAuth();
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
              <Nav.Link as={HashLink} to="#">
                EYEGLASSES
              </Nav.Link>
              <Nav.Link as={HashLink} to="#">
                SUNGLASSES
              </Nav.Link>
              <Nav.Link as={HashLink} to="#">
                BLUE LIGHT GLASSES
              </Nav.Link>
              <Nav.Link as={HashLink} to="#">
                OVERSIZED STYLES
              </Nav.Link>
              <Nav.Link as={HashLink} to="#">
                ABOUT
              </Nav.Link>
            </Nav>
            <Nav>
              {user?.email ?<Nav>
                <NavDropdown
                  className="d-flex text-center align-items-center justify-content-center"
                  title="Profile"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={HashLink} to="#action/3.1">
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item as={HashLink} to="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item as={HashLink} to="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={HashLink} to="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
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
