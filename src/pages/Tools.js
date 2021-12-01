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
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
