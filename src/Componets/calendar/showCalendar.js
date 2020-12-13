import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Calendar from './index';
import Weather from '../weather/weather'


function showCalendar({showCalendar, form, value, setValue, back, booked, kayaksInStock, guide}) {
    
    let calendar = null
    if (showCalendar){
        calendar = (
        <Container fluid>
            <Row>
                <Col className='ref-header' >
                    <br></br>
                    <h3>Pick A Date!</h3>
                    <FontAwesomeIcon icon="compass"   size="1x" /><span> = Trip with Guide</span>
                    <br></br>
                    <span className='kayaks-0 ref'> kayaks = 0 </span>
                    <span className='kayaks-2 ref'> kayaks > 2 </span>
                    <span className='kayaks-4 ref'>kayaks > 4</span>
                    <span className='kayaks-6 ref'>kayaks > 6</span>
                    <span className='kayaks-8 ref'>kayaks > 8</span>
                    <br></br>
                </Col>
            </Row>
            {/* <Row>
              <Col><p className='kayaks-0'>kayaks = 0</p></Col>
              <Col><p className='kayaks-2'>kayaks > 2</p></Col>
              <Col><p className='kayaks-4'>kayaks > 4</p></Col>
              <Col><p className='kayaks-6'>kayaks > 6</p></Col>
              <Col><p className='kayaks-8'>kayaks > 8</p></Col>
            </Row> */}

            <Calendar form={form} back={back} value={value} onChange={setValue} guide={guide} booked={booked} kayaksInStock={kayaksInStock} />
            <br></br>
            <Weather/>
        </Container>)
    } else { calendar = null };
    

    
    return (
        <div>
            {calendar}
        </div>
    )
}

export default showCalendar;