import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import navbarimg from "../images/navbarimg.png";


function Navigation() {   

return (
  <Navbar bg="light" expand="lg">
    <Container fluid>
      <img src={navbarimg} alt="foodies logo for navbar" style ={{height:"85px", weight:"85px"}}></img>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/shoppingList">Shopping List</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export { Navigation };