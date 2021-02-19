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

    setTimeout(function(){ 
        setStep(!step)
    }, 4000);
    
    let renderStep2 = null
    if (step){
        renderStep2 = (
            <div className='step' >
                <img className='step-img' src={bus} />
            2. We'll pick you up at the location & date of choice
            </div> 
        )
    } else {
        renderStep2 = (
            <div className='step' >
                <div className='step-img' >
                    <FontAwesomeIcon style={{color: 'black', paddingRight: '10px'}} icon="car-side"  size="4x" />
                </div>
                
             2. We'll meet you at the start of the route
            </div> 
        )
    }

    return (
        <div>
        <div className='my-jumbo'>
            <div className='jumbo-title' style={{textAlign: 'center'}} >Want to Kayak?</div>
            <div className='instructions' >
                <div className='step' >
                    <img className='step-img' src={bookIcon} />
                    1. Book Online, pick route, fill form, pay
                </div>
                {renderStep2}
                <div className='step' >
                    <img className='step-img' src={kayak} />
                   3. We drop you off at the beginning of the route
                </div>
                <div className='step' >
                    <img className='step-img' src={kayaking} />
                   4. You kayak until the end point
                </div>
                <div className='step' >
                    <img className='step-img' src={bus} />
                   5. We'll pick you up from the end point and drop you off
                </div>
            </div>
        </div>
        <div  >
            <div className='jumbo-title' style={{textAlign: 'center', backgroundColor: 'rgb(112, 110, 110)', color: 'white'}} >Our Mission</div>
            <div className='my-jumbo2' style={{paddingBottom: '30px'}} >
                <div style={{marginRight: '100px', marginTop: '00px'}} className="logo-big">
                    <img
                        alt=""
                        src={newLogo}
                        width="300"
                        height="200"
                    />
                </div>
                <div className='mission'  >
                    {/* <div className='jumbo-title' >Our Mission</div> */}
                    <div className='instructions' >
                    To provide more affordable and accessible kayak rentals to the general public throughout the East Central Illinois rivers. Additionally, it will create a more informed and engaged community that contributes to the health, science, and advocacy of East Central Illinois rivers through hands-on educational kayak tours and other conservation programs
                    </div>
                    <div style={{marginBottom: '20px'}} >
                        Guides<FontAwesomeIcon style={{marginLeft: '5px'}} icon="compass"  size="1x" /> are on specific days. Check the calendar when booking to see what days are guided.
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MyJumbotron;