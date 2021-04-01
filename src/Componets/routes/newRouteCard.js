import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './newStyle.css';




const Route = ({title, waterLevel, duration, cost, pic, setRoute, waterLevelSetting, subtitle, setRouteCost, route, setCanoeCost}) => {

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
            () => {history.push(`/booking/${title}`); setRoute(title); setRouteCost(cost); setCanoeCost(route.costCanoe);  }
        )
    }   else {
        if(waterLevelSetting > waterLevelAPI) {
            buttonName = 'Water is too low'
            redAlert = 'red content '
            clickFunction = (null)
        } else if (waterLevelAPI > route.riverLevelRoof){
            buttonName = 'Water is too high'
            redAlert = 'red content '
            clickFunction = (null)
        } else {
            redAlert = 'content'
            clickFunction = (
                () => {history.push(`/booking/${title}`); setRoute(title); setRouteCost(cost);setCanoeCost(route.costCanoe);   }
            )
        }
    }







  return (
    <div>
            <li  className="booking-card" style={{backgroundImage: `url(${pic})`}} >
                <div onClick={clickFunction} className="book-container">
                <div className={redAlert}>
                    <button  className="btn">
                        {buttonName}
                    </button>
                </div>
                </div>
                <div className="informations-container" onClick={clickFunction}>
                <h2 className="title"><FontAwesomeIcon icon="map-marker-alt" onClick={clickFunction}  size="1x" /> {title}</h2>
                <p className="sub-title">{subtitle}</p>
                <div className="more-information">


                    <div className="info-and-date-container">
                    <div onClick={clickFunction} className="box info">
                        <h5>{route.difficulty}</h5>
                        <h5>{route.distance} miles | <FontAwesomeIcon icon="clock"  size="1x" /> {duration} hrs</h5>
                        {/* <h5>{' '}<FontAwesomeIcon icon="dollar-sign"  size="1x" /> {cost} = <span style={{fontSize: '14px'}} > 1 kayak for route + transportation</span></h5> */}
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div style={{width: '225px', height: '2px', backgroundColor: '#ec992c', marginBottom: '8px'}} ></div>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div style={{width: '100px', marginTop: '15px'}}>
                                <h5>{' '}<FontAwesomeIcon icon="dollar-sign"  size="1x" /> {cost} = </h5>
                            </div>
                            <div >
                                <h5 style={{ borderRadius: '10px'}} >1 kayak&#42; for route + transportation</h5>
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div style={{width: '225px', height: '2px', backgroundColor: '#ec992c', marginBottom: '8px'}} ></div>
                        </div>
                        <h5>Start Time: &#42;&#42;{route.time}</h5>
                        {/* <h5><FontAwesomeIcon icon="water"  size="1x" /> {waterLevelAPI} ft </h5> */}
                    </div>
                    </div>
                    <div onClick={() => history.push('/about')} style={{height: '50px', cursor: 'pointer'}} >
                    <p onClick={() => history.push('/about')} className="disclaimer">&#42; we have 1 canoe, which is available for ${route.costCanoe} per route</p>
                    <p onClick={() => history.push('/about')} className="disclaimer">&#42;&#42; if you are the only one on that day, start time is flexible and you may email/call us and inform us when you want to go</p>
                    </div>
                    </div>
                </div>
            </li>
    </div>
  );
};

export default Route;