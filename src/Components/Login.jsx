import React, { useState } from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

  return (
    <Container>
        <h1>Login Form</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' value={formData.email} onChange={handleChange} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' name='password' value={formData.password} onChange={handleChange} required/>
            </Form.Group>  
            <Button variant='primary' type='submit'>Login</Button>   
            <p>Don't have an account? <Link to='/'>Signup</Link></p>       
        </Form>
    </Container>
  )
}

export default Login;