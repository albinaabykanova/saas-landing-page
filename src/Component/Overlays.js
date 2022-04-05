import React, {Component} from "react";
import { Row, Col ,Button,Nav, Container } from "react-bootstrap";
import '../Assets/css/Overlays.css';
import Image from 'react-bootstrap/Image';
import { } from 'react-icons/fa';

export default class Overlays extends Component {
  render () {
   return (
     <Row className="stack-body d-flex  justify-content-center align-items-center">
        <Col md={6}>
            <Image src={require('../Assets/img/Cards.png')} className="card-overlays" /> 
        </Col>

        <Col md={6}> 
          <p className="overlays-desk">
              WHY CHOOSE US
          </p>
          <h1 className="title-overlays">Thirty for remove plenty regard you summer though.</h1>
           <p className="overlays-desk2">
           The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands.  
           </p>
           <hr/>
           <div className="d-flex">
             <Image src={require('../Assets/img/icon1.png')} className="icon-overlays" /> 
             <p className="text-over">Get Overview at a glance</p>
           </div>
           <div className="d-flex">
             <Image src={require('../Assets/img/icon1.png')} className="icon-overlays" /> 
             <p className="text-over">Deoposit funds easily, securlity</p>
           </div>
           <div className="d-flex">
             <Image src={require('../Assets/img/icon1.png')} className="icon-overlays" /> 
             <p className="text-over">Get Live Support</p>
           </div>
        </Col> 
  </Row>
    );
   }
 }
 


