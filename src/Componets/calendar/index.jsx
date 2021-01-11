import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './calendar.css';
import buildCalendar from './build';
import renderKayaks from './renderKayaks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import Weather from '../weather/weather';

export default function Calendar({value, onChange, back, booked, kayaksInStock , routeSelected, setViewing}) {
    const [calendar , setCalendar] = useState([]);
    const [kayaksLeft, setKayaksLeft] = useState();
    const [guidedRoute, setGuideRoute] = useState('no guide');

    //react routing 
    const history = useHistory();

    useEffect(() => {
        setCalendar(buildCalendar(value));
        setKayaksLeft(renderKayaks(value, kayaksInStock, booked));

        // rendering 'Guide on: {guideRoute}'
        setGuideRoute('no guide')
        booked.forEach(bookingData => {
            if ((bookingData.name === 'guide1706') && value.isSame(bookingData.date, 'day')){
                setGuideRoute(bookingData.route)
            }
        });

    }, [value])

    function currMonthName() {
        return value.format('MMMM')
    }

    function currYear() {
        return value.format('YYYY')
    }

    function prevMonth() {
        return value.clone().subtract(1, 'month')
    }

    function nextMonth() {
        return value.clone().add(1, 'month')
    }

    function thisMonth() {
        return value.isSame(new Date(), 'month')
    }











    //styling
    function isSelected(day, value) {
        return value.isSame(day, 'day');
    }
    function beforeToday(day) {
        return day.isBefore(new Date(), 'day');
    }
    function isToday(day) {
        return day.isSame(new Date(), 'day');
    }


     

        //styling num of kayaks
        // 0 left
    function isBooked0(day) {
        let kayakCount = []
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let classes = null  
        booked.forEach(bookedData => {
            if (day.isSame(bookedData.date, 'day') ) {
                let parsedKayaks = JSON.parse(bookedData.numOfKayaks)
                kayakCount.push(parsedKayaks)

                if (kayakCount.length > 0){
                    let kayaksBookedTotal = kayakCount.reduce(reducer)
                    
                    if((kayaksBookedTotal === kayaksInStock) || ((kayaksBookedTotal + 1) === kayaksInStock)) {
                        classes = bookedData.date
                    }
                }
            }
        })
        return day.isSame(classes, 'day')
    }



        // 2 + left
    function isBooked2(day) {
        let kayakCount = []
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let classes = null
        booked.forEach(bookedData => {
            if (day.isSame(bookedData.date, 'day')) {
                let parsedKayaks = JSON.parse(bookedData.numOfKayaks)
                kayakCount.push(parsedKayaks)

                if (kayakCount.length > 0){
                    let kayaksBookedTotal = kayakCount.reduce(reducer)
                    
                    if(((kayaksBookedTotal + 2) === kayaksInStock) || ((kayaksBookedTotal + 3) === kayaksInStock)) {
                        classes = bookedData.date
                    }
                }
            }
        })
        return day.isSame(classes, 'day')
    }

        // 4 + left
    function isBooked4(day) {
        let kayakCount = []
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let classes = null
        booked.forEach(bookedData => {
            if (day.isSame(bookedData.date, 'day')) {
                let parsedKayaks = JSON.parse(bookedData.numOfKayaks)
                kayakCount.push(parsedKayaks)

                if (kayakCount.length > 0){
                    let kayaksBookedTotal = kayakCount.reduce(reducer)
                    
                    if(((kayaksBookedTotal + 4) === kayaksInStock) || ((kayaksBookedTotal + 5) === kayaksInStock)) {
                        classes = bookedData.date

                    }
                }
            }
        })
        return day.isSame(classes, 'day')
    }

        // 6 + left
    function isBooked6(day) {
        let kayakCount = []
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let classes = null
        booked.forEach(bookedData => {
            if (day.isSame(bookedData.date, 'day')) {
                let parsedKayaks = JSON.parse(bookedData.numOfKayaks)
                kayakCount.push(parsedKayaks)

                if (kayakCount.length > 0){
                    let kayaksBookedTotal = kayakCount.reduce(reducer)
                    
                    if(((kayaksBookedTotal + 6) === kayaksInStock) || ((kayaksBookedTotal + 7) === kayaksInStock)) {
                        classes = bookedData.date
                    }
                }
            }
        })
        return day.isSame(classes, 'day')
    }



    function isGuided(day) {
        let classes = null
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let kayakCount = []

        booked.forEach(bookedData => {
            if (day.isSame(bookedData.date, 'day')) {
                let parsedKayaks = JSON.parse(bookedData.numOfKayaks)
                kayakCount.push(parsedKayaks)

                if (kayakCount.length > 0){
                    if (bookedData.name === 'guide1706'){
                        classes = bookedData.date
                    }
                }
            }
        })
        return day.isSame(classes, 'day')
    }


    function dayStyles(day, value) {
        if (beforeToday(day)) return 'before'
        if (isSelected(day, value)) return 'red'
        if (isToday(day)) return 'today'
        if (isBooked0(day)) return 'kayaks-0'
        if (isBooked2(day)) return 'kayaks-2'
        if (isBooked4(day)) return 'kayaks-4'
        if (isBooked6(day)) return 'kayaks-6'
        return ''
    }




    function guideStyle(day, value) {
        if (isGuided(day)) return 'guide-yes'
        return 'guide-no'
    }
    function guideStyleForDay(day, value) {
        if (isGuided(day)) return 'guide-no'
        return 'guide-yes'
    }




    // const guideRouteHandler = (booked, value) => {
    //     let select = 'no guide'

    //     booked.forEach(bookingData => {
    //         if ((bookingData.name === 'guide1706') && value.isSame(bookingData.date, 'day')){
    //             select = bookingData.route
    //         }
    //     });

    //     return select
    // }



    const backToHomeHandler = () => {
        history.push('/')
    }




    return ( 
        <div className='full-calendar' >
            <div className='top-half-calendar' >
                <div className='selection-footer ' >
                    <div className='info-text-header' >
                        <h>Pick A Day</h>
                    </div>
                    <div className='parent' >
                        <div className='info-text-header-underline' >o</div>
                    </div>
                    <div className='info-text-header-2' >
                        <div>
                            <h><FontAwesomeIcon icon="map-marker-alt"  size="1x" /> {routeSelected}</h>
                        </div>
                        <div>
                            <h><FontAwesomeIcon icon="calendar-alt"  size="1x" /> Date: {value.format("MM/DD")}</h>
                        </div>
                    </div>
                    <div className='info-text' >

                        <h6 className='cal-b-text' >Avalible: {kayaksLeft} kayaks</h6>
                        <h6 className='cal-b-text' ><FontAwesomeIcon icon="compass" size="1x" /> Guide: {guidedRoute}</h6>
                    </div>
                    <div className='direction-buttons' >
                        <div className='arrow' onClick={backToHomeHandler}   >
                                <FontAwesomeIcon icon="arrow-left" size="1x" /> Back
                        </div>
                        <div className='arrow' onClick={() => setViewing(false)}  >
                                Continue <FontAwesomeIcon icon="arrow-right"  size="1x" />
                        </div>
                    </div>
                </div>
                <div className='calendar'>
                    <div className='header'>
                        <div className='previous' onClick={() => !thisMonth() && onChange(prevMonth())}>
                        {!thisMonth() ? <FontAwesomeIcon icon="arrow-left" size="1x" /> : null}
                        </div>
                        <div className='current'>
                            {currMonthName()} {currYear()}
                        </div>
                        <div className='next' onClick={() => {onChange(nextMonth())}}><FontAwesomeIcon icon="arrow-right"  size="1x" /></div>
                    </div>
                    <div className='body'>
                        <div className="day-names">
                            {
                                ["s","m","t","w","t","f","s"].map(d => <div className='week'>{d}</div>)
                            }
                        </div>
                        {calendar.map((week) => (
                            <div>
                                {week.map((day) => (
                                    <div  className='day' id={day.format("D")} key={day} 
                                    onClick={() => { !beforeToday(day) && onChange(day)
                                        // console.log('clicked', day)
                                        }}>
                                        <div className={dayStyles(day, value)}>
                                            <span className={guideStyleForDay(day, value)} >{day.format('D').toString()}</span>
                                            <FontAwesomeIcon icon="compass"  className={guideStyle(day, value)}  size="2x" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='bottom-half-calendar' >
                <Weather value={value} />
            </div>
            </div>
    );
}