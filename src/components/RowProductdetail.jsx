import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const RowProductdetail = ({ product, idx, deleteProduct }) => {
  // const [products1, setProducts2] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Link to={`/admin/product/edit/${product.id}`}>
            <Icon.PencilSquare size={30} />
          </Link>
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
          <Button variant="danger" onClick={() => deleteProduct(product.id)}>
            Delete
          </Button>    
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RowProductdetail;
