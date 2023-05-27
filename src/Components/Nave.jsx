import React from 'react'
import "../App.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

import {RiAccountCircleLine} from 'react-icons/ri'
import {IoHelpCircleOutline} from 'react-icons/io5'
import {AiOutlineShoppingCart} from 'react-icons/ai'


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
            <NavDropdown title={ <span>
              <RiAccountCircleLine className='fs-3 me-2'/> Account
            </span>}
              id="navbarScrollingDropdown"
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

            <NavDropdown title={
              <span>
                <IoHelpCircleOutline  className='fs-3 me-2'/> Help
              </span>
            } id="navbarScrollingDropdown"
              className='ms-4   '

            >
              <Link  to='help' >
              <NavDropdown.Item href="#action4" className='p-2'>
                Help center
              </NavDropdown.Item>
              </Link>
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
            
            <NavDropdown title={
              <span>
                <AiOutlineShoppingCart className="fs-3 me-2"/>
                Cart
              </span>
            } id="navbarScrollingDropdown"
            
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