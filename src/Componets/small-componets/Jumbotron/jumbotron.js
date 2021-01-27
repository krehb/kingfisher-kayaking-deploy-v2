import React from 'react'
import './jumbotron.css';
import kayaking from './kayaking.png'
import kayak from './kayak.png'
import bus from './bus.png'
import bookIcon from './book.png'

function MyJumbotron() {
    


    

    return (
        <div>
        <div className='my-jumbo'>
            <div className='jumbo-title' >Want to Kayak?</div>
            <div className='instructions' >
                <div className='step' >
                    <img className='step-img' src={bookIcon} />
                    Book Online, pick route, fill form, pay
                </div>
                <div className='step' >
                    <img className='step-img' src={bus} />
                    We'll pick you up at the location & date of choice
                </div>
                <div className='step' >
                    <img className='step-img' src={kayak} />
                    We drop you off at the beginning of the route
                </div>
                <div className='step' >
                    <img className='step-img' src={kayaking} />
                    You kayak until the end point
                </div>
                <div className='step' >
                    <img className='step-img' src={bus} />
                    We'll pick you up from the end point and drop you off
                </div>
            </div>
        </div>
        </div>
    )
}

export default MyJumbotron;