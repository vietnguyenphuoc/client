import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Row>
        <Col></Col>
        <Col xs={12} md={4}>
          <div className="shadow text-success mt-5 p-3 rounded">
            <h1 className="text-center">Login</h1>
            <Form className="mt-3">
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control size="lg" type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control size="lg" type="password" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Form.Group className="mb-3">
                <div className="d-grid gap-2">
                  <Button
                    variant="info"
                    className="rounded-pill text-light"
                    type="submit"
                  >
                    Login Now
                  </Button>
                  <Dropdown.Divider />
                  <Button
                    variant="secondary"
                    className="rounded-pill text-light"
                    type="submit"
                  >
                    Register A New Account
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default Login;
