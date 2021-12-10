import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Table, Card } from 'react-bootstrap';
import axios from 'axios';

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
            <Container>
                <Row>
                    <Col>
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


                        
                    </Col>
                </Row>
            </Container>
            <hr />
            <br />
            <br />
            <Container className=''>
                <Row>
                    <Col>
                        <Form onSubmit={checkOutToolsHandler}>
                            <Button id="top-btn" variant="light" type="submit">
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
                            <Button id="bottom-btn" variant="light" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Card className="text-center">
                <Card.Header>Need Help? <a href="tel:8597857869">Click here to call the shop.</a> </Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    )
}

