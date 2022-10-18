import { Button, Card, Col, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <Card className="mt-3">
        <Card.Header>
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link as={NavLink} to="product" >Products</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="unauthorized" >Authorizing</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Outlet/>
        </Card.Body>
      </Card>
    </>
  );
};

export default Admin;
