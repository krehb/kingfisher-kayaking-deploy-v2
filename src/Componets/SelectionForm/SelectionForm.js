import React,{useState} from 'react'
import { Form, Col, Container, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from 'firebase';
import moment from 'moment';
import './SelectionForm.css';


function SelectionFrom({showForm, kayaks, route, value, kayaksInStock , back, showStore, storePath }) {

    const [tripName, SetTripName] = useState('no trip name');
    const [kayaksTaking, setKayaksTaking] = useState();
    const [startTime, setTime] = useState('not selected');
    const [location, setLocation] = useState('not selected');
    const [otherLoaction, SetOtherLocation] = useState('not selected');
    const [phoneNum, setPhone] = useState('not selected');
    const [ifChecked, setChecked] = useState();



  // firebase requirements
  const database = firebase.database();
  const ref = database.ref('bookings');


  const booking = {
    route: route,
    name: tripName,
    numOfKayaks: kayaksTaking,
    time: startTime,
    pickUpLocation: location,
    other: otherLoaction,
    date: value.format("MM/DD/YY"),
    phone: phoneNum,
    timeBooked: moment().format('MMMM Do YYYY, h:mm:ss a')
  }

  //submitting form to firebase database
  const submitHandler = () => {
    if(kayaksTaking > 0 && ifChecked){
      console.log('booking sent');
      ref.push(booking);
    showStore()
    } else {
      console.log('erroror')
      console.log(ifChecked)
    }
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










    // rending the correct store path

    let storeHref = null    

    if (!(kayaksOptions === null)){

        kayaksOptions.forEach(function callback(value, index)  {

            // num of kayaks selected on the form 

            if (kayaksTaking === `${index}`){

                // matching the firebase storepath with the num of kayaks taking

                storePath.forEach(element => {
                    if (storePath[index] === element){
                      storeHref = `${element}`
                    }
                });

            }

        });
    }




















    let selectionForm = null
    if (showForm){ selectionForm = ( 
        <Container fluid >
            <Row className="justify-content-md-center">
                <Col sm={8} >
                    <Form  className='form shadow'>
                        <Form.Row>
                            <div className='header-form' >
                                <FontAwesomeIcon icon="map-marker-alt"  size="1x" /> {route} on {value.format('D/MM/yy')}
                            </div>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridname">
                            <Form.Control type="text" placeholder="Name" onChange={(e)=> {SetTripName(e.target.value)}} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control as="select" defaultValue="Choose..."  onChange={(e)=> {setKayaksTaking(e.target.value)}}>
                                {kayaksOptions}
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridphone">
                            <Form.Control type="phone" placeholder="###-###-#### (your phone number)" onChange={(e) => {setPhone(e.target.value)}} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip id="tooltip">This is where we will pick you up for the start of the trip</Tooltip>}
                                >
                                    {({ ref, ...triggerHandler }) => (
                                    <Form.Label variant="light"
                                        {...triggerHandler}
                                        className="d-inline-flex align-items-center" ref={ref} className='form-text'
                                    >Pick Up Location</Form.Label>
                                    )}
                                </OverlayTrigger>
                                <Form.Control as="select" defaultValue="Choose..."  onChange={(e) => {setLocation(e.target.value)}}>
                                    <option>MarketPlace Mall (North East Corner)</option>
                                    <option>LincolnSquare Mall (South Side)</option>
                                    <option>Savoy Walmart (North East Corner)</option>
                                    <option>Other (enter address below)</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridname">
                            <Form.Control type="text" placeholder="if selected 'Other'" onChange={(e)=> {SetOtherLocation(e.target.value)}} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label className='form-text'>Start Time</Form.Label>
                                <Form.Control as="select" defaultValue="Choose..."  onChange={(e)=> {setTime(e.target.value)}}>
                                    <option>8:00 am</option>
                                    <option>9:30 am</option>
                                    <option>11:00 am</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>


                        <Form.Group id="formGridCheckbox" >
                            <a target='blank' href={'https://media.makeameme.org/created/haha-got-you.jpg'} >
                                <Form.Check onChange={(e) => {setChecked(e.target.checked)}}  type="checkbox" label="I agree to KingFisher Kayaking Terms of Service" />
                            </a>
                        </Form.Group>

                        <Row>
                            <Col className='button-hover'>
                                <div className='form-button no-hover' onClick={back}>
                                    <FontAwesomeIcon icon="arrow-left"  size="1x" /> <span> Back </span>
                                </div>
                            </Col>
                            <Col className='button-hover'>
                                <a  href={storeHref} >
                                    <div className='form-button no-hover' onClick={submitHandler}>
                                        <span > Continue </span><FontAwesomeIcon icon="arrow-right"  size="1x" />
                                    </div> 
                                </a>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );} else { selectionForm = (null)  };
    





    return (
        <div>
            {selectionForm}
        </div>
    )
}

export default SelectionFrom;