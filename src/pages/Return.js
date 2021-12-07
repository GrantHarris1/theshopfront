import React from 'react';
import {Form, Button, Container, Row, Col,Card } from 'react-bootstrap';
export default function Return() {
    return (
        <div className='return'>
            <Container className='text-dark'>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter Name" />
                                <Form.Text className="text-muted">
                                    Please enter your full name.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Job Number</Form.Label>
                                <Form.Control type="text" placeholder="Job#" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Job Location</Form.Label>
                                <Form.Control type="text" placeholder="Job Address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Tool ID</Form.Label>
                                <Form.Control type="integer" placeholder="Tool ID #" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check for Return" />
                            </Form.Group>
                            <Button variant="light" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Row>
                <Col>
                
                
                
                
                </Col>
            </Row>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
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
        <br />
        </div>
    )
}
