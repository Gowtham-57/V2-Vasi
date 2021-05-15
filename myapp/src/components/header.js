import React, {useState} from 'react';
import {Row, Col, NavbarText, NavbarBrand, NavItem, Navbar, Toast, ToastBody, Button,NavLink, NavbarToggler, Collapse,
Nav, Modal, ModalHeader, ModalBody, Form, FormGroup, Label,Input, ModalFooter, UncontrolledCarousel} from 'reactstrap';
import car1 from '../assets/car1.jpg';
import car2 from '../assets/car2.jpeg';
import car3 from '../assets/car3.jpg';


function Header (){
    const[open,setOpen] = useState(false);
    const toggle =()=> setOpen(!open);
  
    const[modal,setModal] = useState(false);
    const toggle1 =()=> setModal (!modal);

    const items = [
      {
        src: car1,
        altText:'Slide1',
        header:'Perfect V2 architects ',
        key:'1'
      },
      {
        src: car2,
        altText:'Slide2',
        key:'2'
      },
      {
        src: car3,
        altText:'Slide3',
        key:'3'
      }
    
    ];
  
  
  
    return(
        <div>
           
            <div>
            <Navbar color="tan" light expand="lg">
      <NavbarBrand>Perfect V2 Architects</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={open} navbar>
       <Nav className="mr-auto" navbar>
         <NavItem>
           <NavLink href="#">Home</NavLink>
         </NavItem>
         <NavItem>
           <NavLink href="#About">About</NavLink>
         </NavItem>
         <NavItem>
           <NavLink href="#Services">Services</NavLink>
         </NavItem>
         <NavItem>
           <NavLink href="#Portfolio">Portfolio</NavLink>
         </NavItem>
         <NavItem>
           <NavLink href="#Contact">Contact</NavLink>
         </NavItem>
        
       </Nav>
       <NavbarText>
         <Button onClick={toggle1}>Enquire</Button>
         <Modal isOpen={modal}>
           <ModalHeader toggle={toggle1}>Enquire</ModalHeader>
           <ModalBody>
             <Form>
             <FormGroup>
               <Row>
                 <Col sm={12}>
                 <Label>Name:</Label>
                 <Input type="text" name="name"></Input>
                 </Col>
               </Row>
              </FormGroup>
               <FormGroup>
                 <Row>
                   <Col sm={12}>
                   <Label>Email:</Label>
                 <Input type="text" name="email"></Input>
                 </Col>
                 </Row>
                
               </FormGroup>
               <FormGroup>
                 <Row>
                   <Col sm={6}>
                   <Label>Phone Number:</Label>
                 <Input type="number" name="number"></Input>
                   </Col>
                   <Col sm={6}>
                   <Label>Message:</Label>
                 <Input type="textarea" name="message"></Input>
                   </Col>
                 </Row>
                 
               </FormGroup>
             
             </Form>
           </ModalBody>
           <ModalFooter>
             <Button color="primary" onClick="">Submit</Button>
           </ModalFooter>

         </Modal>
         </NavbarText>
      </Collapse>

    </Navbar>
     </div>
            <UncontrolledCarousel items={items} className="carl" />
            <br/>
           
           
            <h4 style={{textAlign:'center',padding:'10mm'}}>Why choose us:-</h4>
            <Row>
                <Col sm={3}>
                    <Toast>
                        <ToastBody style={{textAlign:'center'}}>Creative and Innovative Design</ToastBody>
                    </Toast>
                </Col>
                <Col sm={3}>
                    <Toast>
                        <ToastBody style={{textAlign:'center'}}>Budget Management</ToastBody>
                    </Toast>
                </Col>
                <Col sm={3}>
                    <Toast>
                        <ToastBody style={{textAlign:'center'}}>Creative and Innovative Design</ToastBody>
                    </Toast>
                </Col>
                <Col sm={3}>
                    <Toast>
                        <ToastBody style={{textAlign:'center'}}>Budget Management</ToastBody>
                    </Toast>
                </Col>
            </Row>
            

        </div>
    );
}
export default Header;