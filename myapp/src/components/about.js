import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import Image from '../assets/home2.jpg';

function About (){
    return(
        <div id="About">
            <Row style={{paddingBottom:'10mm', textAlign:'center', paddingTop:'10mm'}}>
                <Col sm={2} style={{backgroundColor:'skyblue'}}>
                    <h2>About</h2>
                </Col>
            </Row><br/>
            <Row>
                <Col sm={4}><img src={Image}></img></Col>
                <Col sm={8}>
                    <p style={{textAlign:'justify'}}>
                    We are an architectural team with the passion to see projects manifest that are critically meaningful and creatively unique. Our studio’s focus is on the exploration of Design Strategies that mediate and reinterpret the boundary between traditional /cultural values and contemporary Indian living. A synthesis that blends old and new;  international and regional. We believe in identifying, engaging deeply with and simplifying the complexities of projects. We go by the motto that Good Design is always simple. It should be empathetic to the need of all stakeholders, – 
        the owners, contractors, end-users and care-takers. This 360 degrees approach defines our project success.
        For every aspect of home design, we have a team of specialized decorators, each of whom can be credited with the title of the ideal designer, in terms of his or her specialization.
        </p>
        <p style={{textAlign:'justify'}}>
        Perfect V2 Architects is the Architectural consulting firm under the young talents with innovative and creative ideas. We rendering Architectural and Interior Designing service involved by the energetic young team of Architects.

As a leading Architects Firm in chennai, We Plan and Design with Environmental Responsibilities with Nature by using five Natural Elements (Panja Poothams).

We are Specialist in Sustainable design by using new concept with latest Technology we are maintaining Indoor air & good Environmental quality.

Our team members have experience in major residential commercial apartments, retail projects/commercial high rise, college campuses and universities, resort developments, temples, churches, mosques, health care and hotels

        </p>
                </Col>
            </Row>
        </div>
    );

}
export default About;