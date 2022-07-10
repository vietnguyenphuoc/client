import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";

const Editproduct = () => {
  return (
      <Card className="mx-3 mt-3">
        <Card.Header>Product edition</Card.Header>
        <Card.Body>
          <Form className="mt-4">
            <Row>
              <Col>
                <Image
                  fluid
                  src="https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
                />
              </Col>
              <Col>
                <Form.Group
                  className="mb-4"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control />
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" />
                  <Form.Label>Create Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Price</Form.Label>
                  <Form.Control />
                  <Form.Label>Category</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Label>Available</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="outline-primary">Primary</Button>{" "}
          <Button variant="outline-secondary">Secondary</Button>{" "}
          <Button variant="outline-success">Success</Button>{" "}
          <Button variant="outline-warning">Warning</Button>{" "}
        </Card.Footer>
      </Card>
  );
};

export default Editproduct;
