import React from 'react'
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
// import img from './../assets/logo.png'

function Header() {
  return (
    <>
     <Navbar className='hed fixed-top' expand="lg">
        <Navbar.Brand href="#home" className='logo'>TheEvents</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="" className='nav1'>Home</Nav.Link>
            <Nav.Link href="" className='nav1'>About</Nav.Link>
            <Nav.Link href="" className='nav1'>Speckers</Nav.Link>
            <Nav.Link href="" className='nav1'>Schedule</Nav.Link>
            <Nav.Link href="" className='nav1'>Venue</Nav.Link>
            <Nav.Link href="" className='nav1'>Hotels</Nav.Link>
            <Nav.Link href="" className='nav1'>Gallery</Nav.Link>
            <Nav.Link href="" className='nav1'>Sponsor</Nav.Link>
            <Nav.Link href="" className='nav1'>Contect</Nav.Link>
            <Nav.Link href="#" className='nav1' id="btn1">Buy Tickets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Header