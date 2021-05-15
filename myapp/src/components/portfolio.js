import React from 'react';
import {Card, Row, Col, Container} from 'reactstrap';
import Img1 from '../assets/2.jpg';
import Img2 from '../assets/44.jpg';
import Img3 from '../assets/111.jpg';
import Img4 from '../assets/A.jpg';
import Img5 from '../assets/c1.jpg';
import Img6 from '../assets/d1.jpg';
import Img7 from '../assets/FF2.jpg';
import Img8 from '../assets/recep.jpg';
import Img9 from '../assets/render.jpg';
import Img10 from '../assets/toil.jpg';

export default function Portfolio (){
    return(
        <div id="Portfolio">
             <Row style={{paddingBottom:'10mm', textAlign:'center', paddingTop:'10mm'}}>
                <Col sm={2} style={{backgroundColor:'skyblue'}}>
                    <h2>Portfolio</h2>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col sm={4}> 
                        <Card className="Image">
                            <img src={Img1}></img>
                        </Card>
                    </Col>
                    <Col sm={4}>
                    <Card className="Image">
                            <img src={Img2}></img>
                        </Card>
                    </Col>
                    <Col sm={4}>
                    <Card className="Image">
                            <img src={Img3} height="250"></img>
                        </Card>
                    </Col>
                </Row><br/>
                <Row>
                    <Col sm={6}>
                    <Card className="Image">
                            <img src={Img4}></img>
                        </Card>
                    </Col>
                    <Col sm={6}>
                    <Card className="Image">
                            <img src={Img5} height="460"></img>
                        </Card>
                    </Col>
                </Row><br/>
                <Row>
                    <Col sm={4}>
                        <Card className="Image">
                            <img src={Img6} height="250"></img>
                        </Card>
                    </Col>
                    <Col sm={4}>
                    <Card className="Image">
                            <img src={Img7} height="250"></img>
                        </Card>
                    </Col>
                    <Col sm={4}>
                    <Card className="Image">
                            <img src={Img8} height="250"></img>
                        </Card>
                    </Col>
                </Row><br/>
                <Row>
                    <Col sm={4}>
                    <Card className="Image">
                            <img src={Img10} height="250"></img>
                        </Card>
                    </Col>
                    <Col sm={8}>
                    <Card className="Image">
                            <img src={Img9} height="250"></img>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}