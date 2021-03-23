import React, {useState, useEffect, useRef} from 'react';
import './NewApp.css';

//pages
import About from './pages/about';
import HomePage from './pages/home';
import BookingPage from './pages/booking';
import SuccessPage from './pages/success';
import FormPage from './pages/formPage';
import PaymentPage from './pages/paymentPage';
import WaiverPage from './pages/signWaiverPage';
import CancelIndex from './pages/cancel/index';
import ErrorPage from './pages/errorPage';
import BlockBookingPage from './pages/blockBookingPage';
import Involved from  './pages/involved';
import Donate from './pages/donate';

//lib
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import moment from 'moment';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'video-react/dist/video-react.css'; // import css


//Awesome Fonts
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faArrowLeft, faArrowRight, faCloudRain, faCloud, faSun, faMeh, faSmile, faWater, faClock, faDollarSign, faPlus, faMapMarkerAlt, faCompass, faCalendarAlt, faExclamationCircle, faSnowflake, faCarSide , faSeedling, faFish, faAppleAlt, faDrumstickBite, faBug } from '@fortawesome/free-solid-svg-icons'

//components
import MyNavbar from './Componets/small-componets/Navbar/navbar';
import Footer from './Componets/small-componets/footer/footer';


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

export default function App(){

  //Awesome Fonts function
  library.add( faCheckSquare,faArrowLeft, faArrowRight, faCloudRain, faCloud, faSun, faMeh, faSmile, faWater, faClock,faDollarSign, faPlus , faMapMarkerAlt, faCompass, faCalendarAlt, faExclamationCircle, faSnowflake, faCarSide , faSeedling, faFish, faAppleAlt, faDrumstickBite, faBug );

  // firebase requirements
  const database = firebase.database();
  const ref = database.ref('bookings');
  const refSaltFork = database.ref('bookings-salt-fork');
  const refSettings = database.ref('settings')
  const refRoutes = database.ref('routes');

  // Use State AREA
  const [value , setValue] = useState(moment());
  const [routeSelected, setRouteSelected] = useState('no route')
  const [kayakStock, setkayakStock] = useState()
  const [formData, setFormData] = useState();
  const [waterLevelSetting, setWaterLevelSetting] = useState(1)
  const [routesList, setRoutes] = useState([]);
  const [routeCost, setRouteCost] = useState(0);
  const [bookingId, setBookingId] = useState(0);
  const [blockBooking, setBlockBooking] = useState(false)
  // booked dates state for calendar
  const booked = useState({bookings: []})
  const booked2 = useState({bookings2: []})

  
  //rendering the data from the firebase for the calendar & rendering settings
  useEffect(() => {
    ref.on('value', gotDataHandler, errDataHandler);
    refSaltFork.on('value', gotDataHandler2, errDataHandler);
    refSettings.on('value', gotSettingsHandler, errDataHandler)
    refRoutes.on('value', gotRouteDataHandler, errDataHandler);
  },[])


  const array = []
  const gotDataHandler = (data) => {
    const dataBookings = data.val();
    const keys = Object.keys(dataBookings);
    for (let i = 0; i < keys.length; i ++){
      let k = keys[i]
      const list = dataBookings[k]
      const bookingItem = {date: list.date, numOfKayaks: list.numOfKayaks, name: list.name, route: list.route, bookingid: list.bookingid, key: k, timeBooked: list.timeBooked}
      array.push(bookingItem)
    }
    booked[1]({bookings: array})
  }
  const array2 = []
  const gotDataHandler2 = (data) => {
    const dataBookings = data.val();
    const keys = Object.keys(dataBookings);
    for (let i = 0; i < keys.length; i ++){
      let k = keys[i]
      const list = dataBookings[k]
      const bookingItem = {date: list.date, numOfKayaks: list.numOfKayaks, name: list.name, route: list.route, bookingid: list.bookingid, key: k, timeBooked: list.timeBooked}
      array2.push(bookingItem)
    }
    booked2[1]({bookings2: array2})
  }
  //calling routes list + details
  const gotRouteDataHandler = (data) => {
    const dataRoutes = data.val();
    const keys = Object.keys(dataRoutes);
    for (let i = 0; i < keys.length; i ++){
      let k = keys[i]
      const list = dataRoutes[k]
      setRoutes(routesList => [...routesList, list])
    }
  }
  const gotSettingsHandler = (data) => {
    const dataSettings = data.val()
    setkayakStock(dataSettings.kayakStock)
    setWaterLevelSetting(dataSettings.waterLevelLimit)
    setBookingId(dataSettings)
    setBlockBooking(dataSettings.blockBooking)
  }
  const errDataHandler = (err) => {
    console.log('Error!')
    console.log(err)
  }



  //nav scroll for booking 
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  let renderBooking = null
  if (blockBooking) {
    renderBooking = <BlockBookingPage/>
  } else {
    renderBooking = (
      <FormPage  
                    routeSelected={routeSelected}
                    value={value}
                    kayaksInStock={kayakStock}
                    kayaks={booked[0].bookings}
                    formData={formData}
                    setFormData={setFormData}
                    bookingId={bookingId}
                    />
    )
  }


  //whats rendered to the DOM
  return (
      <Router>
      <div >
          <MyNavbar executeScroll={executeScroll} />
          <Switch>
          <Route path='/about' render={()=> <About
            bookingId={bookingId}

          />} />
          <Route path='/booking/:id/form/pay' render={() => <PaymentPage  
              routeSelected={routeSelected}
              value={value}
              formData={formData}
              routesList={routesList}
              routeCost={routeCost}
              bookingId={bookingId}
              />}/>
          <Route path='/booking/:id/form' render={() => renderBooking}/>
          <Route path='/booking/:id' render={() => <BookingPage  
              routeSelected={routeSelected}
              value={value}
              setValue={setValue}
              booked={booked[0].bookings}
              booked2={booked2[0].bookings2}
              kayaksInStock={kayakStock}
              kayaks={booked[0].bookings}
              />}/>
          <Route path='/success' exact render={() => <SuccessPage formData={formData} />} />
          <Route path='/cancel-trip' exact render={() => <CancelIndex booked={booked[0].bookings} />} />
          <Route path='/error' exact render={() => <ErrorPage  />} />
          <Route path='/waiver' exact render={() => <WaiverPage />} />
          <Route path='/involved' exact render={() => <Involved />} />
          <Route path='/donate' exact render={() => <Donate />} />
          <Route path='/' exact render={() => <HomePage
              myRef={myRef} 
              setRouteSelected={setRouteSelected} 
              waterLevelSetting={waterLevelSetting}
              routesList={routesList}
              setRouteCost={setRouteCost} />} />
          </Switch>

          <Footer/>
      </div>
      </Router>
  )
}