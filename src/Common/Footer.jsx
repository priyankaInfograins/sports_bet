import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {MdOutlineWatchLater, MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram} from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <Container fluid>
                    <Row>
                        <Col lg={4}>
                            <div className="footer_logo">
                                <div className="logo">
                                    <span className='span1'>123</span>LOGO <br></br><span className='span2'>.</span><span className='span3'>COM</span>
                                </div>
                                <p className='w-75 mt-3'>Lorem epsum dollar sit amet lorem epsum dollar sit amet Lorem epsum dollar sit amet lorem epsum dollar sit amet</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="useful_links">
                                <ul>
                                    <h4>Useful Links</h4>
                                    <li><MdOutlineKeyboardArrowRight/><a href="/">About Us</a></li>
                                    <li><MdOutlineKeyboardArrowRight/><a href="/">Contact Us</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="opening_hours">
                                <ul>
                                    <h4>Opening Hours</h4>
                                    <li><MdOutlineWatchLater/> <span>10 AM - 9 PM, Monday-Saturday</span></li>
                                    <li><MdOutlineWatchLater/> <span>10 AM - 3 PM, Sunday</span></li>
                                </ul>
                            </div>
                            <div className="social_links">
                                <ul>
                                    <li><a href="/"><FaFacebookF/></a></li>
                                    <li><a href="/"><FaTwitter/></a></li>
                                    <li><a href="/"><FaLinkedinIn/></a></li>
                                    <li><a href="/"><FaInstagram/></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bottom_footer">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <p>Copyright@2022.All right reserved</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}


export default Footer;