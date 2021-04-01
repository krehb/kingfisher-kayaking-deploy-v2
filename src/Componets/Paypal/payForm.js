import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Paypal from '../Paypal/Paypal';



function PayFrom({  route, value, formData, routeCost,bookingId , canoeCost}) {

    const [renderKayaks, setRenderKayaks] = useState(false)
    const [renderCanoe, setRenderCanoe] = useState(false)
    const [renderTotalPrice, setTotalPrice] = useState(0)

    //error catch
    let history = useHistory();
    function handleErrorPage() {
        history.push("/error");
    }
    useEffect(()=> {
        if(formData === undefined){
            handleErrorPage();
        } 
    },[])
    if(formData === undefined){
        handleErrorPage();
    } 

    //rendering list of order of canoe or kayak or both
    useEffect(() => {

        if(formData.numOfKayaks > 0){
            setRenderKayaks(true)
        }
        if(formData.numOfCanoe > 0){
            setRenderCanoe(true)
        }
        if(formData.numOfKayaks > 0 || formData.numOfCanoe > 0){

            if(formData.numOfKayaks === undefined){
                let newTotal = ( canoeCost)
                setTotalPrice(newTotal)
            } else {
                let newTotal = (formData.numOfKayaks * routeCost) + (formData.numOfCanoe * canoeCost)
                setTotalPrice(newTotal)
            }

        }     
    }, [])

    let renderKayaksList = null
    if(renderKayaks){
        renderKayaksList = (
            <p>{formData.numOfKayaks} kayak(s)</p>
        )
    }
    let renderCanoeList = null
    if(renderCanoe){
        renderCanoeList = (
            <p>{formData.numOfCanoe} Canoe</p>
        )
    }

    return (
        <div className='pay' >
            <div>
                <div className='info-form' >
                    Confirm & Pay
                </div>
            </div>

            <div>
                <div className='header-form' >
                    <FontAwesomeIcon icon="map-marker-alt"  size="1x" /> {route} on {value.format('MM/DD/yy')}
                </div>
            </div>

            <div className='pay-review' >
                <p>{formData.name}<span className='email' > {formData.email}</span></p>
                {renderKayaksList}
                {renderCanoeList}
                <p>${renderTotalPrice}.00 price</p>
                <p>At {formData.pickUpLocation} at {formData.time} on {value.format('MM/DD/yy')}</p>
            </div>
            <div>
                <Paypal  formData={formData} canoeCost={canoeCost} routeCost={routeCost} renderTotalPrice={renderTotalPrice} bookingId={bookingId} />
            </div>
        </div>
    )
}

export default PayFrom;