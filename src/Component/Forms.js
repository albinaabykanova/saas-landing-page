import React, {Component} from "react";
import { Row, Col ,Button } from "react-bootstrap";
import '../Assets/css/Forms.css';
import Image from 'react-bootstrap/Image';
import { } from 'react-icons/fa';

export default class Forms extends Component {
  render () {
   return (
     <Row className="forms-body d-flex  justify-content-center align-items-center">
        <div className="forms d-flex">
        <Col  md={3}>
            <div className="form-box justify-content-center align-items-center">
                <Image src={require('../Assets/img/forms-img/Rectangle2.png')} className="forms-img" /> 
                <p className="forms-desk">08-11-2021 Category</p>
                <h6 className="forms-title">Believing neglected so so allowance existence departure.</h6>
                <p className="text-forms">End-to-end payments and financial management in a single solution.
                 Meet the right platform to help realize.</p>
            </div>
        </Col>
        <Col md={3}>
            <div className="form-box justify-content-center align-items-center">
                <Image src={require('../Assets/img/forms-img/Rectangle1.png')} className="forms-img" /> 
                <p className="forms-desk">08-11-2021 Category</p>
                <h6 className="forms-title">In design active temper be uneasy. Thirty for remove plenty regard you.</h6>
                <p className="text-forms">End-to-end payments and financial management in a single solution.
                 Meet the right platform to help realize.</p>
            </div>
        </Col>
        <Col md={3}>
         <div className="">
             <div className="">
             <Image src={require('../Assets/img/forms-img/Rectangle3.png')} className="forms1-img" />  
             <p className="forms-desk">08-11-2021 Category</p>
             </div>
         </div>
        </Col>
        </div>
     </Row>
    );
   }
 }
 
