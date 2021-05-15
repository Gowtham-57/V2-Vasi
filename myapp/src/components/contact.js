import React from 'react';
import {Row, Col, Container} from 'reactstrap';

export default function Contact (){
    return(
        <div className="Contact" id="Contact">
            <Row style={{paddingBottom:'10mm', textAlign:'center', paddingTop:'10mm'}}>
                <Col sm={2} style={{backgroundColor:'skyblue'}}>
                    <h2>Contact</h2>
                </Col>
            </Row>
            <Container >
            <Row>
                <Col sm={4}>
                    <h4 style={{textAlign:'center'}}>Call</h4><br/>
                    <p style={{textAlign:'center'}}>
                        6374086230<br/>
                        8056170811
                    </p>
                </Col>
                <Col sm={4}>
                <h4 style={{textAlign:'center'}}>Meet</h4><br/>
                <p style={{textAlign:'center'}}>
                    178, Tambaram-Velachery main road,<br/>
                    Pallikaranai,<br/>
                    Chennai-600100
                </p>
                </Col>
                <Col sm={4}>
                <h4 style={{textAlign:'center'}}>Mail</h4><br/>
                <p style={{textAlign:'center'}}>
                    perfectv2architect@gmail.com
                </p>
                </Col>
            </Row><Row><hr/></Row>
            </Container>

        </div>
    );
}