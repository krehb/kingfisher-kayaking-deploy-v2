import React, {useState, useEffect} from 'react';
import '../../App.css';
import { Col, Container, Row, Image, Carousel, Card, Navbar, Form, Nav, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, useLocation, useHistory} from 'react-router-dom';
import '../../Componets/small-componets/Navbar/navbar.css'

// joe's text about the Salt Fork - The Salt Fork River is a 68 mile long tributary of the Vermilion River. Starting just north of St. Joseph, the Salt Fork heads southeast meandering it’s way through Homer Lake Forest Preserve before eventually merging with the Middle Fork River to form the Vermilion River just west of Danville.


export default function History(){

  const [waterLevel, setWaterLevel] = useState(0)

    //getting waterlevel data
    const url = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=05570910&parameterCd=00065&siteStatus=all'

    useEffect(() => {
        async function getData() {
            const response = await fetch(url);
            const data = await response.json();
            const waterLevelStat = data.value.timeSeries[0].values[0].value[0].value
            setWaterLevel(waterLevelStat)
        }
        getData();
    },[])



  const Animals = [
    {name: 'White-Tailed Deer',
    latin: 'Odocoileus virginianus',
    diet: '',
    fact: 'Their special stomachs allow them to eat some things humans cannot, such as mushrooms and poison ivy.',
    weight: 200,

  }
  ]

  


  //whats rendered to the DOM
  return (
      <div className='waiver' >
      
        <Container className='waiver-container-rivers' >

        <Navbar bg="light" variant="light"  >
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="mr-auto">
            <Link className='link' to='/about' >Trip Info</Link>
            <Link className='link' to='/wildlife' >Wildlife</Link>
            <Link className='link' to='/history' >History</Link>
          </Nav>
        </Navbar>
       
        


          <Row>
            <Container>
            <Col>
              <h1>River Wildlife</h1>
              <p>The Central Illinois rivers are typically lined with oak, hickory, and sycamore trees. You will see many different bird species from bald eagles to goldfinches, with some of the more common bird species being the great blue heron and the belted kingfisher. Mammals of the rivers include semiaquatic species including  beavers, otters, muskrat and mink, in addition to the deer, raccoons, foxes, and coyotes that you might spot along the banks. For more info, check out <a target='blank' href='https://www.wildlifeillinois.org/gallery/' >Wildlife Illinois</a> </p>
            </Col>
            </Container>
          </Row>

          <Row>
            <Col>
            <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 info-img"
                    src="https://storage.googleapis.com/www.inputllc.net/kayaking-img/eagle.jpg"
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
                    src="https://storage.googleapis.com/www.inputllc.net/kayaking-img/kingfisher.jpg"
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
                    src="https://storage.googleapis.com/www.inputllc.net/kayaking-img/deer.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>White-Tailed Deer</h3>
                    <p>(Odocoileus virginianus)</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
            
          </Row>
          <br></br><br></br>
          <Row>
            <Col>
            <h3>Sangamon River</h3>
            The Sangamon River is a 246 mile long tributary of the Illinois River. Beginning southeast of Bloomington, it makes its way south to Mahomet before curling west where it will eventually pass through Decatur and Springfield before merging with the Illinois River near Beardstown. 
            </Col>
          </Row>
          <br></br><br></br> 
          <Row>
          <Col sm>
          <Card style={{backgroundColor: '#CDC7D6', color: 'black'}} >
              <Card.Img variant="top"   src='https://storage.googleapis.com/www.inputllc.net/kayaking-img/sangamon-half-route.png' />
              <Card.Body>
                <Card.Title style={{textAlign: 'left', paddingLeft: '10px', fontSize: '30px'}} >Sangamon Half Route</Card.Title>
                <Card.Text>
                  <ul style={{textAlign: 'left'}} >
                    <li>Starting Point: <a href='https://goo.gl/maps/SUEkRgdqJfTzyk9E8' target='blank' >40°10'55.3"N 88°24'26.4"W</a></li>
                    <li>Ending Point: <a href='https://goo.gl/maps/JjDoxBsPsK6NaXK2A' target='blank' >40°10'53.1"N 88°26'07.2"W</a></li>
                    <li>Meeting Parking Lot: <a href='https://goo.gl/maps/DV8SHeQ8VKUVNtNw5' target='blank' >40°10'47.5"N 88°25'58.8"W</a></li>
                    <li>Route Length: ~2.2 miles (1-2.5 hrs)</li>
                    <li>Current Water Level: {waterLevel}ft</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
          <Card style={{backgroundColor: '#CDC7D6', color: 'black'}} >
              <Card.Img variant="top" src='https://storage.googleapis.com/www.inputllc.net/kayaking-img/sangamon.png'  />
              <Card.Body>
                <Card.Title style={{textAlign: 'left', paddingLeft: '10px', fontSize: '30px'}} >Sangamon Route</Card.Title>
                <Card.Text>
                  <ul style={{textAlign: 'left'}} >
                    <li>Starting Point: <a href='https://goo.gl/maps/1t6KBMCadvGxYxCH7' target='blank' >40°12'19.3"N 88°23'16.2"W</a></li>
                    <li>Ending Point: <a href='https://goo.gl/maps/JjDoxBsPsK6NaXK2A' target='blank' >40°10'53.1"N 88°26'07.2"W</a></li>
                    <li>Meeting Parking Lot: <a href='https://goo.gl/maps/DV8SHeQ8VKUVNtNw5' target='blank' >40°10'47.5"N 88°25'58.8"W</a></li>
                    <li>Route Length: ~6 miles (4-5.5 hrs)</li>
                    <li>Current Water Level: {waterLevel}ft</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          </Row>
          <br></br>


            <br></br>





        </Container>
      </div>
  )
}