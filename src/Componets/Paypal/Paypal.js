import React, {useRef, useEffect, useState} from 'react';
import emailjs from 'emailjs-com';
import {useHistory} from 'react-router-dom';
import firebase from 'firebase';


export default function Paypal( {formData, routeCost} ) {
    
    const paypal = useRef()
    //going to success page after payment
    let history = useHistory();

    function handleClick() {
      history.push("/success");
    }
    



    useEffect(()=> {



        let total = formData.numOfKayaks*routeCost



        //sending payment through paypal
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [
                        {
                            description: "Cool and accurate kit",
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
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    },[])




    // firebase requirements
    const database = firebase.database();
    const ref = database.ref('bookings');

      //submitting form to firebase database
    const submitHandler = () => {
        console.log('booking sent to database');
        console.log(formData);
        // pushing data to database
        ref.push(formData);
    }

    function sendEmail(e) {
        e.preventDefault();
        console.log('was clicked')
        submitHandler();

        emailjs.sendForm('service_n7gxrhi', 'template_eay3k5p', e.target, 'user_eKTDTnT6b5suYFim5twvR')
            .then((result) => {
                console.log(result.text);
                console.log('was emailed')
            }, (error) => {
                console.log(error.text);
            });

        history.push('/success');
    }

    
    return (
        <div>
            <div ref={paypal} ></div>
            <div>
                <form onSubmit={sendEmail}>
                    <input type="hidden" value={formData.route} name="route" />
                    <input type="hidden" value={formData.date} name="date" />
                    <input type="hidden" name="user_name" value={formData.name} />
                    <input type="hidden" name="user_email" value={formData.email} />
                    <input type="hidden" name="kayaksTaking" value={formData.numOfKayaks} />
                    <input type="hidden" name="location" value={formData.pickUpLocation} />
                    <input type="hidden" name="otherLocation" value={formData.other} />
                    <input type="hidden" name="startTime" value={formData.time} />
                    <button type="submit" value="send" >Fake Pay</button>
                </form>
            </div>
        </div>
    )
}
