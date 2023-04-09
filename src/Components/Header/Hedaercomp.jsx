import React from 'react'
import './Header.css'
import { Nav, Navbar } from 'react-bootstrap'
import img from './../assets/logo.png'

function Hedaercomp() {
  return (
    <>
     <Navbar className='bg-dark fix-top' expand="lg">
        <Navbar.Brand href="#home"><img src ={img} width = "200px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='nav1'>Home</Nav.Link>
            <Nav.Link href="#link" className='nav1'>About</Nav.Link>
            <Nav.Link href="#" className='nav1'>Speckers</Nav.Link>
            <Nav.Link href="#" className='nav1'>Schedule</Nav.Link>
            <Nav.Link href="#" className='nav1'>Venue</Nav.Link>
            <Nav.Link href="#" className='nav1'>Hotels</Nav.Link>
            <Nav.Link href="#" className='nav1'>Gallery</Nav.Link>
            <Nav.Link href="#" className='nav1'>Sponsor</Nav.Link>
            <Nav.Link href="#" className='nav1'>Contect</Nav.Link>
            <Nav.Link href="#" className='nav1' id="btn">Buy Tickets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

    </>
  )
}

export default Hedaercomp