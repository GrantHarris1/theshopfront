import React from 'react';
import { Container, Col, Row, Table, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NumCheckouts = Math.floor(Math.random() * 100);


export default function Tools(props) {
    let toolCheckout = (e) => {
        props.toolCheckout(e.target.id)
    };

    const mappedTools = props.tools.map((tool, index) => {
        return (

            <tr key={index}>
                <td>{tool.id}</td>
                <td>{tool.name}</td>
                <td>{tool.brand.name}</td>
                <td>{NumCheckouts}</td> {/* TODO: add number of checkouts, or whatever kind of data you want to show  */}
                <th> <Button id={tool.id} variant='secondary' className='bi bi-bag-plus ' onClick={toolCheckout} ></Button>{' '}</th>
            </tr>

        )
    })

    return (
        <div>
            <br />
            <Container fluid className="conduit text-center">
                <Row className="justify-content-md-center">
                    <Col >
                        <Card className=" conCard text-center shadow p-3 mb-5 bg-white rounded">
                            <Card.Body>
                                <Card.Title>Tools Available:</Card.Title>
                                <Card.Text>
                                    Here Is A List Of Our Current Tools Available.
                                </Card.Text>
                            </Card.Body>
                            <Table responsive bordered className=' bg-white border-secondary border-rounded' >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Type</th>
                                        <th>Brand</th>
                                        <th>Checkouts</th>
                                        <th>Add to Cart</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {mappedTools}
                                </tbody>
                            </Table>
                            <Button id="top-btn" variant="secondary" type="submit" data-tf-popup="u1sHmRet">
                                Quick Checkout Form
                            </Button>
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
