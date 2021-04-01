import React from 'react';
import { Container, Col, Row, ListGroup} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <footer className="footer mt-auto py-3">
            <div  style={{textAlign: 'center', paddingBottom: '20px', paddingLeft: '10px', paddingRight: '10px', paddingTop: '18px', width: '300px', marginRight:'20px'}}>
                <div  className='item-social' style={{marginLeft: '30px'}} ><span className="text-muted">Covid-19 <FontAwesomeIcon  icon="viruses"  size="1x" /></span></div>
                <div className='item' style={{width: '280px'}} >
                <p><span className="text-muted" style={{fontWeight: 700}} >Kingfisher Kayaking is committed to the safety of our guests.</span></p>
                <p><span style={{opacity: .6}} className="text-muted">Kingfisher Kayaking is abiding by COVID-19 CDC guidelines</span></p>
                <p><span style={{opacity: .6}} className="text-muted">We require all guests to wear a mask in the shuttle van to and from the drop off location.</span></p>
                <p><span style={{opacity: .6}} className="text-muted">We respectfully ask that you maintain a safe distance from other paddlers.</span></p>
                </div>
            </div>
            <div className='footer-items' >
                <div  className='item-social' ><span className="text-muted">Follow Us</span></div>
                <div className='item-social'>
                        <a href='https://www.facebook.com/kingfisherkayaking' target='blank' >
                        <img
                            alt=""
                            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fpaomedia%2Fsmall-n-flat%2F1024%2Fsocial-facebook-icon.png&f=1&nofb=1"
                            width="30"
                            height="30"
                            className="d-inline-block foot-img align-top"
                        />
                        </a>
                        <a href='https://www.instagram.com/kingfisherkayaking/' target='blank' >
                        <img
                            alt=""
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixelprivacy.com%2Fwp-content%2Fuploads%2F2018%2F02%2FInstagram-Icon.png&f=1&nofb=1"
                            width="30"
                            height="30"
                            className="d-inline-block foot-img align-top"
                        />
                        </a>
                </div>
                <div className='item'><span className="text-muted">Contact us @ kingfisherkayaking@gmail.com or 217-993-9394</span></div>
                <div className='item'><span className="text-muted">CHANGE TRIP DATE or TRIP CANCELATION -<Link className='link new-footer-link' to='/cancel-trip' >click here</Link></span></div>     
                <div className='item'><span className="text-muted">Copyright&#169; 2021 KingFisher Kayaking & Developed By <span><a className='input-llc' href='https://www.inputllc.net/' target='blank' >Input LLC</a></span></span></div>                     
            </div>
            <div className='footer-items'>
                <div  className='item-social' ><span className="text-muted">Our Mission</span></div>
                <div className='item' style={{width: '280px'}} ><span className="text-muted">To provide more affordable and accessible kayak rentals to the general public throughout the East Central Illinois rivers. Additionally, it will create a more informed and engaged community that contributes to the health, science, and advocacy of East Central Illinois rivers through hands-on educational kayak tours and other conservation programs</span></div>
            </div>
        </footer>
    )
}

export default Footer;