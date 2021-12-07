import React from 'react';
import { Container, Col, Row, Table, Button, Card } from 'react-bootstrap';
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
            <Container className='text-center'>
                <Row>
                    <Row >
                        <Col>
                            <Col sm={4} md={12}>
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
                            </Col>
                        </Col>
                    </Row>
                </Row>
            </Container>
            <Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
        </div>

    )
}
