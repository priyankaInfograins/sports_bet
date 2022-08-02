import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import {BiCheckShield} from 'react-icons/bi'
import {BsDice6, BsTrophy} from 'react-icons/bs'
import {BiCoinStack} from 'react-icons/bi'
const AboutUs = () => {
    return (
        <>
            <div className="about_section">
                <Container>
                    <Row>
                        <div className="title">About <span>Us</span></div>
                        <div className="para">lorem epsum dollar sit amet</div>
                    </Row>
                </Container>
            </div>
           <div className="about_banner">
           <div className="about_content">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="img1">
                                <img src="https://t3.ftcdn.net/jpg/01/97/33/46/360_F_197334647_aClfAIrrc0RPrsC8V52RN4MkzNmQCysc.jpg" alt="img1" className='img-fluid' />
                            </div>
                            <div className="img2">
                                <img src="https://media.istockphoto.com/photos/cricket-action-picture-id502037149?k=20&m=502037149&s=612x612&w=0&h=0LWIpL5rIMtZm2YIxsuTiW1pg6-15qQ0tshNUyxOd6s=" alt="img2" className='img-fluid' />
                                <img src="https://media.istockphoto.com/photos/closeup-of-red-cricket-ball-and-bat-sitting-on-grass-picture-id177427917?k=20&m=177427917&s=612x612&w=0&h=kr-FOxME8KOnnhYsuR6WFAfB-Hv_ch20Fz5xnzeSU10=" alt="img3" className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="about_box">
                                <div className="head">lorem ipsum dollar sit amet</div>
                                <h3>Lorem ipsum dollar sit amet conaser lorem ipasdf solooer sit amert sgre yruiim,</h3>
                                <div className="para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quaerat iste minus soluta. Omnis,
                                    architecto ducimus, reiciendis cum nam accusantium iste nihil quam est molestiae magni tempore voluptate. Dolores, esse.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quaerat iste minus soluta. Omnis,
                                    architecto ducimus, reiciendis cum nam accusantium iste nihil quam est molestiae magni tempore voluptate. Dolores, esse.
                                </div>
                                <div className="about_btn">
                                    <button className='play_btn'>Play now</button>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
            <div className="why_choose_section">
                <Container>
                <Row>
                    <Col lg={5}>
                       <div className="left">
                       <div className="head">Why play our <br></br> games</div>
                        <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis voluptates, illo quasi minus officia omnis tempore assumenda placeat nisi, sit vero recusandae!</div>
                        <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis voluptates, illo quasi minus officia omnis tempore assumenda placeat nisi, sit vero recusandae veritatis aliquam consectetur. Placeat molestias ipsum tenetur!</div>
                       </div>
                    </Col>
                    <Col lg={7}>
                        <div className="right">
                            <Row>
                                <Col lg={6}>
                                    <div className="box1">
                                        <div className="icon"><BiCheckShield style={{fontSize:"1.8rem"}}/></div>
                                        <div className="head">Secure Sports Games</div>
                                        <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis voluptates, perferendis voluptates,</div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="box1">
                                        <div className="icon"><BsDice6/></div>
                                        <div className="head">Awesome Game State</div>
                                        <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis voluptates, perferendis voluptates,</div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                <div className="box1">
                                        <div className="icon"><BsTrophy/></div>
                                        <div className="head">Higher Wining Chance</div>
                                        <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis voluptates, perferendis voluptates,</div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                <div className="box1">
                                        <div className="icon"><BiCoinStack/></div>
                                        <div className="head">Invest Win And Earn</div>
                                        <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis voluptates, perferendis voluptates,</div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                </Container>
            </div>
           </div>
        </>
    )
}



export default AboutUs;