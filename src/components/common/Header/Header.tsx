import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import styles from "./stylesHeader.module.css";
import { HeaderBasket } from "../../eCommerce";
const { headerContainer } = styles;
const Header = () => {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className='m-0 d-flex'>
          <span className="me-2">Our</span>
          <Badge bg="info">E-Commerce</Badge>
              </h1>
              <HeaderBasket/>
      </div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Categories</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
            </Nav>
            <Nav className="">
              <Nav.Link href="#home">Log in</Nav.Link>
              <Nav.Link href="#link">Sign in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
