import React, {useState, useEffect} from 'react';
import { Row, Form, Col, Container, Button } from 'react-bootstrap';

import List from './list'
import AddGuide from './addGuide'
import BlockDay from './blockDay';
import Calendar from './calendar';

export default function Admin({ booked, booked2, bookingId, value, setKayaksLeft, routeSelected, back, calendarData, kayaksInStock, form, setValue, kayaksLeft}){

    const [password, setPassword] = useState(false)
    const [text, setText] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0) 
    },[] )

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
                <Container>
                    <Row>
                        <Col>
                            <AddGuide  bookingId={bookingId} /> 
                        </Col> 
                        <Col>
                            <BlockDay  bookingId={bookingId}/>
                        </Col>
                    </Row>
                </Container>

                <br></br>
                <List booked={booked} booked2={booked2} />

                <br>
                </br>
                <Calendar 
                    kayaksLeft={kayaksLeft}
                    setKayaksLeft={setKayaksLeft}
                    value={value} 
                    onChange={setValue} 
                    routeSelected={routeSelected}
                    back={back} 
                    booked2={booked2}
                    routeSelected={'Sangamon'}
                    // booked={booked}
                    calendarData={booked}
                    kayaksInStock={kayaksInStock} 
                    form={form}
                 />
                <Calendar 
                    kayaksLeft={kayaksLeft}
                    setKayaksLeft={setKayaksLeft}
                    value={value} 
                    onChange={setValue} 
                    routeSelected={'Sangamon Half Route'}
                    back={back} 
                    calendarData={booked2}
                    kayaksInStock={kayaksInStock} 
                    form={form}
                 />
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