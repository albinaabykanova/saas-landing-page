import React, {Component} from "react";
import { Row, Col ,Button,Form,InputGroup, FormControl,} from "react-bootstrap";
import '../Assets/css/Page.css';
import Image from 'react-bootstrap/Image';
import { } from 'react-icons/fa';

export default class Page extends Component {
  render () {
   return (
     <Row className="page-body d-flex  justify-content-center align-items-center">
        <div className="d-flex  justify-content-center align-items-center">
        <Col  md={2}>
            <div className="page-box d-grid">
                <h6 className="page-title">AR Shakir</h6>
                <p className="page-text">Finance helps companies manage payments easily.</p>
                <Image src={require('../Assets/img/Groupicon.png')} className="page-img" /> 
            </div>
        </Col>

        <Col  md={2}>
            <div className="page-box d-grid">
                <h6 className="page-title">Company</h6>
                <p className="desk-info">About Us</p>
                <p className="desk-info">Careers</p>
                <p className="desk-info">Blog</p>
                <p className="desk-info">Pricing</p>
            </div>
        </Col>

        <Col  md={2}>
            <div className="page-box d-grid">
                <h6 className="page-title">Resources</h6>
                <p className="desk-info">Proposal Template</p>
                <p className="desk-info">Invoice Template</p>
                <p className="desk-info">Tuturoial</p>
                <p className="desk-info">How to write a contract</p>
            </div>
        </Col>
        <Col  md={2}>
            <div className="page-box d-grid">
                <h6 className="page-title">Join Our Newsletter</h6>
                <p className="page-text1">*  Will send you weekly updates for your better finance management.</p>
                <InputGroup className="mb-3">
    <FormControl className="page-email"
        placeholder="Your email address"/>
       <InputGroup.Text className="page-sub"  id="basic-addon2">Subscribe</InputGroup.Text>
  </InputGroup>
            </div>
        </Col>
        <hr />
        
        
        </div>
     </Row>
    );
   }
 }
 
