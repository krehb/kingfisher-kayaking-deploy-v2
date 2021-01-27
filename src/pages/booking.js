import React, {useState} from 'react';
import '../App.css';
import Calendar from '../Componets/calendar/index';

export default function BookingPage({ routeSelected, value, setValue, back, booked, kayaksInStock,  form}){



  //whats rendered to the DOM
  return (
      <div className='RoutesList'>
        <Calendar 
          value={value} 
          onChange={setValue} 
          routeSelected={routeSelected}
          back={back} 
          booked={booked} 
          kayaksInStock={kayaksInStock} 
          form={form} />
      </div>
  )
}