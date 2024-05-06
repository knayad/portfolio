import React, { Component } from "react";
import Container from "react-bootstrap/Container";
// import ModalComponent from "./ModalComponent";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import ResponsiveOffCanvas from "./ResponsiveOffCanvas";

class NavbarComp extends Component {
  render() {
    return (
      <Navbar fixed="top" collapseOnSelect expand="lg" className="nav">
        <Container>
          <Navbar.Brand href="home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {/* <ResponsiveOffCanvas /> */}
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="reviews">Reviews</Nav.Link>
              <Nav.Link href="hire">Hire</Nav.Link>
              <Nav.Link href="repos">Repositories</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarComp;
