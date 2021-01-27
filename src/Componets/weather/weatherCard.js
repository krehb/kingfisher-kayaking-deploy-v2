import React, {useState, useEffect} from 'react';
import {  Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';


export default function WeatherDay  ({temp, weather, day, value}) {


    const [dayRendered, setDayRendered] = useState(null);
    const [tempRendered, setTempRendered] = useState(null);
    const [weatherRendered , setWeatherRendered] = useState(null);

    const [renderWeatherCard, setWeatherCard] = useState(true);


    useEffect(() => {
        weather.forEach(day => {
            //if weather is same as selected
            if (value.format('dddd') === day.date[0] ){
        
              //if weather is before the first 7 days
              let test = moment().add(7, 'days').calendar()
              if (value.isBefore(test, 'day')){
                setWeatherCard(true)
                setDayRendered(day.date);
                setTempRendered(day.temp);
                setWeatherRendered(day.weather);
              } else {
                setWeatherCard(false)
              }
            }
          });
    
    }, );


  let weatherIcon = null
  if (weatherRendered === 'Clear'){
    weatherIcon = (
        <Row>
            <Col>
                <FontAwesomeIcon icon="sun"  size="2x" />   
            </Col>
        </Row>)
  } else if (weatherRendered === 'Rain'){
    weatherIcon = (
        <Row>
            <Col>
                <FontAwesomeIcon icon="cloud-rain"  size="2x" />   
            </Col>
        </Row>)
  } else if (weatherRendered === 'Clouds') {
      weatherIcon = (
      <Row>
            <Col>
                <FontAwesomeIcon icon="cloud"  size="2x" />   
            </Col>
      </Row>)
  } else if (weatherRendered === 'Snow'){
    weatherIcon = (
        <Row>
              <Col>
                  <FontAwesomeIcon icon="snowflake"  size="2x" />   
              </Col>
        </Row>)
  }



  let weatherCardRendered = null
  if (renderWeatherCard){
      weatherCardRendered = (
        <Card >
            <Card.Body className='card'>
                <Card.Text>
                    <h6>{value.format('dddd, Do')}</h6>
                    <h6>{tempRendered} &#8457;</h6>
                    {/* <h6>{weather}</h6> */}
                    {weatherIcon}
                </Card.Text>
            </Card.Body>
        </Card>
      )
  } else {
      weatherCardRendered = null
  }










  return (
    <Col sm >
        {weatherCardRendered}
    </Col>  
  );
};

// export default weatherDay;