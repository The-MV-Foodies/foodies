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
//   return (
//     <Navbar sticky='top' bg='light' variant='dark' className='mb-4'>
//       <Container>
//         {/* <Navbar.Brand>
//           <Image src={squirtle} width='30' className='me-2' />
//           Pokeverse
//         </Navbar.Brand> */}

//         {/* <Nav className="nav justify-content-end">
//            <Nav.Link as="div">
//             <NavLink to='/' style={{ textDecoration: 'none' }}>All Recipes</NavLink>
//             <NavLink to='/shoppingList' style={{ textDecoration: 'none' }}>My Shopping List</NavLink>
//           </Nav.Link>  */}
//            <ul class="nav justify-content-end">
//               <li class="nav-item">
//                  <a class="nav-link" href="#">All Recipes</a>
//               </li>
//               <li class="nav-item">
//                  <a class="nav-link" href="#">Shopping List</a>
//               </li> 
//            </ul> 
//         {/* </Nav> */}
//       </Container>
//     </Navbar>
//   );
// }

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
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">All recipes</Nav.Link>
          <NavDropdown title="Shopping List" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3"></NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export { Navigation };