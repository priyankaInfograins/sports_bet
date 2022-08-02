import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img from '../assets/images/player-win.png'
const WinSection = () => {
    return(
        <> 
            <div className="win_section">
                <Container fluid>
                    <Row>
                        <Col lg={6}>
                            <div className="win_content">
                                <div className="title">Get your tickets now and play with the best of Lotto</div>
                                <div className="para1">You can play lotteries online with our personalized lottery platform without ever leaving your house. We are dedicated to giving all lottery participants access to the most recent results and lottery information.</div>
                                <div className="para2">Play with real players in real time. Everyone will surely discover something interesting for them. Enjoy a top notch betting experience with variety of games like Blackjack, Roulette, Teenpatti, Andar Bahar.</div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="win_img">
                                <img src={img} alt="win_img" className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}


export default WinSection;