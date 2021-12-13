import React from 'react';
import { Card, Table, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Fittings() {
    return (
        <Container fluid className="conduit">
            < br />
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card className=" conCard text-center shadow p-3 mb-5 bg-white rounded">
                        <Card.Img variant="top" src='https://methodstatement.store/wp-content/uploads/2021/04/Gl-Conduits-Accessories-Installation-for-Electrical-and-ELV-Service.jpg' />
                        <Card.Body>
                            <Card.Title>Available Fittings:</Card.Title>
                            <Card.Text>
                                Here Is A List Of The Fitiings and Sizes Available
                                </Card.Text>
                        </Card.Body>
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Size</th>
                                    <th>Type</th>
                                    <th>Material</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1/2"</td>
                                    <td>MA</td>
                                    <td>PVC</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>3/4"</td>
                                    <td>MA</td>
                                    <td>PVC</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>1"</td>
                                    <td>FA</td>
                                    <td>PVC</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>2"</td>
                                    <td>MA</td>
                                    <td>PVC</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>3"</td>
                                    <td>MA</td>
                                    <td>PVC</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>4"</td>
                                    <td>MA</td>
                                    <td>PVC</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>1/2"</td>
                                    <td>FA</td>
                                    <td>PVC</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>3/4"</td>
                                    <td>FA</td>
                                    <td>PVC</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>1"</td>
                                    <td>MA</td>
                                    <td>PVC</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>1/2"</td>
                                    <td>LB</td>
                                    <td>Cast</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>3/4"</td>
                                    <td>LB</td>
                                    <td>Cast</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>1"</td>
                                    <td>LB</td>
                                    <td>Cast</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>2"</td>
                                    <td>LB</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>3"</td>
                                    <td>LB</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>4"</td>
                                    <td>LB</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>1/2"</td>
                                    <td>LL</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>17</td>
                                    <td>3/4"</td>
                                    <td>LL</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td>1"</td>
                                    <td>LL</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td>2"</td>
                                    <td>LL</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>3"</td>
                                    <td>LL</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>21</td>
                                    <td>4"</td>
                                    <td>LL</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>22</td>
                                    <td>1/2"</td>
                                    <td>LR</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>23</td>
                                    <td>3/4"</td>
                                    <td>LR</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>24</td>
                                    <td>1"</td>
                                    <td>LR</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>25</td>
                                    <td>2"</td>
                                    <td>LR</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>26</td>
                                    <td>3"</td>
                                    <td>LR</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>27</td>
                                    <td>4"</td>
                                    <td>LR</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>28</td>
                                    <td>1/2"</td>
                                    <td>Coupling</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>29</td>
                                    <td>3/4"</td>
                                    <td>Coupling</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>30</td>
                                    <td>1"</td>
                                    <td>Coupling</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>31</td>
                                    <td>1.25"</td>
                                    <td>Coupling</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>32</td>
                                    <td>1.50"</td>
                                    <td>Coupling</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>33</td>
                                    <td>2"</td>
                                    <td>Coupling</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>34</td>
                                    <td>3"</td>
                                    <td>Coupling</td>
                                    <td>Rigid</td>
                                </tr>
                                <tr>
                                    <td>35</td>
                                    <td>4"</td>
                                    <td>Coupling</td>
                                    <td>Rigid</td>
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
