import React from 'react';
import { Table, Container, Col, Row } from 'react-bootstrap';


export default function Material() {
    return (
        <div>
            <br />
             <Container className='text-center'>
                <Row>
                    <Col>
                    <Table bordered className=' bg-white'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Type</th>
                                    <th>Size</th>
                                    <th>Num Checkouts</th>
                                    <th>Checkout</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
