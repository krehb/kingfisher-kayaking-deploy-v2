import React, {useRef, useEffect, useState} from 'react';
import emailjs from 'emailjs-com';
import {useHistory} from 'react-router-dom';
import firebase from 'firebase';
import { Button } from 'react-bootstrap';

export default function Paypal( {formData, routeCost, bookingId, renderTotalPrice, canoeCost} ) {
    
    const paypal = useRef()
    //going to success page after payment
    let history = useHistory();

    function handleClick() {
      history.push("/success");
    }
    function handleErrorPage() {
        history.push("/error");
    }

    // firebase requirements
    const database = firebase.database();
    const ref = database.ref('bookings');
    const refSaltFork = database.ref('bookings-salt-fork');
    const refSettings = database.ref('settings');
    
    const [priceTotal, setPriceTotal] = useState(0);
    const [updatingBookingId, setBookingId] = useState();
    const [updatingBookingCount, setUpdatingBookingCount] = useState(0);

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        setBookingId(formData.bookingid);

    });




    useEffect(()=> {

        let total = null

        if(formData.numOfKayaks > 0 || formData.numOfCanoe > 0){
            if(formData.numOfKayaks === undefined){
                total = canoeCost
            } else {
                total = (formData.numOfKayaks*routeCost)+(formData.numOfCanoe * canoeCost)
            }
        } 

        setPriceTotal(renderTotalPrice)
        // setUpdatingBookingId(formData)
        setUpdatingBookingCount(bookingId.bookingCount)
        //sending payment through paypal

    

        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [
                        {
                            description: `${formData.numOfKayaks} kayak(s) on a route on ${formData.route}`,
                            amount: {
                                currency_code: 'USD',
                                value: total
                            }  
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order)
                setShowButton(true)
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    },[])





      //submitting form to firebase database
    const submitHandler = () => {
        refSettings.set({
            // bookingId: formData.bookingId,
            bookingCount: updatingBookingCount + 1,
            kayakStock: bookingId.kayakStock,
            waterLevelLimit: bookingId.waterLevelLimit,
            blockBooking: false,
        })
        console.log('booking sent to database');
        // pushing data to database
        console.log(formData)
        if(formData.route === 'Salt Fork'){
            refSaltFork.push(formData)
        } else {
            ref.push(formData);
        }
    }

    function sendEmail(e) {
        e.preventDefault();
        submitHandler();

        emailjs.sendForm(`${process.env.REACT_APP_EMAIL_SERVICE_ID}`, `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`, e.target, `${process.env.REACT_APP_EMAIL_USER_ID}`)
            .then((result) => {
                console.log(result.text);
                console.log('was emailed')
            }, (error) => {
                console.log(error.text);
            });

        history.push('/success');
    }
    
    let renderFinishButton = null

    if (showButton){
        renderFinishButton = (
            <div>
                <form style={{display: 'flex', justifyContent: 'center'}} onSubmit={sendEmail}>
                    <input type="hidden" value={formData.route} name="route" />
                    <input type="hidden" value={formData.date} name="date" />
                    <input type="hidden" name="user_name" value={formData.name} />
                    <input type="hidden" name="bookingid" value={updatingBookingId} />
                    <input type="hidden" name="user_email" value={formData.email} />
                    <input type="hidden" name="kayaksTaking" value={formData.numOfKayaks} />
                    <input type="hidden" name="location" value={formData.pickUpLocation} />
                    <input type="hidden" name="price" value={priceTotal} />
                    <input type="hidden" name="startTime" value={formData.time} />
                    <Button style={{backgroundColor: '#0A4870'}} type="submit" value="send" >Finish</Button>
                </form>
            </div>
        )
    } else {
        renderFinishButton = (
            <div ref={paypal} ></div>
        )
    }
    
    return (
        <div>
            {renderFinishButton}
        </div>
    )
}
