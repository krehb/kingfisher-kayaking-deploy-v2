import React, {useState, useEffect} from 'react';
import './App.css';

//lib
import moment from 'moment';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'video-react/dist/video-react.css'; // import css
import { Row, Col } from 'react-bootstrap';


//Awesome Fonts
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faArrowLeft, faArrowRight, faCloudRain, faCloud, faSun, faMeh, faSmile, faWater, faClock, faDollarSign, faPlus, faMapMarkerAlt, faCompass } from '@fortawesome/free-solid-svg-icons'

//components
import MyNavbar from './Componets/small-componets/Navbar/navbar';
import MyJumbotron from './Componets/small-componets/Jumbotron/jumbotron';
import Routes from './Componets/routes/routes';
import ShowCalendar from './Componets/calendar/showCalendar'
import SelectionFrom from './Componets/SelectionForm/SelectionForm';
import Footer from './Componets/small-componets/footer/footer';
import Video from './Componets/small-componets/video/video';
import ShowStore from './Componets/Ecwids/showStore'

import River from './Componets/rivers/rivers';




export default function App(){

  //Awesome Fonts function
  library.add( faCheckSquare,faArrowLeft, faArrowRight, faCloudRain, faCloud, faSun, faMeh, faSmile, faWater, faClock,faDollarSign, faPlus , faMapMarkerAlt, faCompass );

  // firebase requirements
  const database = firebase.database();
  const ref = database.ref('bookings');
  const refSettings = database.ref('settings')

  // Use State AREA
  const showCompent = useState({componets: [
    {jumbotron: true},
    {calendar: false},
    {price: false},
    {routes: true},
    {pickup: false},
    {selectionForm: false},
    {showLoading: true},
    {showWaiver: false}
  ]});
  const [value , setValue] = useState(moment());
  const AlertShow = useState({showAlert: null});
  const showVideo = useState({video: true});
  const showRiver = useState({River: false});
  const [showStore, setShowStore] = useState(false)
  const [routeSelected, setRouteSelected] = useState('no route')
  const [kayakStock, setkayakStock] = useState()
  const [waterLevelSetting, setWaterLevelSetting] = useState(1)
  const [storePath, setStorePath] = useState()

  // booked dates state for calendar
  const booked = useState({bookings: []})




  //selecting what should show
  const showCalendar = () => {showCompent[1]({componets: [{jumbotron: false}, {calendar: true}, {price: false}, {routes: false}, {pickup: false}, {selectionForm: false}, {showLoading: false}]});showVideo[1]({video:false});AlertShow[1]({showAlert: null}); setShowStore(false);};
  const showHomeHandler = () => {showCompent[1]({componets: [{jumbotron: false}, {calendar: false}, {price: false}, {routes: true}, {pickup: false}, {selectionForm: false},{showLoading: false}, {showVideo: true}]});showVideo[1]({video:false});AlertShow[1]({showAlert: null});   showRiver[1]({River: false}) };
  const showSelectionFormHandler = () => {showCompent[1]({componets: [{jumbotron: false}, {calendar: false}, {price: false}, {routes: false}, {pickup: false}, {selectionForm: true},{showLoading: false}]})};
  
  const showAlertHandler = () => {AlertShow[1]({showAlert: 2})}
  const showRiversHandler = () => {showRiver[1]({River: true});showCompent[1]({componets: [{jumbotron: false}, {calendar: false}, {price: false}, {routes: false}, {pickup: false}, {selectionForm: false}, {showLoading: false}]});showVideo[1]({video:false});AlertShow[1]({showAlert: null})};

  const showingStore = () => {
    setShowStore(true)
    showCompent[1]({componets: [{jumbotron: false}, {calendar: false}, {price: false}, {routes: false}, {pickup: false}, {selectionForm: false}, {showLoading: false}]})
  }








  
  //rendering the data from the firebase for the calendar & rendering settings
  useEffect(() => {
    ref.on('value', gotDataHandler, errDataHandler);
    refSettings.on('value', gotSettingsHandler, errDataHandler)
    console.log('render calendar & settings')
  },[])
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
    setStorePath(dataSettings.storepath)
    setkayakStock(dataSettings.kayakStock)
    setWaterLevelSetting(dataSettings.waterLevelLimit)
  }

  const errDataHandler = (err) => {
    console.log('Error!')
    console.log(err)
  }

  const setRoute = (routeTitle) => {
    setRouteSelected(routeTitle)
    showCalendar()
  }



  //whats rendered to the DOM
  return (
      <div >
          <MyNavbar showHome={showHomeHandler} showRivers={showRiversHandler} />
          <River show={showRiver[0].River} />
          <Video showVideo={showVideo[0].video} />
          <MyJumbotron showJumbo={showCompent[0].componets[0].jumbotron} />
          <div className='RoutesList'>
            <Routes
              showRoutes={showCompent[0].componets[3].routes} 
              setRoute={setRoute}
              waterLevel={waterLevelSetting} />
            <ShowCalendar
              showCalendar={showCompent[0].componets[1].calendar}
              form={showSelectionFormHandler}
              value={value}
              setValue={setValue}
              back={showHomeHandler}
              booked={booked[0].bookings}
              kayaksInStock={kayakStock}
            />
              <SelectionFrom 
              showForm={showCompent[0].componets[5].selectionForm} 
              route={routeSelected}
              value={value}
              kayaks={booked[0].bookings}
              showHome={showHomeHandler}
              kayaksInStock={kayakStock}
              back={showCalendar}
              showStore={showingStore}
              storePath={storePath}
            />
            <ShowStore showStore={showStore} />
          </div>
          <Footer/>
      </div>
  )
}