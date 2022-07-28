import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
        <>
            <div className="faq_section py-5">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="faq_content">
                                <div className="faq_para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum modi voluptates, recusandae laudantium temporibus sit id non aperiam libero debitis error molestias placeat, sapiente obcaecati ex saepe repellendus nam nulla.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore porro ipsa eligendi, laboriosam alias maiores eum commodi neque nulla tenetur natus itaque perspiciatis fuga obcaecati ullam et adipisci saepe ipsam?
                                </div>
                                <div className="faq_title">Frequently Asked Questions</div>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header><div className='left_border'></div><span>Lorem ipsum dolor sit amet #1</span></Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><div className='left_border'></div><span>Lorem ipsum dolor sit amet #2</span></Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header><div className='left_border'></div><span>Lorem ipsum dolor sit amet #3</span></Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header><div className='left_border'></div><span>Lorem ipsum dolor sit amet #4</span></Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header><div className='left_border'></div><span>Lorem ipsum dolor sit amet #5</span></Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}



export default Faq;