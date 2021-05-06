import React, {useState} from 'react'
import './jumbotron.css';
import kayaking from './kayaking.png'
import kayak from './kayak.png'
import bus from './bus.png'
import bookIcon from './book.png'
import carIcon from './car.png'
import newLogo from '../../../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MyJumbotron() {
    
    const [step, setStep] = useState(true);

    const numberStep = {
        fontSize: 26,
        paddingRight: 10
    }




    setTimeout(function(){ 
        setStep(!step)
    }, 4000);
    
    let renderStep2 = null
    if (step){
        renderStep2 = (
            <div className='step' >
            <span style={numberStep} >2.</span> We'll pick you up at the location & date of choice
            <img className='step-img' src={bus} />
            </div> 
        )
    } else {
        renderStep2 = (
            <div className='step' >
                <span style={numberStep} >2.</span> We'll meet you at the start of the route
                <div className='step-img' >
                    <FontAwesomeIcon style={{color: 'black', paddingRight: '10px'}} icon="car-side"  size="4x" />
                </div>
            </div> 
        )
    }

    return (
        <div>
        <div className='my-jumbo'>
            <div className='jumbo-title' style={{textAlign: 'center'}} >How it Works</div>
            <div className='instructions' >
                <div className='step' >
                    <span style={numberStep} >1.</span> Book Online, pick route, fill form, pay
                    <img className='step-img' src={bookIcon} />
                </div>
                {renderStep2}
                <div className='step' >
                    <span style={numberStep} >3.</span> We drop you off at the beginning of the route
                    <img className='step-img' src={kayak} />
                </div>
                <div className='step' >
                    <span style={numberStep} >4.</span> You kayak until the end point
                    <img className='step-img' src={kayaking} />
                </div>
                <div className='step' >
                    <span style={numberStep} >5.</span> We'll pick you up from the end point and drop you off
                    <img className='step-img' src={bus} />
                </div>

            </div>
            <div style={{textAlign: 'center', paddingBottom: '20px', paddingLeft: '10px', paddingRight: '10px'}} >
                Guides<FontAwesomeIcon style={{marginLeft: '5px'}} icon="compass"  size="1x" /> are on specific days. Check the calendar when booking to see what days are guided.
            </div>
        </div>
        <div  >

        </div>
        </div>
    )
}

export default MyJumbotron;