import React from 'react';
import { Container, Col, Row, Table, Button, Card } from 'react-bootstrap';
import {cart} from './Checkout'
const NumCheckouts = Math.floor(Math.random() * 100);


export default function Tools(props) {

    const mappedTools = props.tools.map((tool, index) => {
        return (
            
            <tr key={index}>
                <td>{tool.id}</td>
                <td>{tool.name}</td>
                <td>{tool.brand.name}</td>
                <td>{NumCheckouts}</td> {/* TODO: add number of checkouts, or whatever kind of data you want to show  */}
                <th> <Button variant="dark" className='rounded-pill' onClick={()=>console.log("asjdflasjdflaksjdf")} >Check this tool out</Button>{' '}</th>
            </tr>
            
        )
    })

    return (
        <div className='tools'>
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
                                            <th>Type</th>
                                            <th>Brand</th>
                                            <th>Checkouts</th>
                                            <th>Checkout</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mappedTools}
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
          <Button variant="primary" >Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
      </div>
    )
}
