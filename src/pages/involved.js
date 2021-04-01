import React from 'react';
import '../App.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import SaltForkMap from './salt-fork.jpg'
import Donate from '../Componets/Paypal/donate'

import SalineMap from './info-imgs/salinemap.png'
import SaltForkRiverMap from './info-imgs/saltforkmap.png'
import SangamonMap from './info-imgs/sangamon.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlaybackRate from 'video-react/lib/components/control-bar/PlaybackRate';

import {useHistory} from 'react-router-dom';


export default function Involved(){

    let history = useHistory();

    function handleClick() {
        history.push("/donate");
    }



  //whats rendered to the DOM
  return (
      <div className='waiver' >
      
        <Container className='waiver-container-rivers' >
          <Row>
            <Container>
            <Col>
              <h1>Get Involved</h1>
              
                <div style={{display:'flex', flexWrap: 'wrap'}} >
                  <div>
                  <h3>Volunteering</h3>
                  <ul>
                      <li>Guide Trips</li>
                      <li>Help on Trash Pick Up Day</li>
                      <li>Photography, take photos and post them to our page</li>
                      <li>Education, put together an educational workshop or pamphlet and share it with us</li>
                      <li>Or anything you think might help</li>
                      <a href='mailto:kingfisherkayaking@gmail.com' >Click to email us</a>
                  </ul>
                  <h3>Let us know what you think</h3>
                  <p>Take a minute survey to make us better for everyone <a href='https://docs.google.com/forms/d/e/1FAIpQLSfEtyVsKXZNpgWOM5etn76OPtW0DZST0QKsN8a9Z1PnICueaw/viewform?usp=sf_link' target='blank' >click here</a></p>
                  </div>
                  <div>
                    <img src="https://storage.googleapis.com/www.inputllc.net/kayaking-img/122121610_10164071809120648_6916017970032625040_o.jpg"  width='400px' />
                  </div>
                </div>
                <h3>Donate</h3>
                <p>Your donatation will go to KingFisher Kayaking in paying its employees, vehicle & kayak maintenance, insurances, and any additional costs.</p>
                <Button onClick={handleClick} >Donate</Button>
            </Col>
            </Container>
          </Row>

          
        </Container>
      </div>
  )
}