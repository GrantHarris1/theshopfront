import React from 'react'
import { Card, Container, Row, Col, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function Conduit() {
    return (

        <Container fluid className="conduit">
            < br />
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card className=" conCard text-center shadow p-3 mb-5 bg-white rounded">
                        <Card.Img variant="top" src='https://image.made-in-china.com/44f3j00pHGTmNIhHirS/Galvanized-Conduit-IMC-Thin-Wall-Steel-Pipe-Price.jpg' />
                        <Card.Body>
                            <Card.Title>Conduit Available:</Card.Title>
                            <Card.Text>
                                Here Is A List Of The Conduit sizes and Types Available
                                </Card.Text>
                        </Card.Body>
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Size</th>
                                    <th>Type</th>
                                    <th>Sch.</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1/2"</td>
                                    <td>PVC</td>
                                    <td>40</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>3/4"</td>
                                    <td>PVC</td>
                                    <td>40</td>

                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>1"</td>
                                    <td>PVC</td>
                                    <td>40</td>

                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>1/2"</td>
                                    <td>PVC</td>
                                    <td>80</td>

                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>3/4"</td>
                                    <td>PVC</td>
                                    <td>80</td>

                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>1"</td>
                                    <td>PVC</td>
                                    <td>80</td>

                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>1/2"</td>
                                    <td>EMT</td>


                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>3/4"</td>
                                    <td>EMT</td>


                                </tr>

                                <tr>
                                    <td>9</td>
                                    <td>1"</td>
                                    <td>EMT</td>


                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>2"</td>
                                    <td>EMT</td>


                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>4"</td>
                                    <td>EMT</td>


                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>4"</td>
                                    <td>EMT</td>


                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>1/2"</td>
                                    <td>RMC</td>


                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>3/4"</td>
                                    <td>RMC</td>


                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>1"</td>
                                    <td>RMC</td>


                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>2"</td>
                                    <td>RMC</td>


                                </tr>
                                <tr>
                                    <td>17</td>
                                    <td>4"</td>
                                    <td>RMC</td>


                                </tr>


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
                            <Card.Link href="mailto: grant.harris.web@gmail.com"><i className="bi bi-envelope text-danger"></i></Card.Link>
                            <Card.Link href="tel:8597857869"><i class="bi bi-telephone text-danger"></i></Card.Link>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>


    )
}
