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
                                <div className="hero_title">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br> Illo animi nobis eligendi quaerat iure obcaecati,</div>
                                <div className="hero_login_btn">
                                    <a href="/" className='login_link'>Login</a>
                                </div>
                                <div className="hero_subTitle">Lorem - ipsum dolor, sit amet consectetur</div>
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