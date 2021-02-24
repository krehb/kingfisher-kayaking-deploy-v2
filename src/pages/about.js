import React from 'react';
import '../App.css';
import { Col, Container, Row, Image, Carousel, Card } from 'react-bootstrap';
import SaltForkMap from './salt-fork.jpg'

import SalineMap from './info-imgs/salinemap.png'
import SaltForkRiverMap from './info-imgs/saltforkmap.png'
import SangamonMap from './info-imgs/sangamon.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function About(){


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
      
        <Container className='waiver-container' >
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
            </Col>
            
          </Row>
          <br></br><br></br>
          <Row>

          <Col sm>
          <Card style={{backgroundColor: '#CDC7D6', color: 'black'}} >
              <Card.Img variant="top"   src={SaltForkRiverMap} />
              <Card.Body>
                <Card.Title style={{textAlign: 'left', paddingLeft: '10px', fontSize: '30px'}} >Salt Fork</Card.Title>
                <Card.Text>
                The Salt Fork River is a 68 mile long tributary of the Vermilion River. Starting just north of St. Joseph, the Salt Fork heads southeast meandering it’s way through Homer Lake Forest Preserve before eventually merging with the Middle Fork River to form the Vermilion River just west of Danville.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm>
          <Card style={{backgroundColor: '#CDC7D6', color: 'black'}} >
              <Card.Img variant="top"   src={SangamonMap} />
              <Card.Body>
                <Card.Title style={{textAlign: 'left', paddingLeft: '10px', fontSize: '30px'}} >Sangamon River</Card.Title>
                <Card.Text>
                The Sangamon River is a 246 mile long tributary of the Illinois River. Beginning southeast of Bloomington, it makes its way south to Mahomet before curling west where it will eventually pass through Decatur and Springfield before merging with the Illinois River near Beardstown. 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          </Row>
            <br></br>
            {/* <Row>
              <Col>
                <h1>Recently Seen Animals</h1>
                <FontAwesomeIcon icon="seedling"  size="3x" />
                <FontAwesomeIcon icon="fish"  size="3x" />
                <FontAwesomeIcon icon="apple-alt"  size="3x" />
                <FontAwesomeIcon icon="drumstick-bite"  size="3x" />
                <FontAwesomeIcon icon="bug"  size="3x" />

              </Col>
            </Row> */}


          {/* <Row>
            <Col sm>
              <Card className="bg-dark text-white">
                <Card.Img src="https://scontent.fpia1-1.fna.fbcdn.net/v/t1.0-9/116010461_10163714710565648_4749864515233144120_o.jpg?_nc_cat=104&ccb=2&_nc_sid=b9115d&_nc_ohc=SkOglKYaB_AAX_zmyTn&_nc_ht=scontent.fpia1-1.fna&oh=ff3fe08a2c700d7837d0bf30ed45efc0&oe=6035BFDB" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title  >White-Tailed Deer</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>  
            <Col sm>
              <Card className="bg-dark text-white">
                <Card.Img src="https://scontent.fpia1-1.fna.fbcdn.net/v/t1.0-9/117253385_10163778848705648_2581571581454819758_o.jpg?_nc_cat=100 info-img&ccb=2&_nc_sid=b9115d&_nc_ohc=JClF6SZK93IAX8vLedH&_nc_ht=scontent.fpia1-1.fna&oh=b42dbc400c908c54aa366f7200f41bd3&oe=60372ED9" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Belted Kingfisher</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>  



          </Row> */}

        </Container>
      </div>
  )
}