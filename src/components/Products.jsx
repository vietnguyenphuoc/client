import { Col, Nav, Row, Table } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <Nav variant="tabs" className="mt-3 mx-3 w-100">
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="add"
            className="text-dark"
          >
            Product edition
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="list"
            className="text-dark"
          >
            Lisst of products
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Outlet/>
    </>
  );
};

export default Products;
