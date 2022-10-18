import { useState } from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../redux/auth/authSlice";
import LoginService from "../services/LoginService";

const Login = () => {
  const navigatee = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    username,
    password
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8080/login", requestOptions)
      .then((response) => {
        if (response.ok) {
          navigatee("/");
          return response.json();
        } else {
          throw Error(response.status);
        }
      })
      .then((result) => {
        console.log(result)
        dispatch(loginSuccess(result))
        setSuccess(true)
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Row>
        <Col></Col>
        <Col xs={12} md={4}>
          <div className="shadow text-success mt-5 p-3 rounded">
            <h1 className="text-center">Login</h1>
            <Form className="mt-3" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  size="lg"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
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
