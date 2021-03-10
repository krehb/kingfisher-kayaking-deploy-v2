import React, {useState} from 'react';
import '../App.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import SaltForkMap from './salt-fork.jpg'
import Donate from '../Componets/Paypal/donate'

import SalineMap from './info-imgs/salinemap.png'
import SaltForkRiverMap from './info-imgs/saltforkmap.png'
import SangamonMap from './info-imgs/sangamon.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlaybackRate from 'video-react/lib/components/control-bar/PlaybackRate';


export default function DonatePage(){

    
    const [price, setPrice] = useState(0)

    const [showPaypal, setShowPaypal] = useState(false)
    

    let renderPayment = null
    if(showPaypal && price > 0){
        renderPayment = (
            <>
            {`The donation amount is: $${price}.00`}
            <Donate price={price} />
            <Button style={{marginLeft: '10px'}} onClick={()=> setShowPaypal(!showPaypal)} >back</Button>
            </>
        )
    } else {
        renderPayment = (
            <>
                {'$ '}<input onChange={(e) => {setPrice(e.target.value)}} placeholder='100' type='number' />
                <Button style={{marginLeft: '10px'}} onClick={()=> setShowPaypal(!showPaypal)} >Continue</Button>
            </>
        )
    }


  //whats rendered to the DOM
  return (
      <div className='waiver' >
      
        <Container className='waiver-container-rivers' style={{marginBottom: '300px'}} >
          <Row>
            <Container>
            <Col>
              <h1>Donate</h1>
                <p>Thank you so much for your donation</p>
                {renderPayment}
            </Col>
            </Container>
          </Row>

          
        </Container>
      </div>
  )
}