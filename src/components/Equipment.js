import React from 'react';
import { Card, ListGroup, ListGroupItem, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Equipment() {
    return (
        <Container fluid className="conduit">
        < br />
        <Row className="justify-content-md-center">
            <Col md="auto">
                <Card className=" conCard text-center shadow p-3 mb-5 bg-white rounded">
                    <Card.Img variant="top" src='https://www.napipelines.com/wp-content/uploads/2019/06/ditch-witch-trencher.jpg' />
                    <Card.Body>
                        <Card.Title>Equipment Available:</Card.Title>
                        <Card.Text>
                            Here Is A List Of The Earth Moving Equipment Available
                            </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Micro Trencher </ListGroupItem>
                        <ListGroupItem>Ride on Trencher</ListGroupItem>
                        <ListGroupItem>Walk Behind Trencher</ListGroupItem>
                        <ListGroupItem>Mini or Compact Excavator</ListGroupItem>
                        <ListGroupItem>Midi Excavator</ListGroupItem>
                        <ListGroupItem>Standard Excavator</ListGroupItem>
                        <ListGroupItem>Large Excavator</ListGroupItem>
                        <ListGroupItem>Bobcat Compact Track Loaders</ListGroupItem>
                        <ListGroupItem>Bobcat Small Articulated Loaders</ListGroupItem>
                        <ListGroupItem>Bobcat Compact Wheel Loaders</ListGroupItem>



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
