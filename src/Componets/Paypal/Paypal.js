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


    useEffect(() => {
        setBookingId(formData.bookingid);

    });




    useEffect(()=> {

        let total = null
        let descr = null

        if(formData.numOfKayaks > 0 || formData.numOfCanoe > 0){
            if(formData.numOfKayaks === undefined){
                total = canoeCost
                setPriceTotal(total)
                descr = `${formData.numOfCanoe} canoe on a route on ${formData.route}`
            } else {
                total = (formData.numOfKayaks*routeCost)+(formData.numOfCanoe * canoeCost)
                setPriceTotal(total)
                descr = `${formData.numOfKayaks} kayak(s) and ${formData.numOfCanoe} canoe on a route on ${formData.route}`
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
                            description: `${descr}`,
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
                sendToDatabase()
                submitAgreementHandler()
                sendEmail();
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    },[])








    //send 'Agreed to Waiver to Google Drive'
    const submitAgreementHandler = async (e) => {
        try {
            const response = await fetch(`https://v1.nocodeapi.com/kingfisher/google_sheets/${process.env.REACT_APP_WAIVER_SHEET_ID}?tabId=Sheet1`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([[true, formData.name, new Date().toLocaleString()]])
            });
            await response.json()
        } catch (err) {
            console.log(err)
        }
    }

    //sending email
    function sendEmail() {
        var templateParams = {
            date: formData.date,
            route: formData.route,
            user_name: formData.name,
            user_email: formData.email,
            bookingid: updatingBookingId,
            kayaksTaking: formData.numOfKayaks,
            canoeTaking: formData.numOfCanoe,
            location: formData.pickUpLocation,
            price: renderTotalPrice,
            startTime: formData.time
        };
        emailjs.send(`${process.env.REACT_APP_EMAIL_SERVICE_ID}`, `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`, templateParams, `${process.env.REACT_APP_EMAIL_USER_ID}`)
            .then((result) => {
                console.log(result.text);
                console.log('was emailed')
            }, (error) => {
                console.log(error.text);
            });
        history.push('/success');
    }



    //submitting form to firebase database
    const sendToDatabase = () => {
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
        if(formData.route === "Sangamon (Half Route)"){
            refSaltFork.push(formData)
        } else {
            ref.push(formData);
        }


    }

    return (
        <div  ref={paypal} ></div>
    )
}
