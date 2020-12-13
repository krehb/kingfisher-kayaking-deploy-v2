import React, { useEffect, useState } from 'react';
import {  Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Route = ({title, waterLevel, duration, cost, learn, pic, setRoute, waterLevelSetting}) => {

    const [waterLevelAPI, setWaterLevel] = useState(null);


    //getting waterlevel data
    const url = `https://waterservices.usgs.gov/nwis/iv/?format=json&sites=0${waterLevel}&parameterCd=00065&siteStatus=all`

    useEffect(() => {
        async function getData() {
            const response = await fetch(url);
            const data = await response.json();
            const waterLevelStat = data.value.timeSeries[0].values[0].value[0].value
            setWaterLevel(waterLevelStat)
        }
        getData();
    },[])


    //rendering waterlevel data and style
    let renderWaterLevel = null
    let boxClass = null
    let clickFunction = null
    if(waterLevelAPI === null) {
        renderWaterLevel = (null)
        boxClass = 'text'
        clickFunction = (
            () => {setRoute(title)}
        )
    }   else {
        if(waterLevelSetting > waterLevelAPI) {
            boxClass = 'too-low'
            clickFunction = (null)
        }else {
            boxClass = 'text'
            clickFunction = (
                () => {setRoute(title)}
            )
        }
        renderWaterLevel = waterLevelAPI
    }




  return (
    <Col sm  >
        <div className='hover' >
            <Card.Body onClick={clickFunction} className={pic}>
                <Row>
                    <Col className={boxClass}>
                        <h6><FontAwesomeIcon icon="map-marker-alt"  size="1x" /> {title}</h6>
                        <h6><FontAwesomeIcon icon="clock"  size="1x" /> {duration}hrs</h6>
                        <h6><FontAwesomeIcon icon="dollar-sign"  size="1x" /> {cost} kayak</h6>  
                        <h6><FontAwesomeIcon icon="water"  size="1x" /> {renderWaterLevel} ft</h6>
                        <h6><FontAwesomeIcon icon="plus"  size="1x" /> {learn} Learn More</h6>
                    </Col>
                    <Col className='hover' ></Col>
                    <Col className='hover' ></Col>
                </Row>
            </Card.Body>
        </div>
    </Col>  
  );
};

export default Route;