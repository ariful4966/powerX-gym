import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <Navbar bg="transparent" className="py-3" >
      <Container>
        <Navbar.Brand className="logo_brand" href="#home">Power <span className="brand_color">X</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link text-white" to='/'>Home</Link>
            <Nav.Link href="#link" className="text-white">Service</Nav.Link>
            <Nav.Link href="#link" className="text-white">Our Classes</Nav.Link>
            <Nav.Link href="#link" className="text-white">About us</Nav.Link>
            <Nav.Link href="#link" className="text-white">Blog</Nav.Link>
            <Nav.Link href="#link" className="text-white">Pricing</Nav.Link>
            <Nav.Link href="#link" className="text-white">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;