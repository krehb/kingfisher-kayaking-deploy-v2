import React,{useState} from 'react'
import { Form, Col, Container, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from 'firebase';
import moment from 'moment';
import emailjs from 'emailjs-com';
import Paypal from '../Paypal/Paypal';



function PayFrom({  route, value,   setFormView, formData }) {




//   // firebase requirements
//   const database = firebase.database();
//   const ref = database.ref('bookings');




  //submitting form to firebase database
//   const submitHandler = () => {
//     if(kayaksTaking > 0 && ifChecked){
//       console.log('booking sent');
//       ref.push(formData);
//     } else {
//       console.log('erroror')
//       console.log(ifChecked)
//     }
//   }





    // function sendEmail(e) {
    //     e.preventDefault();
    //     console.log('was clicked')
    //     emailjs.sendForm('service_n7gxrhi', 'template_eay3k5p', e.target, 'user_eKTDTnT6b5suYFim5twvR')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    // }









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
                        <p>At {formData.pickUpLocation} at {formData.time} on {value.format('MM/DD/yy')}</p>
                    </div>



                    <div>
                        <Paypal formData={formData} />
                    </div>
                    

                    <div className='nav-buttons' >
                        <div className='arrow' onClick={() => setFormView(true)}>
                            <FontAwesomeIcon icon="arrow-left"  size="1x" /> <span> Back </span>
                        </div>
                    </div>

    </div>
    )
}

export default PayFrom;