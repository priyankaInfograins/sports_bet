import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import img from '../assets/images/cup.png'
import AOS from "aos";
import "aos/dist/aos.css";

const PlayBet = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    })

    return (
        <>
            <div className="playBet_section">
                <Container fluid>
                    <Row>
                        <Col lg={6} md={12}>
                            <div data-aos="zoom-in">
                                <div className="img_div">
                                    <img src="https://template.viserlab.com/casinous/demo/assets/images/banner/thumb.png" alt="" className='img-fluid' />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>

                            <div className="content">
                                <p><span>Join our platform and receive a bonus for your first deposit.</span><br></br><br></br>
                                    <strong>Join our platform and receive a bonus for your first deposit.</strong><br></br>
                                    The best betting experience is right at your fingertips with XYZ. For the best payouts, participate in sporting events, casino games, and even lotteries. We give you access to a betting platform with options like "LAY" and "BACK."
                                    <br></br> We also provide a very secure betting environment and the greatest methods for funding the accounts for our esteemed players.
                                    <br></br> Win big using your gaming abilities and playing against the actual players in live casino at the comfort of your home.<br></br><br></br>
                                    We guarantee that everyone will enjoy themselves.

                                </p>

                                <div className="play_btn">
                                    <a href="https://www.12bet.com/" target="_blank">Place a bet</a>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}



export default PlayBet;