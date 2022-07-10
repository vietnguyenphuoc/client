import { useEffect, useState } from "react";
import { Button, Card, Modal, Table } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import ProductService from "../services/ProductService";
import Productdetail from "./Productdetail";

const Listproduct = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   setLoading(true);

    //   const response = await ProductService.getProducts();
    //   setProducts(response.data);
    //   // console.log(response.data);
    //   setLoading(false);
    // };
    async function fetchData() {
      setLoading(true);
      const response = ProductService.getProducts();
      return response;
    }
    fetchData().then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
    fetchData().catch((err) => console.log());
  }, []);



  return (
    <Card className="mx-3 mt-3  ">
      <Card.Header>Product edition</Card.Header>
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
        {!loading && products && (
          <tbody>
            {products.map((element, idx) => (
              <tr key={element.id}>
                <Productdetail products setProducts product={element} idx={idx}/>
              </tr>
            ))}
            
          </tbody>
        )}
      </Table>
      
      <Card.Footer className="text-center">
        <Button variant="outline-primary">Primary</Button>{" "}
        <Button variant="outline-secondary">Secondary</Button>{" "}
        <Button variant="outline-success">Success</Button>{" "}
        <Button variant="outline-warning">Warning</Button>{" "}
        <Button variant="outline-warning">Warning</Button>{" "}
      </Card.Footer>
    </Card>
  );
};

export default Listproduct;
