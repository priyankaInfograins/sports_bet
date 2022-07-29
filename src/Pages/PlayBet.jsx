import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import img from '../assets/images/cup.png'
const PlayBet = () => {
    return (
        <>
            <div className="playBet_section">
                <Container fluid>
                    <Row>
                        <Col lg={5} md={12}>
                            <div className="img_div">
                                <img src={img} alt="" className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={7} md={12}>
                            <div className="content">
                                <p><span>A reliable website, calculated bets, and quick withdrawals</span><br></br><br></br>

                                    <strong>Sports Betting</strong> - A terrific method to turn your love of football, hockey, casino or any other sport into a reliable and significant source o
                                    money is through sports betting. Simply registering on the bet website is all you need to do to win sports bets. Bet provides all options for
                                    precise bets. With a hassle-free version, bet provides you with both a good time and 24/7 customer assistance. Any topic you choose can be the subject of an email response. You can win money playing the esports and high-odds slots here. Anytime you wish, you can withdraw your money. We advise you to review the guidelines before enrolling.
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