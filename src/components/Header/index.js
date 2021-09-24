import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Container, ItemLink,Logo } from './styles';

function Header() {

  return (
    <Container>
        <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/">
          <Logo src="/assets/logo.svg" alt="Logo" /> 
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <ItemLink to="/">Home</ItemLink>
              </Nav.Link>
              <Nav.Link>
                <ItemLink to="/Contato">Contato</ItemLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </Container>
  );
};

export default Header;
