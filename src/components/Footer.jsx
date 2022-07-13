import { Dropdown } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Dropdown.Divider />
      <footer bg="info" className="text-center text-lg-left m-4">
        <div className="text-center">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-dark" href="https://bootstrap.com/">
            Bootstrap.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
