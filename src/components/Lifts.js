import React from 'react';
import { Card, ListGroup, ListGroupItem, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Lifts() {
    return (
        <Container fluid className="conduit">
            < br />
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card className=" conCard text-center shadow p-3 mb-5 bg-white rounded">
                        <Card.Img variant="top" src='https://rakagrp.com/wp-content/uploads/2021/08/Boom-lift-vs-Scissor-Lift.jpg' />
                        <Card.Body>
                            <Card.Title>Lifts Available:</Card.Title>
                            <Card.Text>
                                Here Is A List Of The Lifts and Sizes Available
                                </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>19' Scissor Lift  </ListGroupItem>
                            <ListGroupItem>26' Scissor Lift </ListGroupItem>
                            <ListGroupItem>32' Scissor Lift </ListGroupItem>
                            <ListGroupItem>45' Scissor Lift </ListGroupItem>
                            <ListGroupItem>50' Scissor Lift </ListGroupItem>
                            <ListGroupItem>S-40 Boom Lift</ListGroupItem>
                            <ListGroupItem>S-60 Boom Lift</ListGroupItem>
                            <ListGroupItem>S-80 Boom Lift</ListGroupItem>
                            <ListGroupItem>SX-105 XC Boom Lift</ListGroupItem>



                        </ListGroup>
                        <Card.Body className="text-danger">
                            <Card.Text>Follow the links below if you need help.</Card.Text>
                            <Card.Link as={Link} to='/home'><i class="bi bi-lightning-charge text-danger"></i></Card.Link>
                            <Card.Link as={Link} to='/tools'><i class="bi bi-wrench text-danger"></i></Card.Link>
                            <Card.Link as={Link} to='/materials'><i class="bi bi-nut text-danger"></i></Card.Link>
                            <Card.Link as={Link} to='/checkout'><i class="bi bi-bag-plus text-danger"></i></Card.Link>
                            <Card.Link as={Link} to='/return'><i class="bi bi-arrow-return-left text-danger"></i></Card.Link>
                            <Card.Link href="mailto: grant.harris.web@gmail.com"><i className="bi bi-envelope text-danger"></i></Card.Link>
                            <Card.Link href="tel:8597857869"><i class="bi bi-telephone text-danger"></i></Card.Link>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
