import React, {Component} from "react";
import { Row, Col ,Button,Nav,Form, Container } from "react-bootstrap";
import '../Assets/css/About.css';
import Image from 'react-bootstrap/Image';
import { FaAngleDown,  } from 'react-icons/fa';

export default class About  extends Component {

  constructor(props) {
    super(props);
    this.state = {
       title:"SHAPEVOICE",
       deskProduct:"Product",
       deskTemplate:"Template",
       deskBlog:"Blog",
       deskPricing:"Pricing",
       deskAbout:"Sign In",
       Free:"Start Free",
       titleAbout2:"Managing business payments has never been easier",
       deskAbout4 :`Yet bed any for travelling assistance indulgence
       unpleasing. Not thoughts all exercise blessing.
       Indulgence way everything.`,
       free1:"Our Process",
    }
  }

  render () {
   return (
     <div className="about-body"> 
     <Container>
       <Row className="about-foto">
         <Col md={4}>
            <h3 className="title-about">{this.state.title}</h3>
         </Col>
       <Col md={6}>
          <Nav className="desk-about">
              <Nav.Link className="desk-about">{this.state.deskProduct}< FaAngleDown /></Nav.Link>
              <Nav.Link className="desk-about">{this.state.deskTemplate}< FaAngleDown /></Nav.Link>
              <Nav.Link className="desk-about">{this.state.deskBlog}</Nav.Link>
              <Nav.Link className="desk-about">{this.state.deskPricing}</Nav.Link>    
          </Nav>
       </Col>
       <Col md={2}>
          <div className="d-flex justify-content-center align-items-center">
              <Nav.Link className="desk-about">{this.state.deskAbout}</Nav.Link>
              <Button className="free">{this.state. free1}</Button>
          </div>   
       </Col>
       </Row>
     </Container>

      <Container>
         <Row className="d-flex justify-content-center h-500 align-items-center">
            <Col className="sixcol" md={7}>
                  <h1 className="title-about2">{this.state.titleAbout2}</h1>
                  <p className="desk-about4">{this.state.deskAbout4}</p>
               <div  className="d-flex">
               <Button className="free1">{this.state.free1}</Button>
               <Image src={require('../Assets/img/Group 176.png')} className="about3-foto" /> 
               <p className="text-about">See How It Works</p>
               </div>
            </Col>
            <Col md={5}>
            <div className="desk-about2">
                  <p>Get Started for Free</p>
                  <div  className="email">
                     <Form.Control style={{fontWeight: '100'}}  type="email" placeholder="Email address" />
                  </div>
                  <div className="password">
                     <Form.Control style={{fontWeight: '100'}}  type="email" placeholder="Password" />
                  </div>    
            </div> 
            <Button className="get">Get Started</Button>
            </Col>
         </Row>
       </Container>
    </div>
    );
   }
}
 


