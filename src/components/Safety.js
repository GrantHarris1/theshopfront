import React from 'react';
import { Card, Table, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Safety() {
    return (

        <Container fluid className="conduit">
            < br />
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card className=" conCard text-center shadow p-3 mb-5 bg-white rounded">
                        <Card.Img variant="top" src='https://safetyculture.com/wp-content/media/2020/10/PPE-Personal-Protective-Equipment-1024x768.jpg' />
                        <Card.Body>
                            <Card.Title>Safety Equipment Available:</Card.Title>
                            <Card.Text>
                                Here Is A List Of The Safety Equipment Available
                                </Card.Text>
                        </Card.Body>
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Type</th>
                                    <th>Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>ANSI Safety Glasses (clear)</td>
                                    <td>One</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>ANSI Safety Glasses (tinted)</td>
                                    <td>One</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Hearing Protection</td>
                                    <td>Many</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Class E Hard Hats</td>
                                    <td>One</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Level 4 Gloves</td>
                                    <td>SM</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Level 4 Gloves</td>
                                    <td>MD</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Level 4 Gloves</td>
                                    <td>LG</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Level 4 Gloves</td>
                                    <td>XL</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>High Viz Vest</td>
                                    <td>SM</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>High Viz Vest</td>
                                    <td>MD</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>High Viz Vest</td>
                                    <td>LG</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>High Viz Vest</td>
                                    <td>XL</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>Hot Work Permit</td>
                                    <td>N/A</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>Street Cones</td>
                                    <td>Standard</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>Workers Ahead Sign</td>
                                    <td>Standard</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>Fire Extinguisher (ABC)</td>
                                    <td>Standard</td>
                                </tr>
                            </tbody>
                        </Table>

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
