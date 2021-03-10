import React, {useRef, useEffect, useState} from 'react';
import emailjs from 'emailjs-com';
import {useHistory} from 'react-router-dom';
import firebase from 'firebase';
import { Button } from 'react-bootstrap';

export default function Donate( {price} ) {
    
    const paypal = useRef()
    //going to success page after payment
    let history = useHistory();

    function handleClick() {
      history.push("/success");
    }
    function handleErrorPage() {
        history.push("/error");
    }



    useEffect(()=> {


        console.log(price)


    

        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [
                        {
                            description: `Donating to Kingfisher Kayaking - $ ${price}`,
                            amount: {
                                currency_code: 'USD',
                                value: price
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







    

    
    return (
        <div>
            <div ref={paypal} ></div>
        </div>
    )
}
