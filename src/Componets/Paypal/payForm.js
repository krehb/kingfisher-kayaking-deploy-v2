import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Paypal from '../Paypal/Paypal';



function PayFrom({  route, value, formData, routeCost }) {




    console.log(routeCost)







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
                        <p>{formData.numOfKayaks} kayak(s)</p>
                        <p>${formData.numOfKayaks*routeCost}.00 price</p>
                        <p>At {formData.pickUpLocation} at {formData.time} on {value.format('MM/DD/yy')}</p>
                    </div>



                    <div>
                        <Paypal formData={formData} routeCost={routeCost} />
                    </div>
                    

                    {/* <div className='nav-buttons' >
                        <div className='arrow' onClick={() => setFormView(true)}>
                            <FontAwesomeIcon icon="arrow-left"  size="1x" /> <span> Back </span>
                        </div>
                    </div> */}

    </div>
    )
}

export default PayFrom;