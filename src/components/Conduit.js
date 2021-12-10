import React from 'react'
import {Card, ListGroup, ListGroupItem, Container, Row, Col} from 'react-bootstrap';
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
      Here Is A List Of Our Current Conduit Sizes And Types Available.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>1/2" Sch. 40 PVC  </ListGroupItem>
    <ListGroupItem>3/4" Sch.40 PVC</ListGroupItem>
    <ListGroupItem>1" Sch. 40 PVC</ListGroupItem>
    <ListGroupItem>1.25" Sch. 40 PVC</ListGroupItem>
    <ListGroupItem>1.50" Sch. 40 PVC</ListGroupItem>
    <ListGroupItem>2" Sch. 40 PVC</ListGroupItem>
    <ListGroupItem>2.5" Sch. 40 PVC</ListGroupItem>
    <ListGroupItem>3" Sch. 40 PVC</ListGroupItem>
    <ListGroupItem>3.5" Sch. 40 PVC</ListGroupItem>
    <ListGroupItem>4" Sch. 40 PVC</ListGroupItem>
    <ListGroupItem>1/2" Sch. 80 PVC</ListGroupItem>
    <ListGroupItem>3/4" Sch.80 PVC</ListGroupItem>
    <ListGroupItem>1" Sch. 80 PVC</ListGroupItem>
    <ListGroupItem>1.25" Sch. 80 PVC</ListGroupItem>
    <ListGroupItem>1.50" Sch. 80 PVC</ListGroupItem>
    <ListGroupItem>2" Sch. 80 PVC</ListGroupItem>
    <ListGroupItem>2.5" Sch. 80 PVC</ListGroupItem>
    <ListGroupItem>3" Sch. 80 PVC</ListGroupItem>
    <ListGroupItem>3.5" Sch. 80 PVC</ListGroupItem>
    <ListGroupItem>4" Sch. 80 PVC</ListGroupItem>
    <ListGroupItem>1/2" EMT</ListGroupItem>
    <ListGroupItem>3/4" EMT</ListGroupItem>
    <ListGroupItem>1" EMT</ListGroupItem>
    <ListGroupItem>1.25" EMT</ListGroupItem>
    <ListGroupItem>1.50" EMT</ListGroupItem>
    <ListGroupItem>2" EMT</ListGroupItem>
    <ListGroupItem>2.5" EMT</ListGroupItem>
    <ListGroupItem>3" EMT</ListGroupItem>
    <ListGroupItem>3.5" EMT</ListGroupItem>
    <ListGroupItem>4" EMT</ListGroupItem>
    <ListGroupItem>1/2" RMC</ListGroupItem>
    <ListGroupItem>3" RMC </ListGroupItem>
    <ListGroupItem>3.5" RMC </ListGroupItem>
    <ListGroupItem>4" RMC </ListGroupItem>
  
    
  </ListGroup>
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
            
       
    )
}
