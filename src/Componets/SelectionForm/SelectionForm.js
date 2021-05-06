import React,{useState, useEffect} from 'react'
import { Form, Col, Container, Row, OverlayTrigger, Tooltip, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import emailjs from 'emailjs-com';
import { useHistory } from "react-router-dom";



function SelectionFrom({ kayaks, route, value, kayaksInStock, kayaksLeftList, setFormView, setFormData, bookingId, routesList, FromCalendarKayaksLeft, kayaksLeftOther  }) {

    const [tripName, SetTripName] = useState('no trip name');
    const [kayaksTaking, setKayaksTaking] = useState();
    const [startTime, setTime] = useState('8am');
    const [location, setLocation] = useState("I'll drive to the starting spot");
    const [otherLoaction, SetOtherLocation] = useState('not selected');
    const [email, setEmail] = useState('not selected');
    const [ifChecked, setChecked] = useState(false);
    const [alertCheck, setAlertCheck] = useState(false);
    const [canoe, setCanoe] = useState(true)
    const [sendingCanoeData, setSendingCanoeData] = useState(0);
    const [formStartTime, setFormStartTime] = useState('9:30 AM')



    //for rendering canoe only on weekend and with more than 4 kayaks
    const[renderCanoeForList, setRenderCanoeForList] = useState(false) 

    useEffect(() => {
        if(value.format("dddd") === 'Saturday' || value.format("dddd") === 'Sunday'){
            console.log('it is the weekend')
            setRenderCanoeForList(true)
        } else {
            console.log('no is weekkend')
            setRenderCanoeForList(false)
        }
    },[]);

    //rendering dynamic Canoe if the 1 canoe is availible - part 2
    let renderCanoe = null
    if(canoe){
        renderCanoe = (
            <>
                <option value={0} >0 canoe</option>
                <option value={1} >1 canoe ($50)</option>
            </>
        )
    } else {
        renderCanoe = (
            <>
                <option value={0} >0 canoe</option>
            </>   
        )
    }


  let random = Math.floor(Math.random() * Math.floor(10000000))

  useEffect(() => {
    //rendering dynmaic start time
    routesList.forEach(routeData => {
        if(routeData.name === route){
            setFormStartTime(routeData.time)
        }
    });


 

    //rendering dynamic Canoe if the 1 canoe is availible - part 1
    kayaks.forEach(booking => {
        if (value.isSame(booking.date, 'day') && booking.numOfCanoe >= 0 ) {
            setCanoe(false)
        }
    });
  },[]);





  //routing for the 'continue' button
  let history = useHistory();
  function handleClick() {
    history.push(`/booking/${route}/form/pay`);
  }

  //render error if form isn't fully filled
  const continueButtonHandler = () => {
      if( email === '' || email === 'not selected'  || tripName === 'no trip name' || ifChecked === false){
          setAlertCheck(true)
      } else {
          setAlertCheck(false)

          if (location === 'Other (only within city limits)'){
            let booking = {
                route: route,
                name: tripName,
                numOfKayaks: kayaksTaking,
                time: startTime,
                pickUpLocation: otherLoaction,
                date: value.format("MM/DD/YY"),
                email: email,
                timeBooked: moment().format('MMMM Do YYYY, h:mm:ss a'),
                bookingid: random,
                numOfCanoe: sendingCanoeData
            }
            setFormData(booking)
          } else {
            let booking = {
                route: route,
                name: tripName,
                numOfKayaks: kayaksTaking,
                time: startTime,
                pickUpLocation: location,
                date: value.format("MM/DD/YY"),
                email: email,
                timeBooked: moment().format('MMMM Do YYYY, h:mm:ss a'),
                bookingid: random,
                numOfCanoe: sendingCanoeData
            }
            setFormData(booking)
          }

          handleClick();
      }
  }

  let ifAlert = null
  if(alertCheck){
    ifAlert = (
        <Alert  variant='warning'>
            You need to fill out the whole form & agree
        </Alert>
      )
  } else {
      ifAlert = null
  }



// dynamic Kayaks Option
  let kayaksOptions = null

  //rendering nonBooked days
  let renderKayaksOptions = []
  for (let i = 0; i < kayaksInStock + 1; i++){
    renderKayaksOptions.push(i)
    kayaksOptions = renderKayaksOptions.map(x=> (<option value={x} >{x} kayak(s)</option>))
  }


  //rendering booked days
  let datesBookArray = []
  let kayaksLeft = null
  let kayaksLeftArray = []
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

    //when day is selected
    kayaks.forEach(booking => {
        if (value.isSame(booking.date, 'day') ) {
            let parsedKayaks = JSON.parse(booking.numOfKayaks)
            datesBookArray.push(parsedKayaks)

            if(datesBookArray.length > 1){
                // muliple bookings on single date
                let kayaksBookedTotal = datesBookArray.reduce(reducer)
                let calculatedLeft = kayaksInStock - kayaksBookedTotal
                kayaksLeft = calculatedLeft

            } else if (datesBookArray.length === 1){
                // single booking on single date
                let calculatedLeft = kayaksInStock - parsedKayaks
                kayaksLeft = calculatedLeft
            }
        }
    });

    // rendering the logic from above if selected day is booked
    if (!(kayaksLeft === null)){
        for (let i = 0; i < kayaksLeft + 1; i++){
            kayaksLeftArray.push(i)
        }
        kayaksOptions = kayaksLeftArray.map(x=> (<option value={x} >{x} kayak(s)</option>))
    }


    // this is real confusing because we have mulitple routes on the same time, so to make it no possible to over book the kayaks on different routes
    if(startTime === '2:00 PM' || route === 'Sangamon'){
        console.log('it is 2pm switch the kayak option')
        console.log(kayaksLeftList, 'from this list')
        console.log(kayaksLeftOther, 'other list')
        console.log(kayaksInStock - (kayaksInStock - kayaksLeftOther) - (kayaksInStock- kayaksLeftList), 'how many kayaks are left at this time')
        kayaksLeftArray = []

        //some weird error that 1 to many kayaks on the sangamon route opposed to the sangamon half route
        if(route === 'Sangamon'){
            const newKayaksLeft = kayaksInStock - (kayaksInStock - kayaksLeftOther) - (kayaksInStock- kayaksLeftList) - 1

            for (let i = 0; i < newKayaksLeft + 1; i++){
                kayaksLeftArray.push(i)
            }
            kayaksOptions = kayaksLeftArray.map(x=> (<option value={x} >{x} kayak(s)</option>))
        } else {
            const newKayaksLeft = kayaksInStock - (kayaksInStock - kayaksLeftOther) - (kayaksInStock- kayaksLeftList)
            for (let i = 0; i < newKayaksLeft + 1; i++){
                kayaksLeftArray.push(i)
            }
            kayaksOptions = kayaksLeftArray.map(x=> (<option value={x} >{x} kayak(s)</option>))
    
        }
    }

    return (
        <div>
            <Container fluid >
            <Row className="justify-content-md-center">
                <Form  className='form shadow' >
                    <input type="hidden" value={route} name="route" />
                    <input type="hidden" value={value.format('MM/DD/yy')} name="date" />
                    <input type="hidden" name="user_name" value={tripName} />
                    <input type="hidden" name="user_email" value={email} />
                    <input type="hidden" name="kayaksTaking" value={kayaksTaking} />
                    <input type="hidden" name="location" value={location} />
                    <input type="hidden" name="otherLocation" value={otherLoaction} />
                    <input type="hidden" name="startTime" value={startTime} />

                    <div>
                        {ifAlert}
                    </div>

                    <div>
                        <div className='info-form' >
                            Fill Out Info
                        </div>
                    </div>

                    <div>
                        <div className='header-form' >
                            <FontAwesomeIcon icon="map-marker-alt"  size="1x" /> {route} on {value.format('MM/DD/yy')}
                        </div>
                    </div>

                    <div className='form-body-top' >
                        <div>
                            <Form.Group as={Col} controlId="formGridname">
                                <Form.Control type="text" placeholder="Full Name" onChange={(e)=> {SetTripName(e.target.value)}} />
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Group as={Col} controlId="formGridphone">
                                <Form.Control type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} />
                            </Form.Group>
                        </div>

                    </div>

                    <div>
                        <div className='header-form' >
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip id="tooltip">This is where we will pick you up for the start of the trip</Tooltip>}
                            >
                                {({ ref, ...triggerHandler }) => (
                                <div variant="light"
                                    {...triggerHandler}
                                    className="d-inline-flex align-items-center" ref={ref} 
                                >Pick Up Location</div>
                                )}
                            </OverlayTrigger>
                        </div>
                    </div>

                    <div className='form-body-middle' >
                        <div>
                            <Form.Control as="select" defaultValue="Choose..."  onChange={(e) => {setLocation(e.target.value)}}>
                                <option style={{backgroundColor: '#CAE6C3'}} >I'll drive to the starting spot</option>
                                <option style={{backgroundColor: '#C9EE8C'}} >MarketPlace Mall (Field & Streams Lot)</option>
                                <option style={{backgroundColor: '#C9EE8C'}} >LincolnSquare Mall (South Side)</option>
                                <option style={{backgroundColor: '#C9EE8C'}} >Savoy Walmart (North East Corner)</option>
                                <option style={{backgroundColor: '#8CE7EE'}} >Other (only within city limits)</option>
                            </Form.Control>
                        </div>

                        {location === 'Other (only within city limits)' &&
                            <div>
                                <Form.Group as={Col} controlId="formGridname">
                                    <Form.Control type="text" placeholder="if selected 'Other'" onChange={(e)=> {SetOtherLocation(e.target.value)}} />
                                </Form.Group>
                            </div>
                        }

                    </div>

                    <div>
                        <div className='header-form' >
                            <Form.Label className='form-text'>Start Time</Form.Label>
                        </div>
                    </div>

                    <div  className='form-body-bottom'>
                        <div >
                            <Form.Control as="select" defaultValue="Choose..."  onChange={(e)=> {setTime(`${e.target.value}`); console.log(e.target.value)}}>
                                <option>{formStartTime}</option>
                                {route === 'Sangamon (Half Route)' &&
                                    <option>2:00 PM</option>
                                }
                            </Form.Control>
                        </div>
                        <div>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control as="select" defaultValue="Choose..."  onChange={(e)=> {setKayaksTaking(e.target.value)}}>
                                    {kayaksOptions}
                                </Form.Control>
                            </Form.Group>
                        </div>
                        <div>

                            {renderCanoeForList &&
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Control as="select" defaultValue="Choose..."  onChange={(e)=> {setSendingCanoeData(e.target.value)}}>
                                        {renderCanoe}
                                    </Form.Control>
                                </Form.Group>
                            }

                        </div>
                    </div>

                    <div>
                        <Form.Group id="formGridCheckbox" >
                            <a target='blank' href='https://kingfisherkayaking.com/waiver' >
                                <Form.Check onChange={(e) => {setChecked(e.target.checked)}}  type="checkbox" label="I have read the waiver, I legelly agree to it." />
                            </a>
                        </Form.Group>

                    </div>

                    <div className='nav-buttons' >
                        <div className='arrow' onClick={continueButtonHandler}>
                            <span> Book </span><FontAwesomeIcon icon="arrow-right"  size="1x" /> 
                        </div>
                    </div>
                </Form>
            </Row>
        </Container>
        </div>
    )
}

export default SelectionFrom;