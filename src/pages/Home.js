import React from 'react';
import { DropdownButton, Dropdown, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='text-center'>
            <br />
            <Container>
                <Row>
                    <Col></Col>
                    <Col><DropdownButton variant ='dark' id="dropdown-basic-button" title="Quick Search" className='text-light' >
  <Dropdown.Item href="#/action-1" className='bg-dark text-light'>Conduit</Dropdown.Item>
  <Dropdown.Item as={Link} to='/tools' className='bg-dark text-light'>Tools</Dropdown.Item>
  <Dropdown.Item href="#/action-3" className='bg-dark text-light'>Equipment</Dropdown.Item>
  <Dropdown.Item href="#/action-3" className='bg-dark text-light'>Fittings</Dropdown.Item>
  <Dropdown.Item href="#/action-3" className='bg-dark text-light'>Hardware</Dropdown.Item>
  <Dropdown.Item href="#/action-3" className='bg-dark text-light'>Lifts</Dropdown.Item>
  <Dropdown.Item href="#/action-3" className='bg-dark text-light'>Safety Equipment</Dropdown.Item>
</DropdownButton></Col>
                    <Col></Col>
                </Row>
            </Container>

        </div>
    )
}
