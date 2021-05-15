import React from 'react';
import {Row, Col, UncontrolledCollapse, Container, Button, Card, CardBody } from 'reactstrap';
import Ser from '../assets/ser1.gif';

export default function Services (){
    return(
        <div id="Services">
             <Row style={{paddingBottom:'10mm', textAlign:'center', paddingTop:'10mm'}}>
                <Col sm={2} style={{backgroundColor:'skyblue'}}>
                    <h2>Servives</h2>
                </Col>
            </Row><br/>
            <Row>
                <Col sm={5} style={{textAlign:'center'}}>
                    <Row style={{paddingBottom:'0mm', textAlign:'center', paddingTop:'0mm'}}>
                        
                        <Button color="transperant" id="toggl">
      Interior Design
    </Button>
    <UncontrolledCollapse toggler="#toggl">
      <p>Interior design is the art and science of enhancing the interior of a building to achieve a 
        healthier and more aesthetically pleasing environment for the people using the space.</p>
        
    </UncontrolledCollapse>
                    </Row>
                <br/>
                <Row style={{paddingBottom:'0mm', textAlign:'center', paddingTop:'0mm'}}>
                
               <Button color="transperant" id="toggler2">
      Commercial
    </Button>
    <UncontrolledCollapse toggler="#toggler2">
      <p>Commercial architecture is the design of buildings and structures for use by business. This genre of architecture is focused on combining 
        function with style to meet the needs of a wide range of business types.</p>
        
    </UncontrolledCollapse>
               
                </Row>
    <br/>
    <Row style={{textAlign:'center'}}>
   
    <Button color="transperant" id="toggler3">
      Residential
    </Button>
    <UncontrolledCollapse toggler="#toggler3">
      <p>Residential architecture, also called domestic architecture, is the design and building of residential properties. These projects 
        include multi-unit residential buildings, single-family homes, renovations and remodels.</p>
        
    </UncontrolledCollapse>
    </Row><br/>
    <Row style={{textAlign:'center'}}>
     <Button color="transperant" id="toggler4">
      Architechtural design & Elevation
    </Button>
    <UncontrolledCollapse toggler="#toggler4">
      <p>Architectural elevations are a classic mode of communication for architects, 
        the third in a tripartite along with plans and section drawings.</p>
        
    </UncontrolledCollapse>
    </Row><br/>
    <Row style={{textAlign:'center'}}>
    <Button color="transperant" id="toggler5">
      Floor Planning
    </Button>
    <UncontrolledCollapse toggler="#toggler5">
      <p>The floor plan is the starting point of a house design and allows you to show the big picture and communicate your vision to clients as well as 
        giving the technical information needed by specialty contractors.</p>
        
    </UncontrolledCollapse>
   </Row>
    
         </Col>
         <Col sm={7}>
             <Container>
             <img src={Ser} width="80%" height="300"></img>
             </Container>
            
         </Col>
            </Row>
        </div>
    );
}
