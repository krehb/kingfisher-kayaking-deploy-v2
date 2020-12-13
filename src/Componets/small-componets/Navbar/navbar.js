import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';




function MyNavbar(props) {
    
    
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <a   href='/'>
                    <Navbar.Brand onClick={props.showHome}>
                    <img
                        alt=""
                        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stourvalleytrail.org.uk%2Fwp-content%2Fuploads%2F2016%2F11%2FKingfisher_logo_512_icon.png&f=1&nofb=1"
                        width="40"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    KingFisher Kayaking</Navbar.Brand>
                </a>    
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link onClick={props.showRivers}>Rivers</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MyNavbar;