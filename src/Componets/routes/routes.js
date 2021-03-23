import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import NewRoute from './newRouteCard';


function Routes({ setRoute, waterLevel, routesList, setRouteCost }) {


    
    
    
    
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
                            return <NewRoute setRouteCost={setRouteCost} subtitle={route.subtitle}  waterLevelSetting={waterLevel} key={route.name} setRoute={setRoute} title={route.name} cost={route.cost} duration={route.duration} waterLevel={route.site} pic={route.img} route={route} />
                        })}
                    </ul>
                </Row>
        </Container>
        </div>
    )
}

export default Routes;