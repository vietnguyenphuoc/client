import { Button, Card, Table } from "react-bootstrap";

const Listproduct = () => {
  return (
    <Card>
      <Card.Header>Product edition</Card.Header>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
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
