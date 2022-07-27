import { useEffect, useState } from "react";
import { InputGroup, Table } from "react-bootstrap";
import authorities from "../services/Authorities";

const Authorizing = () => {
  const [loading, setLoading] = useState(true);
  const [dataAuthorities, setDataAuthorities] = useState();
  const loadData = async () => {
    const response = authorities.getData();
    return response;
  };

  useEffect(() => {
    function fetchData() {
      setLoading(true);
      const response = loadData();
      return response;
    }
    fetchData().then((res) => {
      setDataAuthorities(res.data);
      // console.log(res.data.roles[0]);
      // console.log(dataAuthorities.roles[0]);
      setLoading(false);
    });
    fetchData().catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className="mx-3">Authorizing</h1>
      <Table striped bordered hover className="justify-content-center">
        <thead>
          <tr>
            <th></th>
            {dataAuthorities && 
              dataAuthorities.map &&
              dataAuthorities.array.forEach((element,idx) => {
                console.log(dataAuthorities.roles[1])
              })}
            
            {/* {dataAuthorities &&
              dataAuthorities.map &&
              dataAuthorities.array.forEach((element,idx) => {
                (<th>{element.roles[idx]}</th>)
              })}
            {/* <th>ADMIN</th>
            <th>GUEST</th>
            <th>User</th> */} 
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>user1</td>
            <td>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </td>
            <td>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </td>
            <td>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </td>
          </tr>
          <tr>
            <td>user2</td>
            <td>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </td>
            <td>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </td>
            <td>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </td>
          </tr>
          <tr>
            <td>user3</td>
            <td>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </td>
            <td>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </td>
            <td>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Authorizing;
