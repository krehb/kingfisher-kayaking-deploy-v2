import React, {useState} from 'react';
import '../App.css';
import { Col, Container, Row, Image } from 'react-bootstrap';
import SaltForkMap from '../Componets/rivers/salt-fork.jpg'
import Calendar from '../Componets/calendar/index';
import Weather from '../Componets/weather/weather';
import SelectionFrom from '../Componets/SelectionForm/SelectionForm';
import Paypal from '../Componets/Paypal/Paypal';
import PayForm from '../Componets/Paypal/payForm';

export default function SuccessPage({formData}){

  



  //whats rendered to the DOM
  return (
      <div className='RoutesList' >
        <div className='success' >
          Your Booking was Successful and an email was sent to your email!
        </div>
      </div>
  )
}