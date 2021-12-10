import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Return() {
    return (
        <div className='return'>
            <Container fluid className="conduit text-center">
                <Row className="justify-content-md-center">
                    <Col>
                        <Card className=" conCard text-center shadow p-3 mb-5 bg-white rounded">
                            <Card.Body>
                                <Card.Title>Mark Items Ready For Return:</Card.Title>
                                <Card.Text>
                                    Please Enter Your Information To Return Items.
                                </Card.Text>
                            </Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="name" placeholder="Enter Name" />
                                    <Form.Text className="text-muted">
                                        Please enter your full name.
                                </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Job Number</Form.Label>
                                    <Form.Control type="text" placeholder="Job#" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Job Location</Form.Label>
                                    <Form.Control type="text" placeholder="Job Address" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Tool ID</Form.Label>
                                    <Form.Control type="integer" placeholder="Tool ID #" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check for Return" />
                                </Form.Group>
                                <Button variant="light" type="submit">
                                    Submit
                            </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Card className="text-center">
                <Card.Body className="text-danger">
  <Card.Text>Follow the links below if you need help.</Card.Text>
    <Card.Link as={Link} to='/home'><i class="bi bi-lightning-charge text-danger"></i></Card.Link>
    <Card.Link as={Link} to='/tools'><i class="bi bi-wrench text-danger"></i></Card.Link>
    <Card.Link as={Link} to='/materials'><i class="bi bi-nut text-danger"></i></Card.Link>
    <Card.Link as={Link} to='/checkout'><i class="bi bi-bag-plus text-danger"></i></Card.Link>
    <Card.Link as={Link} to='/return'><i class="bi bi-arrow-return-left text-danger"></i></Card.Link>
    <Card.Link href = "mailto: grant.harris.web@gmail.com"><i className="bi bi-envelope text-danger"></i></Card.Link>
    <Card.Link href="tel:8597857869"><i class="bi bi-telephone text-danger"></i></Card.Link>
    
    </Card.Body>
               </Card>
                <br />
                </Container>
        </div>
    )
}
