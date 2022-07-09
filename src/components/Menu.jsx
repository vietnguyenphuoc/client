import { Container, Nav, Navbar } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
const Menu = () => {
  return (
    <>
      <Navbar bg="info" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <h2>
              <b>Shopping Cart</b>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 offset-4"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={NavLink} to="/" className={({ isActive }) => isActive? "active": ''}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/shop" className={({ isActive }) => isActive? "active": ''}>
                Shop
              </Nav.Link>
              <Nav.Link as={NavLink} to="/admin" className={({ isActive }) => isActive? "active": ''}>
                Administration
              </Nav.Link>
            </Nav>
            <Nav className="d-flex">
              <Dropdown>
                {/* <Dropdown.Toggle variant="link">
              <Icon.Search className="text-light"size={30} />
            </Dropdown.Toggle> */}
                <Dropdown.Menu variant="link">
                  <input type="text" />
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link as={NavLink} to="/cart">
                <Icon.Cart className="text-light" size={30} />
                <span className="badge bg-light text-dark ms-1 rounded-pill">
                  5
                </span>
              </Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="link">
                  <Icon.PersonCircle className="text-light" size={30} />
                </Dropdown.Toggle>

                <Dropdown.Menu variant="link">
                  <Dropdown.Item as={NavLink} to="/login">
                    Login
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Register</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
