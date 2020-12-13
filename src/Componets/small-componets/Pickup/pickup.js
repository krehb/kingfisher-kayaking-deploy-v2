import React from 'react'
import { Container } from 'react-bootstrap';

function Pickup(props) {
    return (
        <div>
            <Container>
                <h3>Where To Get Picked Up</h3>
                <h6>Once booked, we will pick you up at any of the selected locations:</h6>
                <ul>
                    <li>
                    Vet Med Parking Lot
                    </li>
                    <li>
                    Market Place Mall
                    </li>
                </ul>
            </Container>
        </div>
    )
}

export default Pickup;