import React, {useState, useEffect} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import firebase from 'firebase';

import NewRoute from './newRouteCard';


function Routes({ setRoute, waterLevel, routesList, setRoutes, setRouteCost }) {

    //firebase requirements
    const database = firebase.database();
    const ref = database.ref('routes');


    //getting routes list data
    useEffect(() => {
        ref.on('value', gotDataHandler, errDataHandler);
    }, [])

    const gotDataHandler = (data) => {
        const dataRoutes = data.val();

        const keys = Object.keys(dataRoutes);
        for (let i = 0; i < keys.length; i ++){
          let k = keys[i]
          const list = dataRoutes[k]
          setRoutes(routesList => [...routesList, list])
        }
   
    }
    const errDataHandler = (err) => {
        console.log('Error!')
        console.log(err)
    }


    
    
    
    
    return (
        <div>
        <Container className='myRoutes'>
                <Row >
                    <Col>
                        <h1 className='heading' >BOOK ROUTE</h1>
                    </Col>
                </Row>
                <Row className='route-list' >
                    <ul>
                        {routesList.map(route =>{
                            return <NewRoute setRouteCost={setRouteCost} subtitle={route.subtitle}  waterLevelSetting={waterLevel} key={route.name} setRoute={setRoute} title={route.name} cost={route.cost} duration={route.duration} waterLevel={route.site} pic={route.img}  />
                        })}
                    </ul>
                </Row>
        </Container>
        </div>
    )
}

export default Routes;