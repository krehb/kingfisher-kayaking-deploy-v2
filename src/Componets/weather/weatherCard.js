import React from 'react';
import {  Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const weatherDay = ({temp, weather, day}) => {

  let weatherIcon = null
  if (weather === 'Clear'){
    weatherIcon = (
        <Row>
            <Col>
                <FontAwesomeIcon icon="sun"  size="2x" />   
            </Col>
            <Col>
                <FontAwesomeIcon icon="smile"  size="2x" />   
            </Col>
        </Row>)
  } else if (weather === 'Rain'){
    weatherIcon = (
        <Row>
            <Col>
                <FontAwesomeIcon icon="cloud-rain"  size="2x" />   
            </Col>
            <Col>
                <FontAwesomeIcon icon="meh"  size="2x" />   
            </Col>
        </Row>)
  } else {
      weatherIcon = (
      <Row>
            <Col>
                <FontAwesomeIcon icon="cloud"  size="2x" />   
            </Col>
            <Col>
                <FontAwesomeIcon icon="smile"  size="2x" />   
            </Col>
      </Row>)
  }




  return (
    <Col sm >
        <Card >
            <Card.Body className="card">
                <Card.Text>
                    <h6>{day}</h6>
                    <h6>{temp} &#8457;</h6>
                    {/* <h6>{weather}</h6> */}
                    {weatherIcon}
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>  
  );
};

export default weatherDay;