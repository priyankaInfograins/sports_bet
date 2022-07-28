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
                                            <td>Foundation Year</td>
                                            <td>lorem ipsum</td>
                                        </tr>
                                        <tr>
                                            <td>Licence</td>
                                            <td>lorem ipsum</td>
                                        </tr>
                                        <tr>
                                            <td>First deposit bonus</td>
                                            <td>lorem ipsum</td>
                                        </tr>
                                        <tr>
                                            <td>Deposit</td>
                                            <td>lorem ipsum</td>
                                        </tr>
                                        <tr>
                                            <td>Withdraw money</td>
                                            <td>lorem ipsum</td>
                                        </tr>
                                        <tr>
                                            <td>Social networks</td>
                                            <td>lorem ipsum</td>
                                        </tr>
                                        <tr>
                                            <td>mobile application</td>
                                            <td>lorem ipsum</td>
                                        </tr>
                                        <tr>
                                            <td>customer support</td>
                                            <td>lorem ipsum</td>
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