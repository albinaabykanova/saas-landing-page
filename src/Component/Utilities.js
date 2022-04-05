import React, {Component} from "react";
import { Row, Col ,Button,Nav, Container } from "react-bootstrap";
import '../Assets/css/Utilities.css';
import Image from 'react-bootstrap/Image';
import { FaArrowRight} from 'react-icons/fa';

export default class Utilities extends Component {
  render () {
   return (
     <Row className="utilities-body">
        <div className="utilities">
          <h1 className="title-utilis d-flex  justify-content-center align-items-center">
              Push your code to product with ease. 
          </h1>
          <p className="desk-util d-flex  justify-content-center align-items-center">
               Led ask possible mistress relation elegance eat likewise debating.<br/> By message or 
               am nothing amongst chiefly address.   
          </p>
        </div>
        <Container className=" cont d-flex  justify-content-center align-items-center">
        <Col md={3}>
            <div className="utiliti-1">
               <h3 className="big-utils">Do believing oh disposing to supported</h3>
               <p className="text-utils">Is be upon sang fond must shew. Really boy law county she unable her sister.
                 Feet you off its like like six. </p>
              <p className="read">Read More <FaArrowRight /></p>
            </div>
        </Col>

        <Col md={3}>
            <div className="utiliti-1">
               <h3 className="big-utils">Do believing oh disposing to supported</h3>
               <p className="text-utils">The its enable direct men depend highly. Ham windows sixteen who
                inquiry fortune demands. </p>
              <p className="read">Read More <FaArrowRight /></p>
            </div>
        </Col>

        <Col md={3}>
            <div className="utiliti-1">
               <h3 className="big-utils">Do believing oh disposing to supported</h3>
               <p className="text-utils">Among sex are leave law built now. In built table in an rapid 
                      blush. Merits behind on afraid or warmly. </p>
              <p className="read">Read More <FaArrowRight /></p>
            </div>
        </Col>
        </Container>
       <div className="more-util2 d-flex  justify-content-center align-items-center">
        <Button className="more-util"> More About Platform</Button>
        </div>
  </Row>
    );
   }
 }
 


