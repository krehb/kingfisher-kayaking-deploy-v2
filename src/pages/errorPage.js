import React from 'react';
import { Container, Button} from 'react-bootstrap';


export default function ErrorPage({booked}) {


    return (
        <div className='waiver' style={{paddingBottom: '250px'}} >
            <Container className='waiver-container' >
                
                <h3 className='waiver-title'style={{color: '#0A4870', fontWeight: 700}} >Error!</h3>
                <p>There must been an error, retry booking or please contact us if there is any concerns</p>

            </Container>
        </div>
    )
}