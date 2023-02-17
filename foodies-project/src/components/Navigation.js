import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


function Navigation() {
  return (
    <Navbar sticky='top' bg='light' variant='dark' className='mb-4'>
      <Container>
        {/* <Navbar.Brand>
          <Image src={squirtle} width='30' className='me-2' />
          Pokeverse
        </Navbar.Brand> */}

        {/* <Nav className="nav justify-content-end">
           <Nav.Link as="div">
            <NavLink to='/' style={{ textDecoration: 'none' }}>All Recipes</NavLink>
            <NavLink to='/shoppingList' style={{ textDecoration: 'none' }}>My Shopping List</NavLink>
          </Nav.Link>  */}
           <ul class="nav justify-content-end">
              <li class="nav-item">
                 <a class="nav-link" href="#">All Recipes</a>
              </li>
              <li class="nav-item">
                 <a class="nav-link" href="#">Shopping List</a>
              </li> 
           </ul> 
        {/* </Nav> */}
      </Container>
    </Navbar>
  );
}

export { Navigation };