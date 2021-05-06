import React, {useState, useEffect} from 'react';
import '../../App.css';
import { Col, Container, Row, Image, Carousel, Card, Navbar, Table, Nav, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, useLocation, useHistory} from 'react-router-dom';
import '../../Componets/small-componets/Navbar/navbar.css'

// joe's text about the Salt Fork - The Salt Fork River is a 68 mile long tributary of the Vermilion River. Starting just north of St. Joseph, the Salt Fork heads southeast meandering it’s way through Homer Lake Forest Preserve before eventually merging with the Middle Fork River to form the Vermilion River just west of Danville.


export default function WildLife(){

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
            <Link className='link' active to='/wildlife' >Wildlife</Link>
            {/* <Link className='link' to='/history' >History</Link> */}
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
         

            <Row>
                <Col>
                <br></br>
                <h2>Top 5 Animals Seen on the Sangamon Route</h2>
                <Table striped bordered hover className='wildlife-table'>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image 1</th>
                        <th>Image 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Muskrat (Ondatra zibethicus)</td>
                        <td><Image className="wildlife-img" width='300' alt='muskrat' src='https://www.wildlifeillinois.org/wp-content/uploads/2019/01/Muskrat-Hagar.jpeg' /></td>
                        <td><Image className="wildlife-img" width='300' alt='muskrat' src='https://www.wildlifeillinois.org/wp-content/uploads/2019/03/Muskrat-Adele-HoddeEDITED.jpg' /></td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Pileated Woodpecker (Dryocopus pileatus)</td>
                        <td><Image className="wildlife-img" width='300' alt='bird' src='https://www.allaboutbirds.org/guide/assets/photo/60408671-720px.jpg' /></td>
                        <td><Image className="wildlife-img" width='300' alt='bird' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEcsmBuJId4-VRumBKwkjZE30tn-uuYKv3u2qAjuKLA64BMhGA3Mq1Ey6VPN0IylvvvaY&usqp=CAU' /></td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Fox Squirrel (Sciurus niger)</td>
                        <td><Image className="wildlife-img" width='300' alt='fox squirrel picture' src='https://www.wildlifeillinois.org/wp-content/uploads/2018/08/Fox-squirrel.jpeg' /></td>
                        <td><Image className="wildlife-img" width='300' alt='fox squirrel picture' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Fox_Squirrel_%2814539535789%29.jpg/330px-Fox_Squirrel_%2814539535789%29.jpg' /></td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>Blue Jay (Cyanocitta cristata)</td>
                        <td><Image className="wildlife-img" width='300' alt='blue jay' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Blue_jay_in_PP_%2830960%29.jpg/330px-Blue_jay_in_PP_%2830960%29.jpg' /></td>
                        <td><Image className="wildlife-img" width='300' alt='blue jay' src='https://www.thespruce.com/thmb/Scxki-aqbP8Q0UsnoIMTPd5n98w=/1500x1000/filters:fill(auto,1)/blue-jay-2-5991e6b0c412440011b66974.jpg' /></td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td>Mallard Duck (Anas platyrhynchos)</td>
                        <td><Image className="wildlife-img" width='300' alt='blue jay' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg/330px-Anas_platyrhynchos_male_female_quadrat.jpg' /></td>
                        <td><Image className="wildlife-img" width='300' alt='blue jay' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Anas_Rubripes_and_Anas_Platyrhynchos_August_2008.JPG/330px-Anas_Rubripes_and_Anas_Platyrhynchos_August_2008.JPG' /></td>
                        </tr>
                        
                    </tbody>
                    </Table>
                </Col>
            </Row>



        </Container>
      </div>
  )
}