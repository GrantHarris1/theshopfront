import React from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Headline(props) {
    return (
        <header className='header text-center'>
            <title className='text-center'>The Shop.</title>
            <Navbar variant='dark' bg='dark' expand="lg" className="top text-light">
                <Container className='nav'>
                    <Navbar.Brand as={Link} to='/home' className=' top text-light'><i class="bi bi-lightning-charge"> `</i>The Shop.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" border='light' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/tools' className='text-light'><i class="bi bi-wrench"> </i>Tools</Nav.Link>
                            <Nav.Link as={Link} to='/materials' className='text-light'><i class="bi bi-nut"> </i>Materials</Nav.Link>
                            <Nav.Link as={Link} to='/checkout' className='text-light'><i class="bi bi-bag-plus"> </i>Checkout</Nav.Link>
                            <Nav.Link as={Link} to='/brands' className='text-light'><i class="bi bi-card-checklist"></i> Brands</Nav.Link>
                            <Nav.Link as={Link} to='/return' className='text-light'><i class="bi bi-arrow-return-left"> </i>Ready for Return</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            {/* conditinally render the sign in button to be sign out using the token */}
                            {
                               props.token.length > 0
                               ?
                               <Nav.Link  className='text-light'><i class="bi bi-clipboard"></i>Sign Out</Nav.Link>
                               :
                               <Nav.Link as={Link} to='/signIn' className='text-light'><i class="bi bi-clipboard"></i>Sign In</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}