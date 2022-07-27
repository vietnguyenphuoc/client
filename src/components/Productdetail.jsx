import { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, NavLink, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
import ProductService from "../services/ProductService";
const ProducDetail = () => {
  const [product, setProduct] = useState();

  const { id } = useParams();

  useEffect(() => {
    const getOneP = async () => {
      const response = await ProductService.getOneProduct(id);
      setProduct(response.data);
      console.log(product);
    };
    getOneP();
  }, [id]);
  return (
    <>
      {
        product && <Card className="mt-4 mb-4" style={{ minHeight: "550px" }}>
        <Card.Body>
          <Row>
            <Col xs={7}>
              <Image
                fluid
                style={{ marginTop: "70px",marginLeft: "120px" }}
                src={`http://localhost:8080/files/fffffff/${product.image}`}
              />
            </Col>
            <Col style={{ marginTop: "150px", marginLeft: "70px" }}>
              <Card.Title>
                {product.name}
              </Card.Title>
              {/* <Card.Text>
                ${product && product.price}
              </Card.Text> */}
              <ListGroup>
                <ListGroup.Item className="border-0">○ Price: <u>${product.price}</u></ListGroup.Item>
                <ListGroup.Item className="border-0">○ Date created: {product.createDate}</ListGroup.Item>
                <ListGroup.Item className="border-0">○ Category: {product.category.name}</ListGroup.Item>
              </ListGroup>
              <Button variant="primary">Buy</Button>{" "}
              <Button variant="primary">Add cart</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      }
      
    </>
  );
};

export default ProducDetail;
