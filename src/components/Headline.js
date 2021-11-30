import React from 'react';
import { Navbar, Container, Nav,} from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Headline() {
    return (
        <header className='header text-center'>
            <title className='text-center'>The Shop.</title>
            <Navbar bg='dark' expand="lg" className="top">
  <Container className = 'nav'>
    <Navbar.Brand as={Link} to='/home' className=' top text-light'><i class="bi bi-lightning-charge"> </i>The Shop.</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/tools' className='text-light'><i class="bi bi-wrench"> </i>Tools</Nav.Link>
        <Nav.Link as={Link} to='/materials' className='text-light'><i class="bi bi-nut"> </i>Materials</Nav.Link>
        <Nav.Link as={Link} to='/checkout' className='text-light'><i class="bi bi-bag-plus"> </i>Checkout</Nav.Link>
        <Nav.Link as={Link} to='/return' className='text-light'><i class="bi bi-arrow-return-left"> </i>Return Items</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}