import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
const PlayBet = () => {
    return(
        <>
            <div className="playBet_section">
                <Container fluid>
                    <Row>
                        <Col lg={5}>
                            <div className="img_div">
                                <img src="https://pixner.net/bitbetio/main/assets/images/tournaments-illus.png" alt="" className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ex iure pariatur eveniet repellendus fugiat atque tempore illo fuga delectus. 
                                    Ipsa sequi praesentium vel. Adipisci error et ex corrupti aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ex iure pariatur eveniet repellendus fugiat atque tempore illo fuga delectus. Ipsa sequi praesentium vel. Adipisci error et ex corrupti aliquid.
                                    Ipsa sequi praesentium vel. Adipisci error et ex corrupti aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ex iure pariatur eveniet repellendus fugiat atque tempore illo fuga delectus. Ipsa sequi praesentium vel. Adipisci error et ex corrupti aliquid.
                                </p>
                                <div className="play_btn">
                                    <a href="/">Play Mostbet</a>
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