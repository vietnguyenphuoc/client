import { Breadcrumb } from "react-bootstrap";

const Breadcrumbs = () => {
    return (
      <Breadcrumb bg="dark" className="mt-3">
        <Breadcrumb.Item className="btn btn-link align-items-center active">Home</Breadcrumb.Item>
        <Breadcrumb.Item className="btn btn-link" >
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item className="btn btn-link disabled" >Data</Breadcrumb.Item>
      </Breadcrumb>
    );
  };
  
  export default Breadcrumbs;
  