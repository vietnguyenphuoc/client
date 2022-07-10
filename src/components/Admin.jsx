import { Col, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <Row>
        <Col xs={1}>
          {/* <Nav variant="tabs" className="sidebar flex-column mt-3">
            <Nav.Link
              as={NavLink}
              to="product"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Products
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="unauthorized"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Authorizing
            </Nav.Link>
          </Nav> */}
          <Nav variant="tabs" className="mt-3 flex-column">
            <Nav.Link as={NavLink} to="product" className="text-dark actice">Products</Nav.Link>
            <Nav.Link as={NavLink} to="unauthorized" className="text-dark">Authorizing</Nav.Link>
          </Nav>
        </Col>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

export default Admin;
