import React, {useState, useEffect} from 'react';
import { Row, Form, Col, Container, Button } from 'react-bootstrap';


export default function List({ booked, booked2}){

    const [renderList, setList] = useState([])



    const filterHandler = (e) => {
        console.log(e.target.value)

        if(e.target.value === 'Salt Fork'){
            setList(booked2)
        }
        if(e.target.value === 'Sangamon'){
            setList(booked)
        }
        if(e.target.value === 'All'){
            let newArray = []
            booked.forEach(element => {
                newArray.push(element)
            });
            booked2.forEach(element => {
                newArray.push(element)
            });
            setList(newArray)
        }
        if(e.target.value === 'None'){
            setList([])
        }

    }



  return (
      <div >


        <Container >
            Lists of bookings

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control onChange={(e)=> filterHandler(e)} as="select">
                <option>None</option>
                <option>All</option>
                <option >Salt Fork</option>
                <option>Sangamon</option>
                </Form.Control>
            </Form.Group>

            {renderList.map(booking => {
                return <div key={booking.bookingId} style={{display: 'flex', padding: '10px', justifyContent: 'center'}} >

                    <div style={{marginRight: '20px', width: '100px'}} >{booking.date}</div>
                    <div style={{marginRight: '20px',width: '300px'}}>{booking.name}</div>
                    <div style={{marginRight: '20px',width: '100px'}}>Kayaks: {booking.numOfKayaks}</div>
                    <div>Canoe: {booking.numOfCanoe}</div>

                </div>
            })}

        </Container>

      </div>
  )
}