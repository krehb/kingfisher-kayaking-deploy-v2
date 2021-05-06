import React, {useState, useEffect} from 'react';
import { Row, Form, Col, Container, Button } from 'react-bootstrap';
import firebase from 'firebase';


export default function BlockDay({bookingId}) {

    const database = firebase.database();
    const ref = database.ref('bookings');
    const refSaltFork = database.ref('bookings-salt-fork');
    const refSettings = database.ref('settings');

    const [date, setDate] = useState('')

    const submitHandler = () => {   
        // refSettings.set({
        //     // bookingId: formData.bookingId,
        //     bookingCount: bookingId.bookingCount,
        //     kayakStock: bookingId.kayakStock,
        //     waterLevelLimit: bookingId.waterLevelLimit,
        //     blockBooking: false,
        // })
    
        let min = Math.ceil(1);
        let max = Math.floor(10000);
        console.log(Math.floor(Math.random() * (max - min + 1)) + min);
    
        let passingDataSalt = {
          name: 'blocked',
          date: date,
          route: 'Salt Fork',
          numOfKayaks: 12,
          bookingid: Math.floor(Math.random() * (max - min + 1)) + min,
        }
    
        let passingDataSangamon = {
          name: 'blocked',
          date: date,
          route: 'Sangamon',
          numOfKayaks: 12,
          bookingid: Math.floor(Math.random() * (max - min + 1)) + min,
        }
        
        //pushing data to database
        console.log(date)
        ref.push(passingDataSangamon);
        refSaltFork.push(passingDataSalt);
        console.log('pushed to the database')
    }

    return (
        <div  >
            <div><h2>Block A Date</h2></div>
           <div><input onChange={(e) => setDate(e.target.value)} type='date' /></div>
           <br></br>
           <div><Button onClick={submitHandler}  >Block the Date</Button> </div>
        </div>
    )
}
