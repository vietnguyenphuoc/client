import { Button, Card, Col, NavLink, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
const ProducDetail = () => {
  return (
    <>
      <Card className="mt-5" style={{ minHeight: "550px" }}>
        <Card.Body>
          <Row>
            <Col xs={5}>
              <Image
                fluid
                style={{marginTop: "70px"}}
                className="d-flex justify-content-center"
                src="https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
              />
            </Col>
            <Col>
              <Card.Title style={{marginTop: "70px"}}>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProducDetail;
