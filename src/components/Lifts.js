import React from 'react';
import { Card, Table, Container, Row, Col, Button } from 'react-bootstrap';
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
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Size</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>19'</td>
                                    <td>Scissor</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>26'</td>
                                    <td>Scissor</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>32'</td>
                                    <td>Scissor</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>45'</td>
                                    <td>Scissor</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>50'</td>
                                    <td>Scissor</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>S-40</td>
                                    <td>Boom</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>S-60</td>
                                    <td>Boom</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>S-80</td>
                                    <td>Boom</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>SX-105 XC</td>
                                    <td>Boom</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>19'</td>
                                    <td>One Man</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button id="top-btn" variant="secondary" type="submit" data-tf-popup="u1sHmRet">
                            Quick Checkout Form
                            </Button>
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
