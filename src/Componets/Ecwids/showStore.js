import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap';
import Store from './Ecwids'

function ShowStore({showStore}) {

    let riversInfo = null
    if (showStore) {
      riversInfo = (
        <Store></Store>
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

export default ShowStore;