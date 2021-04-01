import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'video-react/dist/video-react.css'; // import css


//components
import MyJumbotron from '../Componets/small-componets/Jumbotron/jumbotron';
import Routes from '../Componets/routes/routes';
import Video from '../Componets/small-componets/video/video';







export default function HomePage({ setRouteSelected , waterLevelSetting, myRef, setRouteCost, routesList, setCanoeCost}){





  //whats rendered to the DOM
  return (
      <div >
          <Video  />
          <MyJumbotron  />
          <div ref={myRef} className='RoutesList' id='routes' >
            <Routes
              setRoute={setRouteSelected}
              waterLevel={waterLevelSetting}
              setRouteSelected={setRouteSelected}
              routesList={routesList}
              setCanoeCost={setCanoeCost}
              setRouteCost={setRouteCost} />
          </div>
      </div>
  )
}