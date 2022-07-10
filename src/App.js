import Container from "react-bootstrap/Container";
import { Routes, Route, Outlet } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "./App.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Admin from "./components/Admin";
import Products from "./components/Products";
import Authorizing from "./components/Authorizing";
import Listproduct from "./components/Listproduct";
import Editproduct from "./components/Editproduct";

function App() {
  return (
    <>
      <Menu />
      <Container>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="admin" element={<Admin />}>
            <Route path="product" element={<Products />}>
              <Route path="edit" element={<Editproduct />} />
              <Route path="list" element={<Listproduct />} />
            </Route>
            <Route path="unauthorized" element={<Authorizing />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
