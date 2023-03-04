import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function HeadeR() {
  return (
    <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tienda Los Panas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Principal</Nav.Link>
            <Nav.Link href="#Articles">Articulos</Nav.Link>
            <Nav.Link href="#ShoppingCar">Carrito de compras</Nav.Link>
          </Nav>
        </Container>
      </Navbar>      
       
      </div>
    
  );
}

export default HeadeR; 

