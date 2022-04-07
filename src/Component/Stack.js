import React, {Component} from "react";
import { Row, Col ,Button,Nav, Container } from "react-bootstrap";
import '../Assets/css/Stack.css';
import Image from 'react-bootstrap/Image';
import { } from 'react-icons/fa';

export default class Stack extends Component {
  render () {
   return (
     <Row className="stack-body d-flex  justify-content-center align-items-center">
        <Col md={3}> 
            <Row className="img-stack">
            <Image src={require('../Assets/img/stack-img/lamp.png')} className="lamb" /> 
              <h5 className="title-stack">
                Led Ask Possible Mistress
              </h5>
              <p className="desk-stack">
                 Connection has put impossible own <br/> apartments boisterous. At jointure ladyship
                <br/>  an insisted so humanity he. Friendly <br/> bachelor entrance to on by.
              </p>
            </Row>
        </Col> 
        <Col md={3}> 
            <Row className="img-stack-2">
            <Image src={require('../Assets/img/stack-img/icon2.png')} className="lamb" /> 
              <h5 className="title-stack">
                Elegance Eat Likewise
              </h5>
              <p className="desk-stack">
                 Connection has put impossible own <br/> apartments boisterous. At jointure ladyship
                <br/>  an insisted so humanity he. Friendly <br/> bachelor entrance to on by.
              </p>
            </Row>
        </Col> 
        <Col md={3}> 
            <Row className="img-stack-3">
            <Image src={require('../Assets/img/stack-img/icon.png')} className="lamb" /> 
              <h5 className="title-stack">
                 Message Oram Nothing
              </h5>
              <p className="desk-stack">
                 Connection has put impossible own <br/> apartments boisterous. At jointure ladyship
                <br/>  an insisted so humanity he. Friendly <br/> bachelor entrance to on by.
              </p>
            </Row>
        </Col> 
     <Row className="stack-ful" style={{marginTop:50}}>
        <Col md={7}>
           <h2 className="title3-stack d-flex  justify-content-center align-items-center">Track your crytpo portfolio on the best way possible</h2>
        </Col>
        <Col md={4}>
          <Button className="stack d-flex justify-content-center align-items-center">Check It Out</Button>
        </Col>
     </Row>
  </Row>
    );
   }
 }
 


