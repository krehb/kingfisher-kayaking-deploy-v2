import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import '../../Componets/calendar/calendar.css';
import buildCalendar from '../../Componets/calendar/build';
import renderKayaks from '../../Componets/calendar/renderKayaks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import moment from 'moment';
import { Form } from 'react-bootstrap';

export default function Calendar({value, onChange, calendarData, kayaksInStock , routeSelected,   kayaksLeft, setKayaksLeft, booked2}) {
    const [calendar , setCalendar] = useState([]);

    const [guidedRoute, setGuideRoute] = useState('no guide');
    const [booked, setCalendarData] = useState([])
    const [displayingDataState, setDisplayingDataState] = useState([]);

    //react routing 
    const history = useHistory();



    useEffect(() => {
        if(routeSelected === 'Sangamon'){
            setCalendarData(calendarData)
        } else {
            setCalendarData(booked2)
        }
    }, [routeSelected])

    useEffect(() => {
        setCalendarData(calendarData)
    },)

    useEffect(() => {
        setCalendar(buildCalendar(value));
        setKayaksLeft(renderKayaks(value, kayaksInStock, booked));

        // rendering 'Guide on: {guideRoute}'
        setGuideRoute('no guided trip')

        const displayingDataArray = []

        booked.forEach(bookingData => {
            if ((bookingData.name === 'guide1706') && value.isSame(bookingData.date, 'day')){
                setGuideRoute(`${bookingData.route} guided`)
            }
            if(value.isSame(bookingData.date, 'day')){
                displayingDataArray.push(bookingData)
            }
        });

        setDisplayingDataState(displayingDataArray)

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
                    
                    if((kayaksBookedTotal === kayaksInStock) || ((kayaksBookedTotal) === kayaksInStock)) {
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
                    
                    if(((kayaksBookedTotal + 2) === kayaksInStock) || ((kayaksBookedTotal + 3) === kayaksInStock) || ((kayaksBookedTotal + 1) === kayaksInStock)) {
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
                    
                    if(((kayaksBookedTotal + 10) === kayaksInStock) || ((kayaksBookedTotal + 11) === kayaksInStock)) {
                        classes = bookedData.date
                    }
                }
            }
        })
        return day.isSame(classes, 'day')
    }



    function isGuided(day) {
        let classes = null
        let kayakCount = []

        booked.forEach(bookedData => {
            if (day.isSame(bookedData.date, 'day')) {
                let parsedKayaks = JSON.parse(bookedData.numOfKayaks)
                kayakCount.push(parsedKayaks)

                if (kayakCount.length > 0){
                    if (bookedData.name === 'guide1706'){
                        if (moment(bookedData.date).isAfter(new Date(), 'day')){
                            classes = bookedData.date
                        }
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
        // return ''
    }


    //making the guide change colors for it to pop
    const [guideClass,setGuideClass] = useState(true);
    let renderedGuideClass = 'guide-yes'
    if(guideClass){
        setTimeout(function(){ setGuideClass(false) }, 2000);
        renderedGuideClass = 'guide-yes'
    } else {
        renderedGuideClass = 'guide-yes color-change'
        setTimeout(function(){ setGuideClass(true) }, 300);
    }

    function guideStyle(day, value) {
        if (isGuided(day)) return renderedGuideClass
        if (beforeToday(day)) return 'guide-no'
        return 'guide-no'
    }
    function guideStyleForDay(day, value) {
        if (isGuided(day)) return 'guide-no'
        return 'guide-yes'
    }







    const backToHomeHandler = () => {
        history.push('/')
    }




    return ( 
        <div className='full-calendar' >
            <div className='top-half-calendar' >
                <div className='selection-footer ' >
                    <div className='info-text-header' >
                        <h>Admin Calendar</h>
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

                        <h6 className='cal-b-text' >Available: <span className='num-of-kayaks-on-that-day' >{kayaksLeft}</span> kayaks</h6>
                        <div className='legend' >
                        <div className='avalible' >Available</div>
                        <ul>
                            <li className='kayaks-8 l-item' ></li>
                            <li className='kayaks-6 l-item' ></li>
                            <li className='kayaks-4 l-item' ></li>
                            <li className='kayaks-2 l-item' ></li>
                            <li className='kayaks-0 l-item' ></li>
                        </ul>
                        <div className='unavalible'>Not Available</div>
                    </div>
                    </div>

                    <div >
                        <h6 className='cal-b-text guide' ><FontAwesomeIcon icon="compass" size="1x" /> Guided Trip: {guidedRoute} </h6>
                        <div className='direction-buttons' >
                        <div className='arrow'  >
                            <h3>Booking Data</h3>
                            {displayingDataState.map(data => {
                                return <div>
                                    <div>
                                    Name: {data.name}
                                    </div>
                                    <div>
                                    Number of Kayaks: {data.numOfKayaks}
                                    </div>
                                    <div>
                                    Email: {data.email}
                                    </div>
                                    <div>
                                    time: {data.time}
                                    </div>
                                    <div>
                                    pick-up: {data.pickUpLocation}
                                    </div>
                                    <br></br>
                                </div>
                            })}

                        </div>
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
            </div>
    );
}
