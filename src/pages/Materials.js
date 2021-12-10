
import React from 'react';
import { Container, Col, Row, Table, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NumLeft = Math.floor(Math.random() * 100);


export default function Materials(props) {
    const mappedMaterials = props.materials.map((material, index) => {
        return (

            <tr key={index}>
                <td>{material.id}</td>
                <td>{material.name}</td>
                <td>{material.type}</td>
                <td>{material.size.name}</td>
                <td>{NumLeft}</td> {/* TODO: add number of checkouts, or whatever kind of data you want to show  */}
                <th> <Button variant="dark" className='rounded-pill'>Add to Checkout</Button>{' '}</th>
            </tr>

        )
    })

    return (
        <div className='material'>
            <br />
            <Container fluid className="conduit tex-center">
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Card className=" conCard text-center shadow p-3 mb-5 bg-white rounded">
                            <Card.Body>
                                <Card.Title>Materials Available:</Card.Title>
                                <Card.Text>
                                    Here Is A List Of Our Current Materials Available.
                                </Card.Text>
                            </Card.Body>
                            <Table responsive bordered className=' bg-white border-secondary border-rounded' >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Size</th>
                                        <th>Available</th>
                                        <th>Checkout</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mappedMaterials}
                                </tbody>
                            </Table>
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
           
        </div>

    )
}