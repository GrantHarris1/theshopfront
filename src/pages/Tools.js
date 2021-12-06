import React from 'react';
import { Container, Col, Row, Table, Button } from 'react-bootstrap';
const NumCheckouts = Math.floor(Math.random() * 100);


export default function Tools(props) {

    const mappedTools = props.tools.map((tool, index) => {
        return (
            
            <tr key={index}>
                <td>{tool.id}</td>
                <td>{tool.name}</td>
                <td>{tool.brand.name}</td>
                <td>{NumCheckouts}</td> {/* TODO: add number of checkouts, or whatever kind of data you want to show  */}
                <th> <Button variant="dark" className='rounded-pill'>Check this tool out</Button>{' '}</th>
            </tr>
            
        )
    })

    return (
        <div className='SI'>
            <br />
            <Container className='text-center'>
                <Row>
                    <Row >
                        <Col>
                            <Col sm={4} md={12}>
                                <Table responsive bordered className=' bg-white border-secondary border-rounded' >
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
