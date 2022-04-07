import React, {Component} from "react";
import { Row, Col ,Button,Form} from "react-bootstrap";
import '../Assets/css/Event.css';
import { } from 'react-icons/fa';

export default class Event extends Component {
  render () {
   return (
     <Row className="event-body d-flex  justify-content-center align-items-center">
        <div className=" d-flex justify-content-center align-items-center">
        <Col  md={6}>
            <div className="event-box justify-content-center align-items-center">
                <p className="event-desk">WHY CHOOSE US</p>
                <h6 className="event-title">Partiality on or continue in the particular principles</h6>
                <p className="text-event">End-to-end payments and financial management in a single solution.
                     Meet the right platform to help realize.</p>
            </div>
        </Col>
        <Col md={6}>
            <div className=" justify-content-center align-items-center">
                <Form.Control className="event-adress" placeholder="Email Address" disabled />
                <Form.Control className="event-password" placeholder="Password" disabled />
                <Button className="event">Get Started</Button>
            </div>
        </Col>
        </div>
     </Row>
    );
   }
 }
 
