import { Button, Col, Form, Row } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <h1 className="shadow text-success mt-5 p-3 text-center rounded">
        Login
      </h1>
      <Row>
        <Col></Col>
        <Col xs={12} md={4}>
          <Form className="mt-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control size="lg" type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control size="lg" type="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default Login;
