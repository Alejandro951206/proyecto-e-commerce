import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../shared/CartWidget';

function HeadeR() {
  return (
    <div class="NaviBar">
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href='/'>Tienda Los Panas</Navbar.Brand>
          <Nav className="NaviBar">
            <Nav.Link href='/'>Principal</Nav.Link>
            <Nav.Link href='/pages/ArticlesPages'>Articulos</Nav.Link>
            <Nav.Link href='/pages/AboutUs'>Sobre nosotros</Nav.Link>
            <CartWidget />
          </Nav>
        </Container>
      </Navbar>      
       
      </div>
    
  );
}

export default HeadeR; 

