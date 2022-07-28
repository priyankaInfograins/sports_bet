import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
const Hero = () => {
    return(
        <>
            <div className="hero_section p-5">
                <Container fluid>
                    <Row className='justify-content-center text-center'>
                        <Col lg={8}>
                            <div className="hero_content">
                                <div className="offer">offer</div>
                                <div className="hero_title">LET'S MAKE YOUR FIRST INVESTMENT NOW</div>
                                <div className="hero_subTitle">TRY WITH BONUS AS GIFT</div>
                                <div className="hero_login_btn mt-5">
                                    <a href="https://www.12bet.com/" target="_blank" className='login_link'>Login</a>
                                </div>
                               
                            </div>
                        </Col>
                        {/* <Col lg={3}>
                            <div className="hero_images">
                            <img src="https://pixner.net/bitbetio/main/assets/images/sell-hero-illus.png" alt="" className='img--fluid' />
                           
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="hero_images">
                           
                            <img src="https://pixner.net/bitbetio/main/assets/images/tournaments-illus.png" alt="" className='img--fluid' />
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </div>
        </>
    )
}


export default Hero;