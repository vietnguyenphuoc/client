import { useCallback, useEffect, useState } from "react";
import { Button, Card, Col, NavLink, Pagination, Row } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import ProductService from "../services/ProductService";
import Breadcrumbs from "./Breadcrumbs";
import Paginate from "./Paginate";

const Shop = (props) => {
  const [loading, setLoading] = useState(true);
  const [resultPage, setResultPage] = useState([]);
  const [name, setName] = useState("");
  const [sizePage, setSizePage] = useState(9);
  const [totalPage, setTotalPage] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);

  const navigatee = useNavigate();

  const search = useLocation().search;
  const currentPage = new URLSearchParams(search).get("page");
  const loadData = async (page = "0") => {
    const response = ProductService.getPages(name, page, sizePage);
    return response;
  };

  useEffect(() => {
    function fetchData() {
      setLoading(true);
      if (currentPage) {
        const response = loadData(currentPage);
        return response;
      } else {
        const response = loadData();
        return response;
      }
    }
    fetchData().then((res) => {
      setResultPage(res.data.content);
      setTotalPage(res.data.totalElements);
      setLoading(false);
    });
    fetchData().catch((err) => console.log(err));
  }, [currentPage]);

  const handleChangePage = (p) => {
    navigatee("?page=" + (p - 1));
  };

  return (
    <>
      <Breadcrumbs />
      <Row xs={2} md={3} className="g-4">
        {resultPage.map((element, idx) => (
          <CardItem key={element.id} product={element}></CardItem>
        ))}
      </Row>
      <Paginate
        totalPage={totalPage}
        currentPage={currentPage}
        onChangePage={handleChangePage}
      />
    </>
  );
};

const CardItem = (props) => {
  return (
    <Col xs={12} md={4}>
      <Card className="justify-content-md-center">
        <Link to={`/detail/${props.product.id}`}>
          <Card.Img
           style={{ height: '25rem' }}
            variant="top"
            fluid="true"
            src={`http://localhost:8080/files/fffffff/${props.product.image}`}
          />
          <Card.Body className="text-center">
            <Card.Title>
              <h4>{props.product.name}</h4>
            </Card.Title>
            <Card.Subtitle>
              ${props.product.price}
            </Card.Subtitle>
          </Card.Body>
        </Link>
        <Button className="border border-1 text-dark" variant="outline-info">
          Add cart
        </Button>
      </Card>
    </Col>
  );
};

export default Shop;
