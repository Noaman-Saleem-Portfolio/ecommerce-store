import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";

import styles from "./Menubar.module.css";
function Menubar() {
  return (
    <Navbar expand="lg" className={styles.navbarBackground}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className={styles.brand}>
          <span style={{ color: "white" }}>Noaman</span>
          <span
            style={{
              backgroundColor: "white",
              color: "black",
              marginLeft: "4px",
              padding: "0 5px",
            }}
          >
            Store
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.bread}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className={styles.menubarLink}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={styles.menubarLink}>
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/products"
              className={styles.menubarLink}
            >
              Products
            </Nav.Link>
            <Nav.Link to="/contact" className={styles.menubarLink} as={NavLink}>
              Contact
            </Nav.Link>
            <Nav.Link
              to="/cart"
              as={NavLink}
              style={{ position: "relative", maxWidth: "38px" }}
              className={styles.menubarLink}
            >
              <BsCart className={styles.cartIcon} />
              <span className={styles.cartQuanitity}>10</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;
