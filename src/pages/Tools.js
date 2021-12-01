import React from 'react';
import { Card, Button, Container, Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Tools(props) {

    const mappedTools = props.tools.map((tool, index) => {
        return (
            <tr key={index}>
                <td>{tool.id}</td>
                <td>{tool.name}</td>
                <td>{tool.brand.name}</td>
                <td>0</td> {/* TODO: add number of checkouts, or whatever kind of data you want to show  */}
                <th><button className="btn btn-regular ">check this tool out</button></th>
            </tr>
        )
    })

    return (
        <div className='SI'>
            <br />
            <Container className='text-center'>
                <Row>
                    <Col>
                        <Table bordered className=' bg-white'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Brand</th>
                                    <th>Type</th>
                                    <th>Num Checkouts</th>
                                    <th>checkout</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mappedTools}
                            </tbody>
                        </Table>
                        {/* <Card md='2'>
                            <Card.Img variant="top" src = './src/style/img/Tools.png'/> 
                            <Card.Body className='cBody text-light'>
                                <Card.Title><h1>Tools</h1></Card.Title>
                                <Card.Text>
                                    <h2>Benders</h2>
                                    <p>Filler</p>
                                    <br />
                                    <h2>Saws</h2>
                                    <p>Lorem</p>
                                    <br />
                                    <h2>Drills</h2>
                                    <p>Lorem</p>
                                    <br />
                                    <h2>Ladders</h2>
                                    <p>Lorem</p>
                                    <br />
                                </Card.Text>
                                <Button as={Link} to='/checkout' variant="light">Go to Checkout</Button>
                            </Card.Body>
                        </Card> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
