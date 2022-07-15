import { Button, Card, Col, Nav, Row, Table } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      {/* <Card>
        <Card.Header>
          <Nav variant="pills" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link as={NavLink} to="add" >Product edition</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="list" >Lisst of products</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
      <Card.Title>Products</Card.Title>
      <Nav variant="tabs" className="w-100">
        <Nav.Item>
          <Nav.Link as={NavLink} to="add" className="text-dark">
            Product edition
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="list" className="text-dark">
            Lisst of products
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Outlet />
    </>
  );
};

export default Products;
