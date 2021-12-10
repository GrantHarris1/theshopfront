import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Table, Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

export var cart = ['Dewalt'];
export default function Checkout(props) {

    var token = props.getToken;
    let toolsInCart = props.toolsInCart;
    console.log(toolsInCart);

    const checkOutToolsHandler = e => {
        // prevent default submit
        e.preventDefault();

        // call axios and send checkOutTools array
        const data = {
            tools: props.toolsInCart // array of ids - [3, 56, 99]
        }
        const headers = {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
        axios({
            method: 'post',
            url: 'https://the_shop_backend-grantharriselectric334935.codeanyapp.com/api/v1/checkout',
            data,
            headers
        }).then(function (response) {
            // show alert success
            // refresh the page

            // set items checked out for this user
        });;
    }

    return (
        <div className='check'>
            <br />
            <Container fluid className="conduit">
                <Row className="justify-content-md-center">
                    <Col lg-9>
                        <Card className=" conCard text-center shadow p-3 mb-5 bg-white rounded">
                            <Card.Body>
                                <Card.Title>Items In Your Current Cart:</Card.Title>
                            </Card.Body>
                            <Table responsive className=' bg-white border-secondary border-rounded'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tools</th>
                                        <th>Brand</th>
                                        <th># ordered</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {toolsInCart.map((item, index) => (
                                        <tr key={index}><td>{index}</td>
                                            <td>{item}</td>
                                            <td>{item}</td>
                                            <td>{item.brand}</td>
                                            <td>1</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </Table>
                            <Table responsive className=' bg-white border-secondary border-rounded'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tools</th>
                                        <th>Brand</th>
                                        <th># ordered</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>8' Ladder</td>
                                        <td>Louisville</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>1 inch Hand Bender</td>
                                        <td>Greenlee</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Electric Bandsaw</td>
                                        <td>Bosch</td>
                                        <td>2</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <hr />
            <br />
            <br />
            <Container fluid className="conduit">
                <Row className="justify-content-md-center">
                    <Col lg-9>
                    <Card className=" conCard text-center shadow p-3 mb-5 bg-white rounded">
                        <Form onSubmit={checkOutToolsHandler}>
                            <Button id="top-btn" variant="secondary" type="submit">
                                Submit
                            </Button>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter Name" />
                                <Form.Text className="text-muted">
                                    Please enter your fullname.
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
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button id="bottom-btn" variant="secondary" type="submit">
                                Submit
                            </Button>
                        </Form>
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
                    </Col>
                </Row>
            </Container>
            <Card className="text-center">
       
            </Card>
        </div>
    )
}

