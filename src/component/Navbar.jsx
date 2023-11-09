import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiMiniPhone } from 'react-icons/hi2';
import { BsShareFill } from 'react-icons/bs';
import '../styles/navbar.css';



const Navb = () => {
  return (
  <Navbar bg="white" expand="lg" className='bar'>
 <Navbar.Brand className='name ms-3' href="#home">Shahid</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-3'/>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav className="mx-auto links">
    <Nav.Link  href="#home">Home</Nav.Link>
         <Nav.Link  href="#link">About me</Nav.Link>
         <Nav.Link  href="#link">Showcase</Nav.Link>
    </Nav>
    <Nav className="icons ml-auto">
    <Nav.Link className='' href="#home" >Eng</Nav.Link>
     <HiMiniPhone className='ms-5' />
     <BsShareFill className='ms-5 me-3'/>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  

  )
}

export default Navb