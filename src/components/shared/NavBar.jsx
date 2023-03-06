import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../shared/WigetCart';

function HeadeR() {
  return (
    <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="Home">Tienda Los Panas</Navbar.Brand>
          <Nav className="NaviBar">
            <Nav.Link to="/">Principal</Nav.Link>
            <Nav.Link to="pages/ArticlesMain">Articulos</Nav.Link>
            <Nav.Link to="pages/about">Sobre nosotros</Nav.Link>
            <CartWidget />
          </Nav>
        </Container>
      </Navbar>      
       
      </div>
    
  );
}

export default HeadeR; 

