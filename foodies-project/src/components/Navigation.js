import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navigation() {   

return (
  <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Foodies</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/shoppinglist">Shopping List</Nav.Link>
           {/* <NavDropdown title="Shopping List" id="navbarScrollingDropdown"> */}
            {/* <NavDropdown.Item href="#action3"></NavDropdown.Item>
            <NavDropdown.Item href="#action4"> 
              
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link href="#" disabled>
            
          </Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export { Navigation };