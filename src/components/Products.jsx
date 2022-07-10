import { Col, Nav, Row, Table } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <Row className="mt-3">
        <Col xs={2}>
          <Nav variant="tabs" className="flex-column">
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="edit"
                variant="tabs"
                className={({ isActive }) => (isActive ? "fw-bold" : "")}
              >
                Product edition
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="list"
                className={({ isActive }) => (isActive ? "fw-bold" : "")}
              >
                Lisst of products
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col>
          <Outlet/>
        </Col>
      </Row>
    </>
  );
};

export default Products;
