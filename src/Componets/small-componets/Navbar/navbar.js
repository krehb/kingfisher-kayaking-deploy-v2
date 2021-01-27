import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import {Link, useLocation, useHistory} from 'react-router-dom';
import './navbar.css'


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
                        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stourvalleytrail.org.uk%2Fwp-content%2Fuploads%2F2016%2F11%2FKingfisher_logo_512_icon.png&f=1&nofb=1"
                        width="40"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <span className='brand' >KingFisher Kayaking</span></Navbar.Brand>
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
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MyNavbar;