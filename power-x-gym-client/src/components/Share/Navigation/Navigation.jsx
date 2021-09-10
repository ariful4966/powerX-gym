import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const user = useSelector(state => state.authReducer)
  const [menu, setMenu] = useState('')
  const { url } = useRouteMatch();
  useEffect(() => {
    setMenu(url)
  }, [menu])


  return (
    <Navbar bg="transparent" className="py-3" >
      <Container>
        <Navbar.Brand className="logo_brand" href="#home">Power <span className="brand_color">X</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className={` nav-link ${menu === '/' ? 'brand_color' : 'text-white'}`} to='/'>Home</Link>
            <Nav.Link href="/#service" className="text-white">Service</Nav.Link>
            <Link to="/classes" className={` nav-link ${menu === ('/classes' || '/classes/') ? 'brand_color' : 'text-white'}`}>Our Classes</Link>
            <Nav.Link href="/#about" className="text-white">About us</Nav.Link>
            <Nav.Link href="#link" className="text-white">Blog</Nav.Link>
            <Link to="/prices" className={` nav-link ${menu === '/prices' ? 'brand_color' : 'text-white'}`}>Pricing</Link>
            <Nav.Link href="#link" className="text-white">Contact us</Nav.Link>
            {
              user.isLogin &&

              <Nav.Link href="/" className="userPhoto">
                <img src={user.photo} alt="User Picute" title={user.name} className="w-100" />
              </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;