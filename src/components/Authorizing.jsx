import { useEffect, useState } from "react";
import { InputGroup, Spinner, Table } from "react-bootstrap";
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
      // console.log(dataAuthorities);
      setLoading(false);
    });
    fetchData().catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className="mx-3">Authorizing</h1>
      <div className="table-responsive">
        <Table striped bordered hover className="justify-content-center">
          <thead align="center">
            <tr>
              <th></th>
              {dataAuthorities &&
                dataAuthorities.roles.map((element, idx) => (
                  <th key={element.id}>{element.name}</th>
                ))}
              {/* <th>ADMIN</th>
            <th>GUEST</th>
            <th>User</th> */}
            </tr>
          </thead>
          <tbody align="center">
            {dataAuthorities ? (
              dataAuthorities.accounts.map((element) => (
                <tr key={element.username}>
                  <th>{element.username}</th>
                  {dataAuthorities.roles.map(() => (
                    <th>
                      <input className="form-check-input" type="checkbox" />
                    </th>
                  ))}
                </tr>
              ))
            ) : (
              <tr align="center">
                <th colSpan={4}>
                  <Spinner animation="border" variant="info" />
                </th>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Authorizing;
