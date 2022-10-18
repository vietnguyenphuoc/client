import {
  Badge,
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink, useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/authSlice";
const Menu = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const dispatch = useDispatch();
  const navigatee = useNavigate();
  return (
    <>
      <Navbar bg="info" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="me-5">
            <h2>
              <b>Shopping Cart</b>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                as={NavLink}
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <b>Home</b>
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/shop"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <b>Shop</b>
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/admin"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <b>Administration</b>
              </Nav.Link>
            </Nav>
            <Nav className="d-flex">
              <Form className="me-4">
                <InputGroup size="sm" className="mt-1 me-5">
                  <Form.Control
                    style={{ minWidth: "300px" }}
                    placeholder="Tìm kiếm sản phẩm.."
                  />
                  <Button variant="outline-secondary">
                    <Icon.Search size={25} />
                  </Button>
                </InputGroup>
              </Form>
              <Nav.Link as={NavLink} to="/cart">
                <Icon.Cart className="text-light" size={30} />
                <Badge bg="light" className="text-dark" pill>
                  14
                </Badge>
              </Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="link">
                  {user && <div className="badge fs-6">{user.fullName}</div>}
                  <Icon.PersonCircle className="text-light" size={30} />
                </Dropdown.Toggle>

                <Dropdown.Menu variant="link">
                  {user ? (
                    <>
                      <Dropdown.Item as={NavLink} to="/login">
                        Tài khoản
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        onClick={() => {
                          dispatch(logout());
                          navigatee("/");
                        }}
                      >
                        Đăng xuất
                      </Dropdown.Item>
                    </>
                  ) : (
                    <>
                      <Dropdown.Item as={NavLink} to="/login">
                        Login
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>Register</Dropdown.Item>
                    </>
                  )}
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
