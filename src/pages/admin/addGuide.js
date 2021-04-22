import React, {useState, useEffect} from 'react';
import { Row, Form, Col, Container, Button } from 'react-bootstrap';
import firebase from 'firebase';


export default function AddGuide({ bookingId}){


  const database = firebase.database();
  const ref = database.ref('bookings');
  const refSaltFork = database.ref('bookings-salt-fork');
  const refSettings = database.ref('settings');


  const [routeSelected, setRoute] = useState('Both')
  const [date, setDate] = useState('')


  const submitHandler = () => {

    console.log(bookingId)

    refSettings.set({
        // bookingId: formData.bookingId,
        bookingCount: bookingId.bookingCount,
        kayakStock: bookingId.kayakStock,
        waterLevelLimit: bookingId.waterLevelLimit,
        blockBooking: false,
    })

    let min = Math.ceil(1);
    let max = Math.floor(10000);
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);


    

    let passingDataSalt = {
      name: 'guide1706',
      date: date,
      route: 'Salt Fork',
      numOfKayaks: 1,
      bookingid: Math.floor(Math.random() * (max - min + 1)) + min,
    }

    let passingDataSangamon = {
      name: 'guide1706',
      date: date,
      route: 'Sangamon',
      numOfKayaks: 1,
      bookingid: Math.floor(Math.random() * (max - min + 1)) + min,
    }



    // pushing data to database
    if(routeSelected === 'Salt Fork'){
      console.log('only Salt Fork')
      refSaltFork.push(passingDataSalt)

    } else if (routeSelected === 'Sangamon'){
      console.log('only Sangamon')
      ref.push(passingDataSangamon);
    } else {
      refSaltFork.push(passingDataSalt)
      ref.push(passingDataSangamon);

      console.log('both')
    }
  }


  return (
      <div >


        <Container >

            <div><h3>ADD Guide!!</h3></div>

            <input type='date' onChange={(e) => setDate(e.target.value)} />
            <Form.Control onChange={(e)=> setRoute(e.target.value)} style={{width: '200px'}} as="select">
                <option>Both</option>
                <option >Salt Fork</option>
                <option>Sangamon</option>
            </Form.Control>
            <div style={{marginTop: '10px'}} onClick={submitHandler} ><Button>ADD</Button></div>

        </Container>

      </div>
  )
}