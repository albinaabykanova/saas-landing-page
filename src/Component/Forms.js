import React, {Component} from "react";
import { Row, Col ,Button,Container } from "react-bootstrap";
import '../Assets/css/Forms.css';
import Image from 'react-bootstrap/Image';
import { } from 'react-icons/fa';

export default class Forms extends Component {
  render () {
   return (
     <Row className="forms-body d-flex  justify-content-center align-items-center">
         <Container>
         <div className="blog d-flex  justify-content space-between">
            <h4 className="">Our Latest Blog Posts</h4>
            <Button className="blog1">See All Blog Posts</Button>
         </div>
         </Container>
        <div className="forms d-flex justify-content-center align-items-center">
        <Col  md={3}>
            <div className="form-box justify-content-center align-items-center">
                <Image src={require('../Assets/img/forms-img/Rectangle2.png')} className="forms-img" /> 
                <p className="forms-desk">08-11-2021<span className="category"> Category</span></p>
                <h6 className="forms-title">Believing neglected so so allowance existence departure.</h6>
                <p className="text-forms">End-to-end payments and financial management in a single solution.
                 Meet the right platform to help realize.</p>
            </div>
        </Col>
        <Col md={3}>
            <div className="form-box justify-content-center align-items-center">
                <Image src={require('../Assets/img/forms-img/Rectangle1.png')} className="forms-img" /> 
                <p className="forms-desk">08-11-2021<span className="category"> Category</span></p>
                <h6 className="forms-title">In design active temper be uneasy. Thirty for remove plenty regard you.</h6>
                <p className="text-forms">End-to-end payments and financial management in a single solution.
                 Meet the right platform to help realize.</p>
            </div>
        </Col>
        <Col md={4}>
         <div className="d-grid">
            <div className="d-flex four">
                <Image src={require('../Assets/img/forms-img/Rectangle3.png')} className="forms1-img" />  
                <div className="">
                    <h6 className="forms-desk1">08-11-2021<span className="category"> Category</span></h6>
                    <h6 className="forms-title1">Partiality on or continuing in particular principles</h6>
                </div>
            </div>
            <hr style={{width: '80%'}} />
            <div className="d-flex four">
                <Image src={require('../Assets/img/forms-img/Rectangle4.png')} className="forms1-img" />  
                <div className="">
                    <h6 className="forms-desk1">08-11-2021<span className="category"> Category</span></h6>
                    <h6 className="forms-title1">Do believing oh disposing to supported allowance we.</h6>
                </div>
            </div>
            <hr style={{width: '80%'}} />
            <div className="d-flex four">
                <Image src={require('../Assets/img/forms-img/Rectangle5.png')} className="forms1-img" />  
                <div className="">
                    <h6 className="forms-desk1">08-11-2021 <span className="category"> Category</span></h6>
                    <h6 className="forms-title1">Village did removed enjoyed explain nor ham saw.</h6>
                </div>
            </div>
            <hr style={{width: '80%'}} />
            <div className="d-flex four">
                <Image src={require('../Assets/img/forms-img/Rectangle6.png')} className="forms1-img" />  
                <div className="">
                    <h6 className="forms-desk1">08-11-2021<span className="category"> Category</span></h6>
                    <h6 className="forms-title1">Securing as informed declared or margaret</h6>
                </div>
            </div>
            <hr style={{width: '80%'}} />
         </div>
        </Col>
        </div>
     </Row>
    );
   }
 }
 
