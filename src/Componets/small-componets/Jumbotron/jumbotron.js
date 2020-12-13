import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import './jumbotron.css';

function MyJumbotron({showJumbo}) {
    
    let jumbo = null
    if (showJumbo) { jumbo = (
        <Jumbotron className='my-jumbo'>
            <h1>Eco Touring</h1>
            <p>
            To provide more affordable and accessible kayak rentals to the general public throughout the East Central Illinois rivers.  Additionally, it will create a more informed and engaged community that contributes to the health, science, and advocacy of East Central Illinois rivers through hands-on educational kayak tours and other conservation programs
            </p>
        </Jumbotron>
    );} else { jumbo = (null) };
    

    return (
        <div>
            {jumbo}
        </div>
    )
}

export default MyJumbotron;