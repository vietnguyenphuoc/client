import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
const Productdetail = ({ product, idx, products, setProducts }) => {
  const [products1, setProducts2] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteProduct = (id) => {
    setProducts2(products);
    // setProducts(products1.filter((element) => element.id !== id));
    handleClose();
  };

  return (
    <>
      <th>{idx + 1}</th>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.createDate}</td>
      <td>{product.image}</td>
      <td>{product.category.name}</td>
      <td>{product.available ? "Yes" : "No"}</td>
      <td className="text-center">
        <Button variant="link">
          <Icon.PencilSquare size={30} />
        </Button>
        <Button variant="link" onClick={handleShow}>
          <Icon.XCircle size={30} className="text-danger" />
        </Button>
      </td>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Productdetail;
