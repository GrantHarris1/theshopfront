import React from 'react';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Material() {
    return (
        <div>
             <Container className='text-center'>
                <Row>
                    <Col>
                        <Card md='2'>
                            {/* <Card.Img variant="top" src = './src/style/img/Tools.png'/> */}
                            <Card.Body className='cBody text-light'>
                                <Card.Title><h1>Materials</h1></Card.Title>
                                <Card.Text>
                                    <h2>Straps</h2>
                                    <p>Filler</p>
                                    <br />
                                    <h2>Hardware</h2>
                                    <p>Lorem</p>
                                    <br />
                                    <h2>Conduit</h2>
                                    <p>Lorem</p>
                                    <br />
                                    <h2>Fittings</h2>
                                    <p>Lorem</p>
                                    <br />
                                </Card.Text>
                                <Button as={Link} to='/checkout' variant="light">Go to Checkout</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
