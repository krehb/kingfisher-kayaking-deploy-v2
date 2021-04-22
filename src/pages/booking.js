import React, {useState, useEffect} from 'react';
import '../App.css';
import Calendar from '../Componets/calendar/index';

export default function BookingPage({ routeSelected, setKayaksLeft, value, kayaksLeft, setValue, back, booked, kayaksInStock, booked2, form, routesList}){

    const [calendarData, setCalendarData] = useState(booked)

    useEffect(() => {
      if(routeSelected === 'Sangamon (Half Route)'){
        setCalendarData(booked2)
      }
    });
    useEffect(() => {
      window.scroll(0,100)
    },[]);

  //whats rendered to the DOM
  return (
      <div className='RoutesList'>
        <Calendar 
          kayaksLeft={kayaksLeft}
          setKayaksLeft={setKayaksLeft}
          value={value} 
          onChange={setValue} 
          routeSelected={routeSelected}
          back={back} 
          booked={calendarData}
          kayaksInStock={kayaksInStock} 
          form={form} />
      </div>
  )
}