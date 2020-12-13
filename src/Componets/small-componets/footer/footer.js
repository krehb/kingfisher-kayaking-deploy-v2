import React from 'react';
import { Container, Col, Row, ListGroup} from 'react-bootstrap';
import './footer.css';

function Footer() {
    return (
        <footer className="footer mt-auto py-3">
            <Container>
                <Row>
                    <Col>
                        Follow Us
                        <Row>
                        <img
                            alt=""
                            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fpaomedia%2Fsmall-n-flat%2F1024%2Fsocial-facebook-icon.png&f=1&nofb=1"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <img
                            alt=""
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixelprivacy.com%2Fwp-content%2Fuploads%2F2018%2F02%2FInstagram-Icon.png&f=1&nofb=1"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        
                        </Row>
                    </Col>
                    <Col>
                        Help the Local WildLife
                        <ListGroup variant="flush">
                        <ListGroup.Item>pick up trash when you see it</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span className="text-muted">Copyright&#169; 2021 KingFisher Kayaking & Developed By Input LLC</span>
                    </Col>
                </Row>
            </Container>         
        </footer>
    )
}

export default Footer;