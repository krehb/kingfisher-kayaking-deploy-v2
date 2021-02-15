import React from 'react';
import '../App.css';
import { Col, Container, Row, Image, Carousel } from 'react-bootstrap';
import SaltForkMap from './salt-fork.jpg'




export default function About(){





  //whats rendered to the DOM
  return (
      <div className='waiver' >
        <Container className='waiver-container' >
          <Row>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 info-img"
                    src="https://scontent.fpia1-1.fna.fbcdn.net/v/t1.0-9/121157956_10164041958980648_8592341739752383201_o.jpg?_nc_cat=104&ccb=2&_nc_sid=b9115d&_nc_ohc=PHNjPno-b4IAX8cUcOj&_nc_ht=scontent.fpia1-1.fna&oh=6091543014ef1dfa5ae1de5c7ba67e42&oe=60372754"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Bald Eagle</h3>
                    <p>(Haliaeetus leucocephalus)</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    height='200px'
                    width='auto'
                    className="d-block w-100 info-img"
                    src="https://scontent.fpia1-1.fna.fbcdn.net/v/t1.0-9/117253385_10163778848705648_2581571581454819758_o.jpg?_nc_cat=100 info-img&ccb=2&_nc_sid=b9115d&_nc_ohc=JClF6SZK93IAX8vLedH&_nc_ht=scontent.fpia1-1.fna&oh=b42dbc400c908c54aa366f7200f41bd3&oe=60372ED9"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Belted Kingfisher</h3>
                    <p>(Megaceryle alcyon)</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    height='200px'
                    width='auto'
                    className="d-block w-100 info-img"
                    src="https://scontent.fpia1-1.fna.fbcdn.net/v/t1.0-9/116010461_10163714710565648_4749864515233144120_o.jpg?_nc_cat=104&ccb=2&_nc_sid=b9115d&_nc_ohc=SkOglKYaB_AAX_zmyTn&_nc_ht=scontent.fpia1-1.fna&oh=ff3fe08a2c700d7837d0bf30ed45efc0&oe=6035BFDB"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>White-Tailed Deer</h3>
                    <p>(Odocoileus virginianus)</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <h2 className='river-title' >About the Rivers</h2>
              <p>Central Illinois is not often thought of being a destination for nature lovers, but tucked away between the endless acres of corn and soybean is a world largely unknown and unexplored, a world of bald eagles and great horned owls silently perched above the water waiting for bass or catfish, of beavers, otters, and mink scurrying along a muddy river bank, of water snakes and giant snapping turtles sunning themselves on logs, of great blue herons flying overhead, of belted kingfishers darting over the water, of giant jumping asian carp lurking just beneath the surface of the muddy water, and the occasional group of kayakers, slowly drifting along, taking in all of the natural wonders of the often forgotten biodiversity hotspots which are our local rivers.</p>
            </Col>
          </Row>
          <div>
            <div className='river-info' >
              <div>
                <img src={SaltForkMap} className='river-img' rounded />
              </div>
              <div className='river-text' >
                <h5>Salt Fork</h5>
                <p>On a rainy day in Urbana if you were to hop inside a raindrop that landed in the street, you would soon find yourself headed down a storm drain and through a series of underground tunnels made of concrete. Not long after you would find yourself in the Boneyard Creek, winding your way through the UIUC campus, and then downtown Urbana, and once you were north of downtown you would find yourself joining a larger stream known as the Saline Branch. Following this east all the way to St. Joe would lead you to the Salt Fork River. This 68 mile long river drains an area extending from Urbana to Rantoul, all the way to Oakwood.</p>
                <span>more info coming soon...</span><h6>- Joe</h6>
              </div>
            </div>
          </div>
        </Container>
      </div>
  )
}