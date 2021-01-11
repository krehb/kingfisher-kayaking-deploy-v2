import React, {useEffect} from 'react';
import {  Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';


export default function WeatherDay  ({temp, weather, day, value}) {




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


  //dynamic styling for weather day selected
  let weatherDaySelect = 'card'
  if (value.format('dddd') === day[0] ){

    let test = moment().add(7, 'days').calendar()

    if (value.isBefore(test, 'day')){
        weatherDaySelect = 'card weather-day-select'
    }
    

  } else {
      weatherDaySelect = 'card'
  }




  return (
    <Col sm >
        <Card >
            <Card.Body className={weatherDaySelect}>
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

// export default weatherDay;