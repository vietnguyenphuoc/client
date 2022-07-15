import { Button, Card, Col, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      {/* <Row>
        <Col xs={1}>
          <Nav variant="tabs" className="mt-3 flex-column">
            <Nav.Link as={NavLink} to="product" className="text-dark actice">Products</Nav.Link>
            <Nav.Link as={NavLink} to="unauthorized" className="text-dark">Authorizing</Nav.Link>
          </Nav>
        </Col>
        <Col>
          <Outlet />
        </Col>
      </Row> */}
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
