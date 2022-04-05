import React, {Component} from "react";
import { Row, Col ,Container } from "react-bootstrap";
import '../Assets/css/Alerts.css';
import Image from 'react-bootstrap/Image';
import { } from 'react-icons/fa';

export default class Alerts extends Component {
  render () {
   return (
     <Row className="alerts-body d-flex  justify-content-center align-items-center">
        <div className="alert-box d-flex  justify-content-center align-items-center">
        <Col md={3}>
            <div className="alert">
               <h6 className="alerts-title">Preference connect astonished </h6>
            </div>
        </Col>
        <Col md={3}>
          <div className=" d-flex  justify-content-center align-items-center"> 
             <Image src={require('../Assets/img/Frame.png')} className="frame-foto" /> 
               <p className="text-alerts">Removed Enjoyed Explain </p> 
          </div>
        </Col>
        <Col md={3}>
          <div className=" d-flex  justify-content-center align-items-center">
              <Image src={require('../Assets/img/Frame1.png')} className="frame-foto" /> 
          
               <p className="text-alerts">Supported Allowance</p> 
          </div>
        </Col>
        <Col md={3}>
          <div className=" d-flex  justify-content-center align-items-center"> 
             <Image src={require('../Assets/img/Frame2.png')} className="frame-foto" /> 
               <p className="text-alerts">Stable work & Lightweight</p> 
          </div>
        </Col>
        </div>
       
  </Row>
    );
   }
 }
 


