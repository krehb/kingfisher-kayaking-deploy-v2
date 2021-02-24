import React from 'react';
import { Container, Button} from 'react-bootstrap';


export default function BlockBookingPage({booked}) {


    return (
        <div className='waiver' style={{paddingBottom: '350px'}} >
            <Container className='waiver-container' >
                
                <h3 className='waiver-title'style={{color: '#0A4870', fontWeight: 700}} >Sorry, we are not accepting any bookings right now</h3>
                <p></p>

            </Container>
        </div>
    )
}