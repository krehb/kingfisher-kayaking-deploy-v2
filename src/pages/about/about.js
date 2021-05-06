import React, {useState, useEffect} from 'react';
import '../../App.css';
import { Col, Container, Row, Image, Carousel, Card, Navbar, Table, Nav, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, useLocation, useHistory} from 'react-router-dom';
import '../../Componets/small-componets/Navbar/navbar.css'

// joe's text about the Salt Fork - The Salt Fork River is a 68 mile long tributary of the Vermilion River. Starting just north of St. Joseph, the Salt Fork heads southeast meandering it’s way through Homer Lake Forest Preserve before eventually merging with the Middle Fork River to form the Vermilion River just west of Danville.


export default function About({bookingId}){



  const [line1 , setLine1] = useState('')
  const [line2, setLine2] = useState('loading...');
  const [line3, setLine3] = useState('')
  const [date, setDate] = useState('')
  const [author, setAuthor] = useState('')
  const [waterLevel, setWaterLevel] = useState('loading...')

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
      
        <Container className='waiver-container-rivers'  >

        <Navbar bg="light" variant="light">
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="mr-auto">
            <Link className='link' active to='/about'>Trip Info</Link>
            <Link className='link' to='/wildlife'>Wildlife</Link>
            {/* <Link className='link' to='/history'>History</Link> */}
          </Nav>
        </Navbar>
       
        


         
            
          <br></br>
          <Row>
            <Col>
            <h1>Sangamon River</h1>
            The Sangamon River is a 246 mile long tributary of the Illinois River. Beginning southeast of Bloomington, it makes its way south to Mahomet before curling west where it will eventually pass through Decatur and Springfield before merging with the Illinois River near Beardstown. 
            </Col>
          </Row>
          <br></br><br></br> 
          <Row>
          <Col sm>
          <Card style={{backgroundColor: '#ffffff', color: '#0A4870'}} >
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
            <br></br>
            <Card style={{backgroundColor: '#ffffff', color: '#0A4870'}} >
              <Card.Body>
                <Card.Title style={{textAlign: 'left', paddingLeft: '10px', fontSize: '30px'}} >Pick Up Loactions</Card.Title>
                <Card.Text>
                  <ul style={{textAlign: 'left'}} >
                    <li>I'll Drive Myself: <a href='https://goo.gl/maps/DV8SHeQ8VKUVNtNw5' target='blank' >40°10'47.5"N 88°25'58.8"W</a></li>
                    <li>Marketplace Mall: <a href='https://goo.gl/maps/f6iQBKYufsYckhM96' target='blank' >40°08'27.1"N 88°14'30.2"W</a></li>
                    <li>Lincolnsquare Mall: <a href='https://goo.gl/maps/Jo2U8VregQW8Xunr5' target='blank' >40°06'34.6"N 88°12'24.3"W</a></li>
                    <li>Savoy Walmart: <a href='https://goo.gl/maps/mbJDQx7JvCJ1W7iE9' target='blank' >40°02'58.5"N 88°15'15.4"W</a></li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
          <br></br>
          <br></br>
          <Card style={{backgroundColor: '#ffffff', color: '#0A4870'}} >
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
          <Row>
            <Col sm>
              <h1>To Be Continued</h1>
              <p> We are currently looking into new routes. Champaign County is home to 5 different watersheds, which makes it idea for finding new areas to kayak and explore. </p>
              <Table striped bordered hover className='water-shed-table' >
                <thead >
                  <tr>
                    <th>#</th>
                    <th>Watersheds</th>
                    <th>Area (sq mi)</th>
                    <th># of Routes</th>
                    <th>Drains into</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Vermilion</td>
                    <td>1,300</td>
                    <td>0</td>
                    <td>Wabash River</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Sangamon</td>
                    <td>5,370</td>
                    <td>2</td>
                    <td>Illinois River</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Kaskaskia</td>
                    <td>5,810</td>
                    <td>0</td>
                    <td>Mississippi River</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Embarras</td>
                    <td>2,400</td>
                    <td>0</td>
                    <td>Wabash River</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Wabash River Valley</td>
                    <td>*</td>
                    <td>0</td>
                    <td>Wabash River</td>
                  </tr>
                </tbody>
              </Table>
              <span>*area is not listed <a target='blank' href='https://ilrdss.isws.illinois.edu/links/watersheds.asp?ws=139' >ILRDSS</a></span>
            </Col>
            <Col sm>
              <div>
                <Image className='watershed-img' src='https://storage.googleapis.com/www.inputllc.net/kayaking-img/watersheds.png' />
              </div>
              <div>
              <span style={{fontSize: '10px'}} >Champaign County Regional Planning Commission <a href='https://ccrpc.org/wp-content/uploads/2010/04/12_v1_Chapter10.pdf' target='blank' >additional info</a></span>
              </div>
            </Col>
          </Row>





        </Container>
      </div>
  )
}