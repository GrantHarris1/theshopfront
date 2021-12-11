import React from 'react';
import { Container, Row, Col, Button, Table, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NumTools = Math.floor(Math.random() * 100);
const NumChecks = Math.floor(Math.random() * 100);


export default function Brands(props) {
    const mappedBrands = props.brands.map((brand, index) => {

        return (
            <tr key={index}>
                <td>{brand.id}</td>
                <td>{brand.name}</td>
                <td>{NumTools}</td>
                <td>{NumChecks}</td> {/* TODO: add number of checkouts, or whatever kind of data you want to show  */}
                <th> <Button variant= 'secondary' className='rounded-pill'>Go to Brand</Button>{' '}</th>
            </tr>
        )
    })

    return (
        <div className='brands'>
            <br />
            <Container fluid className="conduit text-center">
                <Row className="justify-content-md-center">
                    <Col>
                        <Card className=" conCard text-center shadow p-3 mb-5 bg-white rounded">
                            <Card.Body>
                                <Card.Title>Brands Available:</Card.Title>
                                <Card.Text>
                                    Here Is A List Of Our Brands Currently Available.
                                </Card.Text>
                            </Card.Body>
                            <Table responsive bordered className=' bg-white border-secondary'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Brand</th>
                                        <th>Num Tools</th>
                                        <th>Checkouts</th>
                                        <th>Go to Brand</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mappedBrands}
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
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
            </Container>


        </div>
    )
}
