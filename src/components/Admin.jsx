import { Nav } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <Nav variant="tabs" className="mt-3">
        <Nav.Item>
          <Nav.Link as={NavLink} to="product" className={({ isActive }) => isActive? "active": ''}>Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="unauthorized" className={({ isActive }) => isActive? "active": ''}>Authorizing</Nav.Link>
        </Nav.Item>
      </Nav>
      <Outlet />
    </>
  );
};

export default Admin;
