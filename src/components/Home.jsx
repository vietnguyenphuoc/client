import { Button, Col, FormLabel, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Image from "react-bootstrap/Image";
const Home = () => {
  return (
    <>
      <Row>
        <Col xs md={6}>
          <Image
            className="mt-5"
            width={"500px"}
            src="https://cdn.pixabay.com/photo/2015/12/23/01/14/edit-1105049_960_720.png"
            fluid
          />
        </Col>
        <Col xs={12} md={6} className="mt-5">
          <div className="mt-4">
            <h1 className="display-5">
              <b>XIN CHAO</b>
            </h1>
            <p className="big-text display-2 mt-5">Shopping Online</p>
            <p className="text-justify mt-5">
              Online shopping will still be booming this year, even if the
              COVID-19 pandemic is over, experts have said
            </p>
            <Button className="mx-3 mt-5" size="lg" variant="info">
              Get Shopping
            </Button>
            <Button className="mt-5" variant="outline-info" size="lg">
              Login
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Home;
