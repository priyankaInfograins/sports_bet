import React from 'react';
import { Container,Row, Col,Table } from 'react-bootstrap';
const GeneralInfo = () => {
    return(
        <>
            <div className="info_section py-5">
                <Container>
                    <Row>
                        {/* <Col lg={12}>
                            <div className="info_title">Title Text Here</div>
                        </Col> */}
                        <Col lg={12}>
                            <div className="info_table">
                                <Table bordered >
                                    <tbody>
                                        <tr>
                                            <td>Beginning Year</td>
                                            <td>2022</td>
                                        </tr>
                                        <tr>
                                            <td>Licence</td>
                                            <td>NA</td>
                                        </tr>
                                        <tr>
                                            <td>First Deposit Bonus</td>
                                            <td>NA</td>
                                        </tr>
                                        <tr>
                                            <td>Deposit Funds</td>
                                            <td>Skrill, NETELLER, Local Bank-In</td>
                                        </tr>
                                        <tr>
                                            <td>Withdraw Funds</td>
                                            <td>Envoy, Skrill, NETELLER, Local Bank-In</td>
                                        </tr>
                                        <tr>
                                            <td>Social Media Channels</td>
                                            <td>Facebook, Twitter, Instagram, Linkedin</td>
                                        </tr>
                                        <tr>
                                            <td>Mobile Application</td>
                                            <td>iPhone, Android</td>
                                        </tr>
                                        <tr>
                                            <td>customer Support</td>
                                            <td>Live support, email</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )

}


export default GeneralInfo;