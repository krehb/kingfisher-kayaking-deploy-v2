import React, { useEffect, useState } from 'react';
import {  Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './newStyle.css';




const Route = ({title, waterLevel, duration, cost, learn, pic, setRoute, waterLevelSetting, subtitle}) => {

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
    let buttonName = 'Book'
    let redAlert = null
    if(waterLevelAPI === null) {
        renderWaterLevel = (null)
        boxClass = 'text'
        buttonName = 'Book'
        redAlert = 'content'
        console.log(pic)
        clickFunction = (
            () => {setRoute(title)}
        )
    }   else {
        if(waterLevelSetting > waterLevelAPI) {
            boxClass = 'too-low'
            buttonName = 'Water is too low'
            redAlert = 'red content '
            clickFunction = (null)
        }else {
            boxClass = 'text'
            redAlert = 'content'
            clickFunction = (
                () => {setRoute(title)}
            )
        }
        renderWaterLevel = waterLevelAPI
    }


    




  return (
    <div>
            <li onClick={clickFunction} className="booking-card" style={{backgroundImage: `url(${pic})`}} >
                <div className="book-container">
                <div className={redAlert}>
                    <button onClick={clickFunction} className="btn">{buttonName}</button>
                </div>
                </div>
                <div className="informations-container">
                <h2 className="title"><FontAwesomeIcon icon="map-marker-alt"  size="1x" /> {title}</h2>
                <p className="sub-title">{subtitle}</p>
                <div className="more-information">


                    <div className="info-and-date-container">
                    <div className="box info">
                        <h5><FontAwesomeIcon icon="dollar-sign"  size="1x" /> {cost}</h5>
                        <h5><FontAwesomeIcon icon="clock"  size="1x" /> {duration} hrs</h5>
                        <h5><FontAwesomeIcon icon="water"  size="1x" /> {waterLevelAPI} ft</h5>
                    </div>
                    </div>
                    <p className="disclaimer">disclaimer</p>
                    </div>
                </div>
            </li>
    </div>
  );
};

export default Route;