import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './newStyle.css';




const Route = ({title, waterLevel, duration, cost, pic, setRoute, waterLevelSetting, subtitle, setRouteCost}) => {

    const [waterLevelAPI, setWaterLevel] = useState(null);
    //routing
    const history = useHistory();

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
    let clickFunction = null
    let buttonName = 'Book'
    let redAlert = null
    if(waterLevelAPI === null) {
        buttonName = 'Book'
        redAlert = 'content'
        clickFunction = (
            () => {history.push(`/booking/${title}`); setRoute(title); setRouteCost(cost); console.log(cost)  }
        )
    }   else {
        if(waterLevelSetting > waterLevelAPI) {
            buttonName = 'Water is too low'
            redAlert = 'red content '
            clickFunction = (null)
        }else {
            redAlert = 'content'
            clickFunction = (
                () => {history.push(`/booking/${title}`); setRoute(title); setRouteCost(cost); console.log(cost) }
            )
        }
    }








  return (
    <div>
            <li onClick={clickFunction} className="booking-card" style={{backgroundImage: `url(${pic})`}} >
                <div className="book-container">
                <div className={redAlert}>
                    <button  className="btn">
                        {buttonName}
                    </button>
                </div>
                </div>
                <div className="informations-container">
                <h2 className="title"><FontAwesomeIcon icon="map-marker-alt"  size="1x" /> {title}</h2>
                <p className="sub-title">{subtitle}</p>
                <div className="more-information">


                    <div className="info-and-date-container">
                    <div className="box info">
                        <h5>{' '}<FontAwesomeIcon icon="dollar-sign"  size="1x" /> {cost}</h5>
                        <h5><FontAwesomeIcon icon="clock"  size="1x" /> {duration} hrs</h5>
                        <h5><FontAwesomeIcon icon="water"  size="1x" /> {waterLevelAPI} ft</h5>
                    </div>
                    </div>
                    <p className="disclaimer">disclaimer: these photos weren't taken by us but are the same birds we see on the routes</p>
                    </div>
                </div>
            </li>
    </div>
  );
};

export default Route;