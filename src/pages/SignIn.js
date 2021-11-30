import React, { useState } from 'react'
import { Card, Button, Col, Row, Container, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function SignIn(props) {
    const [inputs, setInputs] = useState({});
    const handleChange = e => {
        setInputs(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }
   const saveToLocalStorage = (newToken) => {
        localStorage.setItem('token', newToken);
    }
    const navigate = useNavigate()
    const handleSubmit = e => {
        const data = {
            grant_type: 'password',
            client_id: 2,
            client_secret: 'dnrWrQupuOAweX2339Nwaa2URfDK3CFrzcBbAvVR',
            username: inputs.username,
            password: inputs.password,
            scope: ''
        }
        const headers = {
            Accept: 'application/json',

        }
        axios({
            method: 'post',
            url: 'https://the_shop_backend-grantharriselectric334935.codeanyapp.com/oauth/token',
            data,
            headers
        }).then(function (response) {
            console.log(response);
            saveToLocalStorage(response.data.access_token)
            props.setToken(response.data.access_token)
            navigate('/home')
            // save token in localstorage
            // save token in state on app
            // redirect to the page you want to visit
        });;
    }
    return (
        <div className='SI'>
            <br />
            <Container className='Con text-center'>
                <Row md={2} className="justify-content-center align-items-center">
                    <Col>
                        <Card>
                            <Card.Header>Sign In To Request Tools or Materials</Card.Header>
                            <Card.Body className='cBody' >
                                <Card.Title>Enter Employee Email to Log In.</Card.Title>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
                                    <FormControl
                                        name='username'
                                        value={inputs.username || ''}
                                        onChange={handleChange}
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">Password</InputGroup.Text>
                                    <FormControl
                                        name='password'
                                        value={inputs.password || ''}
                                        onChange={handleChange}
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type='password'
                                    />
                                </InputGroup>
                                <Button variant="light"
                                    onClick={handleSubmit}
                                >Click Here To Sign In</Button>{''}
                            </Card.Body>
                            <Card.Footer className="text-muted">Thank you.</Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}
