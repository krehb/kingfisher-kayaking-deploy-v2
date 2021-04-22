import React, {useState, useEffect} from 'react';
import { Row, Form, Col, Container, Button } from 'react-bootstrap';

import List from './list'
import AddGuide from './addGuide'



export default function Admin({ booked, booked2, bookingId}){

    const [password, setPassword] = useState(false)
    const [text, setText] = useState('')

    const passwordCode = `bigblue`

    const submittPass = (e) => {
        e.preventDefault()

        if(text === passwordCode){
            setPassword(true)
        }

    }

    let renderData = null;

    if(password){
        renderData = (
            <div>
                <AddGuide  bookingId={bookingId} />    
                <br></br>
                <List booked={booked} booked2={booked2} />
            </div>
        )
    } else {
        renderData = (
            <div>
                <Container style={{display: 'flex', flexDirection: 'column'}}>
                <br></br>
                <Form onSubmit={submittPass} >
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm>
                        Admin
                        </Form.Label>
                    </Form.Group>

                    <Form.Group as={Row} >
                        <Form.Label column sm="2">
                        Password
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control onChange={(e)=> setText(e.target.value)} type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Col><Button onClick={submittPass} variant="primary">Sign In</Button></Col>
                </Form>
                <br></br>
                </Container>
            </div>
        )
    }


  return (
      <div >
        {renderData}
      </div>
  )
}