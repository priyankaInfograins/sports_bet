import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    })
    return (
        <>
            <div className="hero_section p-5">
                <Container fluid>
                    <Row className='justify-content-center text-center'>
                        <Col lg={8}>
                            <div className="hero_content">
                                <div data-aos="fade-right">
                                    <div className="offer">offer</div>
                                </div>
                                <div data-aos="fade-up">
                                    <div className="hero_title">Let's Make Your <br></br> First Investment Now</div>
                                    <div className="hero_subTitle">TRY WITH BONUS AS GIFT</div>
                                    <div className="hero_login_btn mt-5">
                                        <a href="https://www.12bet.com/" target="_blank" className='login_link'>Login</a>
                                    </div>
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