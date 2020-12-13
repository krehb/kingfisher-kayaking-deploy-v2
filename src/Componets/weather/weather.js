import React, { useState, useEffect } from 'react';
import Day from './weatherCard';
import { Col, Container, Row } from 'react-bootstrap';
import moment from 'moment';
import './weather.css'

const url7day = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.1105556&lon=-88.2072222&units=imperial&appid=4ccd9d42e589371f8ea88443f33536f9'

const url = 'http://api.openweathermap.org/data/2.5/forecast?q=urbana&appid=4ccd9d42e589371f8ea88443f33536f9&units=imperial'


const Chart = () => {
    
  const [day1temp, setday1temp] = useState(40);
  const [day2temp, setday2temp] = useState(40);
  const [day3temp, setday3temp] = useState(40);
  const [day4temp, setday4temp] = useState(40);
  const [day5temp, setday5temp] = useState(40);
  const [day6temp, setday6temp] = useState(40);
  const [day7temp, setday7temp] = useState(40);
  
  const [day1Weather, setDay1Weather] = useState('clearz')
  const [day2Weather, setDay2Weather] = useState('clearz')
  const [day3Weather, setDay3Weather] = useState('clearz')
  const [day4Weather, setDay4Weather] = useState('clearz')
  const [day5Weather, setDay5Weather] = useState('clearz')
  const [day6Weather, setDay6Weather] = useState('clearz')
  const [day7Weather, setDay7Weather] = useState('clearz')


  const now = moment();
  const today = useState(now.format('dddd'))
  const tomorrow = useState(now.add(1, 'days').format('dddd'))
  const twoDaysAway  = useState(now.add(1, 'days').format('dddd'))
  const threeDaysAway  = useState(now.add(1, 'days').format('dddd'))
  const fourDaysAway  = useState(now.add(1, 'days').format('dddd'))
  const fiveDaysAway  = useState(now.add(1, 'days').format('dddd'))
  const sixDaysAway  = useState(now.add(1, 'days').format('dddd'))

  const weather = [
      {date: today, temp: day1temp, weather: day1Weather},
      {date: tomorrow, temp: day2temp, weather: day2Weather},
      {date: twoDaysAway, temp: day3temp, weather: day3Weather},
      {date: threeDaysAway, temp: day4temp, weather: day4Weather},
      {date: fourDaysAway, temp: day5temp, weather: day5Weather},
      {date: fiveDaysAway, temp: day6temp, weather: day6Weather},
      {date: sixDaysAway, temp: day7temp, weather: day7Weather}
    ]


  useEffect(() => {
    //fetching data && rendering chart
    async function get() {

        const response = await fetch(url7day);
        const data = await response.json();
        
        setday1temp(data.daily[0].temp.day)
        setday2temp(data.daily[1].temp.day)
        setday3temp(data.daily[2].temp.day)
        setday4temp(data.daily[3].temp.day)
        setday5temp(data.daily[4].temp.day)
        setday6temp(data.daily[5].temp.day)
        setday7temp(data.daily[6].temp.day)
       
        setDay1Weather(data.daily[0].weather[0].main)
        setDay2Weather(data.daily[1].weather[0].main)
        setDay3Weather(data.daily[2].weather[0].main)
        setDay4Weather(data.daily[3].weather[0].main)
        setDay5Weather(data.daily[4].weather[0].main)
        setDay6Weather(data.daily[5].weather[0].main)
        setDay7Weather(data.daily[6].weather[0].main)


    }
    get();

  }, []);




  return (
    <Container fluid>
        <Row>
            {weather.map(day =>{
                return <Day temp={day.temp} weather={day.weather} day={day.date}  />
            })}
        </Row>
    </Container>
  );
};

export default Chart;