import React, {useState} from 'react';
import '../App.css';
import { Col, Container, Row, Image } from 'react-bootstrap';
import SaltForkMap from '../Componets/rivers/salt-fork.jpg'
import Calendar from '../Componets/calendar/index';
import Weather from '../Componets/weather/weather';
import SelectionFrom from '../Componets/SelectionForm/SelectionForm';
import Paypal from '../Componets/Paypal/Paypal';
import PayForm from '../Componets/Paypal/payForm';

export default function BookingPage({ routeSelected, value, setValue, back, booked, kayaksInStock,  form, kayaks, formData, setFormData}){

  const [view, setViewing] = useState(true);
  const [formView, setFormView] = useState(true);



  let renderBooking = null

  if (view) {
    renderBooking = (
      <div className='RoutesList'>
        <Calendar 
          value={value} 
          onChange={setValue} 
          routeSelected={routeSelected}
          back={back} 
          booked={booked} 
          kayaksInStock={kayaksInStock} 
          form={form} 
          setViewing={setViewing} />
      </div>
    )
  } else {

    if (formView){
      renderBooking = (
        <div className='RoutesList'>
          <SelectionFrom
              setFormView={setFormView}
              setViewing={setViewing}
              route={routeSelected}
              value={value}
              kayaks={kayaks}
              kayaksInStock={kayaksInStock}
              setFormData={setFormData}
          />
        </div>
      )
    } else {
      renderBooking = (
        <div className='RoutesList'>
        <PayForm
            setFormView={setFormView}
            setViewing={setViewing}
            route={routeSelected}
            value={value}
            kayaks={kayaks}
            kayaksInStock={kayaksInStock}
            formData={formData}
        />
        </div>
      )
    }

  }



  //whats rendered to the DOM
  return (
      <div >
        {renderBooking}
      </div>
  )
}