import React, { useEffect, useRef } from 'react';
import {  Container, Col , Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './ecwids.css'
// import styled from 'styled-components';

// styles

// const Wrap = styled.div`
//   grid-area: content;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props) => props.theme.BackgroundColor};
//   height: 100vh;
//   width:99vw;
//   overflow-x: hidden;

// p{
//   font-size: 1vmin;
//   padding: 20px;
//   margin: 0px 20px 0px 20px;
//   text-align: center;
// }
// `;

//JSX

function Store(showStore) {
  const storeDiv = useRef(null);
  const scriptRef = useRef(null);
  window.ecwid_script_defer = true;
  window.ecwid_dynamic_widgets = true;
  window._xnext_initialization_scripts = [{
    widgetType: 'ProductBrowser',
    id: 'my-store-29812014',
    arg: ["id=product"]
  }
  ];

  



  var script = document.createElement('script');
  script.charset = 'utf-8';
  script.type = 'text/javascript';
  script.src = 'https://app.ecwid.com/script.js?29812014';
  script.defer = true;
  script.ref=scriptRef;



  useEffect(() => {
      if(!scriptRef.current){
      storeDiv.current.appendChild(script);
      }
  });




  return (
    <Container>
      <Row>
        <Col></Col>
        <Col  xs={6}>
          <div className='my-store' >
            <div id="my-store-29812014" ref={storeDiv}></div>
            <div id="my-categories-29812014"></div>
            <div id="my-search-29812014"></div>
            <div className="ec-cart-widget"></div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>


    );
}

export default Store;