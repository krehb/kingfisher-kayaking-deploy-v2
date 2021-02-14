import React from 'react';
import { Container, Button} from 'react-bootstrap';
import Change from './change';

export default function CancelIndex({booked}) {


    return (
        <div className='waiver' >
            <Container className='waiver-container' >
                
                <h3 className='waiver-title'style={{color: '#0A4870', fontWeight: 700}} >CHANGE TRIP DATE or TRIP CANCELATION</h3>
                <Change booked={booked} />
            </Container>
        </div>
    )
}

