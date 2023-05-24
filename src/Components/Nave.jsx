import React from 'react'
import "../App.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Nave = () => {
  return (
    
<Navbar  expand="lg"  className='yh'>
      <Container fluid>
        <Navbar.Brand href="#"
              className="ms-5 "

        > <Link to="/" className='sho'> Shopinet </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Form className="d-flex">
            <Form.Control
              type="search"
              variant="outline-success"
              placeholder="Search"
              className="hey ms-5 "
              aria-label="Search"
              
            />
            <Button 
              variant="outline-success"
            
            className='ms-3 bg-success text-light'
            >Search</Button>
          </Form>

          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <NavDropdown title="Account" id="navbarScrollingDropdown"
              className='ms-4'
            >
              <NavDropdown.Item href="#action3"></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Help" id="navbarScrollingDropdown"
              className='ms-4   '

            >
              <NavDropdown.Item href="#action4" className='p-2'>
                Help center
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5" className='p-2'>
                Place and track order 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5" className='p-2'>
                Order cancellation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5" className='p-2'>
                Contact us
              </NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Cart" id="navbarScrollingDropdown"
            
            className='ms-4'
            >
              <NavDropdown.Item href="#action3">Cart</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )
}

export default Nave