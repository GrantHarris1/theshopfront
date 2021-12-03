import React from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';



export default function Brands(props) {
    const mappedBrands = props.brands.map((brand, index) => {
        return (
            <tr key={index}>
                <td>{brand.id}</td>
                <td>{brand.name}</td>
                <td>{brand.tool}</td>
                <td>0</td> {/* TODO: add number of checkouts, or whatever kind of data you want to show  */}
                <th> <Button variant="dark">Go to Brand</Button>{' '}</th>
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
                                    <th>Num Tools</th>
                                    <th>Checkout</th>
                                    <th>Go to Brand</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mappedBrands}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            
            
                  </div>
    )
}
