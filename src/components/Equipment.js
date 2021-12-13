import React from 'react';
import { Card, Table, Container, Row, Col, Button } from 'react-bootstrap';
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
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Equip. Name</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Micro Trencher</td>

                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Ride on Trencher</td>

                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Walk Behind Trencher</td>

                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Mini or Compact Excavator</td>

                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Midi Excavator</td>

                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Standard Excavator</td>

                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Large Excavator</td>

                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Bobcat Compact Track Loaders</td>

                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Bobcat Small Articulated Loaders</td>

                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Bobcat Compact Wheel Loaders</td>

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
