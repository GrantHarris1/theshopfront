import React from 'react';
import { Container, Col, Row, Table, Button } from 'react-bootstrap';


export default function Tools(props) {

    const mappedTools = props.tools.map((tool, index) => {
        return (
            <tr key={index}>
                <td>{tool.id}</td>
                <td>{tool.name}</td>
                <td>{tool.brand.name}</td>
                <td>0</td> {/* TODO: add number of checkouts, or whatever kind of data you want to show  */}
                <th> <Button variant="dark">Check this tool out</Button>{' '}</th>
            </tr>
        )
    })

    return (
        <div className='SI'>
            <br />
            <Container className='text-center'>
                <Row>
                    <Row className='text-center'>
                        <Col>
                            <Col sm={4} md={12}>
                                <Table responsive className=' bg-white'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Type</th>
                                            <th>Brand</th>
                                            <th>Checkouts</th>
                                            <th>Checkout</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mappedTools}
                                    </tbody>
                                </Table>
                            </Col>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}
