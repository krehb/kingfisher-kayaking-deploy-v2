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

//lib
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import moment from 'moment';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'video-react/dist/video-react.css'; // import css


//Awesome Fonts
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faArrowLeft, faArrowRight, faCloudRain, faCloud, faSun, faMeh, faSmile, faWater, faClock, faDollarSign, faPlus, faMapMarkerAlt, faCompass, faCalendarAlt, faExclamationCircle, faSnowflake } from '@fortawesome/free-solid-svg-icons'

//components
import MyNavbar from './Componets/small-componets/Navbar/navbar';
import Footer from './Componets/small-componets/footer/footer';


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

export default function App(){

  //Awesome Fonts function
  library.add( faCheckSquare,faArrowLeft, faArrowRight, faCloudRain, faCloud, faSun, faMeh, faSmile, faWater, faClock,faDollarSign, faPlus , faMapMarkerAlt, faCompass, faCalendarAlt, faExclamationCircle, faSnowflake );

  // firebase requirements
  const database = firebase.database();
  const ref = database.ref('bookings');
  const refSettings = database.ref('settings')

  // Use State AREA
  const [value , setValue] = useState(moment());
  const [routeSelected, setRouteSelected] = useState('no route')
  const [kayakStock, setkayakStock] = useState()
  const [formData, setFormData] = useState();
  const [waterLevelSetting, setWaterLevelSetting] = useState(1)
  const [routesList, setRoutes] = useState([]);
  const [routeCost, setRouteCost] = useState(0);
  // booked dates state for calendar
  const booked = useState({bookings: []})

  
  //rendering the data from the firebase for the calendar & rendering settings
  useEffect(() => {
    ref.on('value', gotDataHandler, errDataHandler);
    refSettings.on('value', gotSettingsHandler, errDataHandler)
  },[])

  useEffect(() => {
    console.log(routeCost)
  },[routeCost])

  const array = []
  const gotDataHandler = (data) => {
    const dataBookings = data.val();
    const keys = Object.keys(dataBookings);
    for (let i = 0; i < keys.length; i ++){
      let k = keys[i]
      const list = dataBookings[k]
      const bookingItem = {date: list.date, numOfKayaks: list.numOfKayaks, name: list.name, route: list.route}
      array.push(bookingItem)
    }
    booked[1]({bookings: array})
  }
  const gotSettingsHandler = (data) => {
    const dataSettings = data.val()
    setkayakStock(dataSettings.kayakStock)
    setWaterLevelSetting(dataSettings.waterLevelLimit)
  }
  const errDataHandler = (err) => {
    console.log('Error!')
    console.log(err)
  }



  //nav scroll for booking 
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)




  //whats rendered to the DOM
  return (
      <Router>
      <div >
          <MyNavbar executeScroll={executeScroll} />
          <Switch>
          <Route path='/about' component={About} />
          <Route path='/booking/:id/form/pay' render={() => <PaymentPage  
              routeSelected={routeSelected}
              value={value}
              formData={formData}
              routesList={routesList}
              routeCost={routeCost}
              />}/>
          <Route path='/booking/:id/form' render={() => <FormPage  
              routeSelected={routeSelected}
              value={value}
              kayaksInStock={kayakStock}
              kayaks={booked[0].bookings}
              formData={formData}
              setFormData={setFormData}
              />}/>
          <Route path='/booking/:id' render={() => <BookingPage  
              routeSelected={routeSelected}
              value={value}
              setValue={setValue}
              booked={booked[0].bookings}
              kayaksInStock={kayakStock}
              kayaks={booked[0].bookings}
              />}/>
          <Route path='/success' exact render={() => <SuccessPage formData={formData} />} />
          <Route path='/waiver' exact render={() => <WaiverPage />} />
          <Route path='/' exact render={() => <HomePage
              myRef={myRef} 
              setRouteSelected={setRouteSelected} 
              waterLevelSetting={waterLevelSetting}
              routesList={routesList}
              setRoutes={setRoutes}
              setRouteCost={setRouteCost} />} />
          </Switch>

          <Footer/>
      </div>
      </Router>
  )
}