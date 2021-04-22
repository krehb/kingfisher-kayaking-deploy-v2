import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import {Link, useLocation, useHistory} from 'react-router-dom';
import './navbar.css'
import newLogo from '../../../logo.png';

function MyNavbar(props) {
    
    let location = useLocation();
    let history = useHistory();
    function handleClick() {
        history.push("/");
    }

    //path route for book    
    const bookHandler = () => {
        if(location.pathname === '/'){
            props.executeScroll()
        } else {
            handleClick()
            setTimeout(function(){props.executeScroll()}, 100);
        }
    }

    
    return (
        <div>
            <Navbar className='my-nav' bg="light" expand="lg">
                <Link to='/' >
                    <Navbar.Brand className='brand' >
                    <img
                        alt=""
                        src={newLogo}
                        width="50"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <span className='brand' >Kingfisher Kayaking</span></Navbar.Brand>
                </Link>   
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className='link' to='/about' >
                            Rivers
                        </Link>
                        <Link className='link' onClick={bookHandler} >
                            Book
                        </Link>
                        <Link className='link' to='/waiver' >
                            Waiver
                        </Link>
                        <Link className='link' to='/involved' >
                            Get Involved
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MyNavbar;