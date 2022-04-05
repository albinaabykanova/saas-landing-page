import React, {Component} from "react";
import { Row, Col ,Button } from "react-bootstrap";
import '../Assets/css/Info.css';
import Image from 'react-bootstrap/Image';
import { } from 'react-icons/fa';

export default class Info extends Component {
  render () {
   return (
     <Row className="info-body d-flex  justify-content-center align-items-center">
        <div className="info-box d-flex  justify-content-center align-items-center">
        <Col  md={6}>
            <div className="info justify-content-center align-items-center">
                <p className="info-desk justify-content-center align-items-center">TESTIMONIALS</p>
                <h3 className="info-title">Check what our clients are saying</h3>  
                <Image src={require('../Assets/img/info-foto.png')} className="info-foto" /> 
            </div>
        </Col>
        <Col md={4}>
          <div className="alerts-key justify-content-center align-items-center "> 
            <Image src={require('../Assets/img/leftimg.png')} className="leftimg-foto" /> 
               <h6 className="info1-title">Save Time Managing Social Media For Your Business</h6>
               <p className="desk-info">
                  Is be upon sang fond must shew. Really boy law county she unable her sister.
                  Feet you off its like like six. Among sex are leave law built now. In built table
                  in an rapid blush. Merits behind on afraid or warmly.</p>
               <p className="desk-info">
                   Believing neglected so so allowance existence departure in. In design active temper be uneasy. 
               </p>
                  <Image src={require('../Assets/img/star5.png')} className="star-foto" /> 
                <p className="desk-info1">AR Shakir</p>
                <p className="desk-info2">CEO GetNextDesign</p>
          </div>
        </Col>
        </div>
     </Row>
    );
   }
 }
 


