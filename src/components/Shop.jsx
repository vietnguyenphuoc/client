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
    // console.log(currentPage);
  };

  return (
    <>
      {/* {console.log(totalPage)} */}
      <Breadcrumbs />
      <Row xs={2} md={3} className="g-4">
        {resultPage.map((element, idx) => (
          <Col key={element.id}>
            <Card className="justify-content-center">
              <Link to={`/detail/${element.id}`}>
                <Card.Img
                  variant="top"
                  src="https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
                />
                <Card.Body>
                  <Card.Title>{element.name}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Link>
              <Card.Footer className="text-center">
                <Button variant="info" size="lg">Add cart</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
        {/* {Array.from({ length: 7 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}      */}
      </Row>
      <Paginate
        totalPage={totalPage}
        currentPage={currentPage}
        onChangePage={handleChangePage}
      />
    </>
  );
};

export default Shop;
