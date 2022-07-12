import { useEffect, useState } from "react";
import { Button, Card, Modal, Spinner, Table } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addProducts, getProducts } from "../redux/products/productSlice";
import ProductService from "../services/ProductService";
import Productdetail from "./Productdetail";

const Listproduct = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);

  const notify = () =>
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const dispatch = useDispatch();

  useEffect(() => {
    // const getOneP = async () => {

    //   const response = await ProductService.getOneProduct(1001);
    //   console.log(response.data);
    // };
    async function fetchData() {
      setLoading(true);
      const response = ProductService.getProducts();
      return response;
    }
    fetchData().then((res) => {
      setProducts(res.data);
      setLoading(false);
      dispatch(addProducts(res.data));
    });
    fetchData().catch((err) => console.log(err));
  }, []);

  const deleteProduct = (id) => {
    setProducts(products.filter((element) => element.id !== id));
    notify();
  };

  return (
    <>
      <Card className="mx-3 mt-3  ">
        <Card.Header>Product edition </Card.Header>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Image</th>
              <th>Category</th>
              <th>Available?</th>
              <th></th>
            </tr>
          </thead>
          {loading && (
            <tbody>
              <tr>
                <th colSpan={9}>
                  <Spinner
                    animation="border"
                    className="offset-5"
                    variant="info"
                  />
                </th>
              </tr>
            </tbody>
          )}
          {!loading && products && (
            <tbody>
              {products.map((element, idx) => (
                <tr key={element.id}>
                  <Productdetail
                    deleteProduct={deleteProduct}
                    products={products}
                    setProducts={setProducts}
                    product={element}
                    idx={idx}
                  />
                </tr>
              ))}
            </tbody>
          )}
        </Table>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Card.Footer className="text-center">
          <Button variant="outline-primary">Primary</Button>{" "}
          <Button variant="outline-secondary">Secondary</Button>{" "}
          <Button variant="outline-success">Success</Button>{" "}
          <Button variant="outline-warning">Warning</Button>{" "}
          <Button variant="outline-warning">Warning</Button>{" "}
        </Card.Footer>
      </Card>
    </>
  );
};

export default Listproduct;
