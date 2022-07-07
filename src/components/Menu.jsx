import { Container, Nav, Navbar } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { Routes, Route, Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
const Menu = () => {
  return (
    <>
      <Navbar bg="info" variant="dark">
        <Container>
          <Navbar.Brand className="text-dark" as={Link} to="/">
            SHOPPING ONLINE
          </Navbar.Brand>
          <Nav className="offset">
            <Nav.Link className="text-dark" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-dark" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="text-dark" as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="link">
                    <Icon.Cart className="text-dark" size={30} />
                </Dropdown.Toggle>

                <Dropdown.Menu variant="link">
                  <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Orange
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
            <Nav.Link>
            <Dropdown>
                <Dropdown.Toggle variant="link">
                    <Icon.PersonCircle className="text-dark" size={30} />
                </Dropdown.Toggle>

                <Dropdown.Menu variant="link">
                  <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Register</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
