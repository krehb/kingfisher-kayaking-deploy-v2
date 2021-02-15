import React, { useState} from 'react';
import { Alert, Button, Spinner} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import firebase from 'firebase';
import emailjs from 'emailjs-com';
import moment from 'moment'

export default function Change({booked}) {

    let history = useHistory();
    const database = firebase.database();
    

    const [email, setEmail] = useState('');
    const [bookingNumber, setBookingNumber] = useState(0);
    const [error, setError] = useState(false);
    const [renderSpinner, setRenderSpinner] = useState(false);
    const [other, setOther] = useState(false);
    const [otherContent, setOtherContent] = useState('');
    const [route, setRoute] = useState('');
    const [numOfKayaks, setNumOfKayaks] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [timeOfBooking, setTimeOfBooking] = useState('');

    const delateBookingHanlder = () => {
        //delating booking from database
        booked.forEach(bookingData => {
            if (`${bookingData.bookingid}` === bookingNumber) {
                console.log(bookingData)
                setRoute(bookingData.route)
                setNumOfKayaks(bookingData.numOfKayaks)
                setName(bookingData.name)
                setDate(bookingData.date)
                setTimeOfBooking(bookingData.timeBooked)
                setTimeout(function(){ console.log(route, numOfKayaks, name); }, 3000);
                database.ref(`bookings/${bookingData.key}`).remove();
            } else {
                console.log('error')
                setTimeout(function(){ setError(true) }, 2000);
            }
        });
    }

    const sendEmailHandler = (e) => {
        // send email
        emailjs.sendForm(`${process.env.REACT_APP_EMAIL_SERVICE_ID}`, `template_imrf2r4`, e.target, `${process.env.REACT_APP_EMAIL_USER_ID}`)
            .then((result) => {
                console.log(result.text);
                console.log('was emailed')
            }, (error) => {
                console.log(error.text);
            });
        history.push('/success');
    }


    const submitChangeHandler = (e) => {
        e.preventDefault();

        if(other && otherContent === '' || email === '' || bookingNumber === 0 ){
            setError(true)
        } else {
            console.log('form is correct')
            delateBookingHanlder();
            setRenderSpinner(true)
            setTimeout(function(){ setRenderSpinner(false); sendEmailHandler(e); }, 2000);
        }
    }




    let renderError = null
    if(error){
        renderError = (
            <Alert onClose={() => setError(false)} variant='warning' dismissible >
                Error! The numbers don't match up or you didn't fill everything out
            </Alert>
        )
    } else {
        renderError = null
    }
    let renderOther = null
    if(other){
        renderOther =<input placeholder='Other' onChange={(e) => (setOtherContent(e.target.value))} type="text" />
    }
    if(!other){
        renderOther = null
    }

    let renderButton = null
    if(renderSpinner){
        renderButton = (
            <Spinner style={{marginLeft: '20px'}} animation="border" role="status">
                <span  className="sr-only">Loading...</span>
            </Spinner>
        )
    } else {
        renderButton = <Button type="submit" value="Submit">Submit</Button>
    }

    const otherHandler = (e) => {
        if(e.target.value === 'other'){
            setOther(true)
        } else {
            setOther(false)
            setOtherContent(e.target.value)
        }
    }

    return (
        <div >
            <br></br>
            {renderError}
            <h5 style={{color: '#0A4870', fontWeight: 700}} >Fill form below and you will get your money back in a couple days time or less.</h5>
            <p>This will delate your booking from the calendar and send us an email about your request. It may take some time to return the money, and when we are done, we will send you an email when it is completed. </p>
            <div className='waiver-form' >
                <form onSubmit={submitChangeHandler} >
                    <label style={{paddingRight: '10px', color: '#0A4870', fontWeight: 700}} for="cars">Reason for cancelation or change of dates</label>
                    <select style={{marginLeft: '5px'}} onChange={(e) => (otherHandler(e))} style={{ width: '200px', height: '30px'}} name="cars"  id="cars">
                        <option value='weather' >Weather</option>
                        <option value='time conflict' >Time conflict</option>
                        <option value='other' >Other</option>
                    </select>
                    <label> 
                        {renderOther}
                        <input style={{marginLeft: '5px'}} placeholder='Email' onChange={(e) => (setEmail(e.target.value))} type="text" name="email" />{'  '}
                        <input  style={{marginLeft: '5px'}} placeholder='Booking Number' onChange={(e) => (setBookingNumber(e.target.value))} type="text" name="number" />
                        <input type="hidden" name="bookingid" value={bookingNumber} />
                        <input type="hidden" name="user_email" value={email} />
                        <input type="hidden" name="user_date" value={date} />
                        <input type="hidden" name="user_date_booked" value={timeOfBooking} />
                        <input type="hidden" name="user_date_cancel" value={moment().format('MMMM Do YYYY, h:mm:ss a')} />
                        <input type="hidden" name="user_reason" value={otherContent} />
                        <input type="hidden" name="user_name" value={name} />
                        <input type="hidden" name="user_route" value={route} />
                        <input type="hidden" name="numOfKayaks" value={numOfKayaks} />
                    </label>
                {renderButton}
                </form>
            </div>
        </div>
    )
}

