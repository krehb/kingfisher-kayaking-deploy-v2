import React, {useState, useEffect} from 'react';
import '../App.css';
import Calendar from '../Componets/calendar/index';

export default function BookingPage({ routeSelected, setKayaksLeft, value, kayaksLeft, setValue, back, booked, kayaksInStock, booked2, form, setKayaksLeftOther}){

    const [calendarData, setCalendarData] = useState(booked)
    const [OtherCalendarData, setOtherCalendarData] = useState(booked2)

    useEffect(() => {
      if(routeSelected === 'Sangamon (Half Route)'){
        setCalendarData(booked2)
        setOtherCalendarData(booked)
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
          otherCalendarDataList={OtherCalendarData}
          setKayaksLeft={setKayaksLeft}
          setKayaksLeftOther={setKayaksLeftOther}
          value={value} 
          onChange={setValue} 
          routeSelected={routeSelected}
          back={back} 
          booked={calendarData}
          kayaksInStock={kayaksInStock} 
          form={form}
           />
      </div>
  )
}