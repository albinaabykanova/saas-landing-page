import React, {Component} from "react";
import { Row, Col ,Button,Nav, Container } from "react-bootstrap";
import '../Assets/css/Tooltip.css';
import Image from 'react-bootstrap/Image';
import { } from 'react-icons/fa';

export default class Tooltip extends Component {
  render () {
   return (
     <Row className="tooltip-body d-flex justify-content-center align-items-center">
        <Container className="tooltip-title justify-content-center align-items-center">
          <Row >
             <h5  className="tooltip-title d-flex justify-content-center align-items-center">
                Trusted By Over 100+ Startups and freelance business
             </h5>
          </Row>
          <Row className="mt-20 d-flex justify-content-center align-items-center">
              <Col md={2}>
                  <Image src={require('../Assets/img/Group.png')} className="tooltip-foto" /> 
              </Col>
              <Col md={2}>
                  <Image src={require('../Assets/img/Group (1).png')} className="tooltip-foto" /> 
              </Col>
              <Col md={2}>
                  <Image src={require('../Assets/img/Group (2).png')} className="tooltip-foto" /> 
              </Col>
              <Col md={2}>
                  <Image src={require('../Assets/img/Group (3).png')} className="tooltip-foto" /> 
              </Col>
              <Col md={2}>
                  <Image src={require('../Assets/img/Group (4).png')} className="tooltip-foto" /> 
              </Col>
          </Row>
        </Container>
       
        </Row>
    );
   }
}
 


