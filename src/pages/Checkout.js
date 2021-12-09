import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Table, Card } from 'react-bootstrap';
import axios from 'axios';

export var cart = ['Dewalt'];
export default function Checkout(props) {

    var token = props.getToken;
    var checkouts = props.NumCheckouts

    const addRemoveTool = e => {
        // e change event

        // look in local checkOutTools array 

        // if not in, add the item
        // if is in, remove the item
    };

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
                        <Table>
                            <th>

                                <tr>
                                    <td>
                                        #
                                </td>
                                    <td>
                                        tool
                                </td>
                                </tr>
                            </th>
                            <tbody>
                                {cart.map((item, index) => (<tr key={index}><td>{index}</td>
                                <td>{item}</td>
                                </tr>))}

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


                        <Table responsive className=' bg-white border-secondary border-rounded'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Materials</th>
                                    <th>Size</th>
                                    <th># Ordered</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>hex nuts</td>
                                    <td>1/4 x 20</td>
                                    <td>2000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>lock washers</td>
                                    <td>1/4 inch</td>
                                    <td>2000</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>EMT</td>
                                    <td>1 inch</td>
                                    <td>400 feet</td>
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

