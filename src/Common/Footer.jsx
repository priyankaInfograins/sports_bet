import React,{useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {MdOutlineWatchLater, MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <>
            <div className="footer">
                <Container fluid>
                    <Row>
                        <Col lg={4} md={4}>
                            <div className="footer_logo">
                                <div className="logo">
                                    <span className='span1'>123</span>LOGO
                                </div>
                                <p className='w-50 mt-3'>Lorem epsum dollar sit amet lorem epsum dollar sit amet Lorem epsum dollar sit amet lorem epsum dollar sit amet <br></br>Lorem epsum dollar sit amet lorem epsum dollar sit</p>
                            </div>
                        </Col>
                        <Col lg={4} md={4}>
                            <div className="useful_links">
                                <ul>
                                    <h4>Useful Links</h4>
                                    <li><MdOutlineKeyboardArrowRight/><Link to="/about_us">About Us</Link></li>
                                    <li><MdOutlineKeyboardArrowRight/><Link to="/contact_us">Contact Us</Link></li>
                                    <li><MdOutlineKeyboardArrowRight/><a href="#faq">FAQs</a></li>
                                    <li><MdOutlineKeyboardArrowRight/><a href="/">Player List</a></li>
                                    <li><MdOutlineKeyboardArrowRight/><a href="/">Featured Matches</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4} md={4}>
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