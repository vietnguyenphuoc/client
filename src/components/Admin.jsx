import { Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/home" className="mt-3">
        <Nav.Item>
          <Nav.Link eventKey="/product">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/unauthorized">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Outlet />
    </>
  );
};

export default Admin;
