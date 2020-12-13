import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap';
import SaltForkMap from './salt-fork.jpg'

function RiverInfo({show}) {

    let riversInfo = null
    if (show) {
      riversInfo = (
        <Container>
          <Row>
            <Col>
              <p>Central Illinois is not often thought of being a destination for nature lovers, but tucked away between the endless acres of corn and soybean is a world largely unknown and unexplored, a world of bald eagles and great horned owls silently perched above the water waiting for bass or catfish, of beavers, otters, and mink scurrying along a muddy river bank, of water snakes and giant snapping turtles sunning themselves on logs, of great blue herons flying overhead, of belted kingfishers darting over the water, of giant jumping asian carp lurking just beneath the surface of the muddy water, and the occasional group of kayakers, slowly drifting along, taking in all of the natural wonders of the often forgotten biodiversity hotspots which are our local rivers.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>SaltFork</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>On a rainy day in Urbana if you were to hop inside a raindrop that landed in the street, you would soon find yourself headed down a storm drain and through a series of underground tunnels made of concrete. Not long after you would find yourself in the Boneyard Creek, winding your way through the UIUC campus, and then downtown Urbana, and once you were north of downtown you would find yourself joining a larger stream known as the Saline Branch. Following this east all the way to St. Joe would lead you to the Salt Fork River. This 68 mile long river drains an area extending from Urbana to Rantoul, all the way to Oakwood.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image src={SaltForkMap} rounded />
            </Col>
          </Row>
        </Container>
      )
    } else {
      riversInfo = null
    }




    return (
        <div>
            {riversInfo}
        </div>
    )
}

export default RiverInfo;