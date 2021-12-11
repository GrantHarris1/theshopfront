import React from 'react';
import { Card, ListGroup, ListGroupItem, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Safety() {
    return (
        
             <Container fluid className="conduit">
            < br />
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card className=" conCard text-center shadow p-3 mb-5 bg-white rounded">
                        <Card.Img variant="top" src='https://safetyculture.com/wp-content/media/2020/10/PPE-Personal-Protective-Equipment-1024x768.jpg' />
                        <Card.Body>
                            <Card.Title>Safety Equipment Available:</Card.Title>
                            <Card.Text>
                                Here Is A List Of The Safety Equipment Available
                                </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>ANSI Safety Glasses (clear)</ListGroupItem>
                            <ListGroupItem>ANSI Safety Glasses (tinted)</ListGroupItem>
                            <ListGroupItem>Hearing Protection</ListGroupItem>
                            <ListGroupItem>Class E Hard Hats</ListGroupItem>
                            <ListGroupItem>Level 4 Gloves (sm)</ListGroupItem>
                            <ListGroupItem>Level 4 Gloves (md)</ListGroupItem>
                            <ListGroupItem>Level 4 Gloves (lg)</ListGroupItem>
                            <ListGroupItem>Level 4 Gloves (xl)</ListGroupItem>
                            <ListGroupItem>High Viz Vest (sm)</ListGroupItem>
                            <ListGroupItem>High Viz Vest (md)</ListGroupItem>
                            <ListGroupItem>High Viz Vest (lg)</ListGroupItem>
                            <ListGroupItem>High Viz Vest (xl)</ListGroupItem>
                            <ListGroupItem>Hot Work Permit</ListGroupItem>
                            <ListGroupItem>Street Cones</ListGroupItem>
                            <ListGroupItem>Workers Ahead Sign</ListGroupItem>
                            <ListGroupItem>Fire Extinguisher</ListGroupItem>
                            


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
