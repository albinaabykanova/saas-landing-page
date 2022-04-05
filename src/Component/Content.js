import React, {Component} from "react";
import { Row, Col ,Button,Nav, Container } from "react-bootstrap";
import '../Assets/css/Content.css';
import Image from 'react-bootstrap/Image';
import { } from 'react-icons/fa';

export default class Content  extends Component {
  render () {
   return (
     <Row className="content-body">
        <Container className="content justify-content-center align-items-center">
          <Row>
             <Col  md={{ span: 6, offset: 3 }}>{``}
                <h1 className="content-title">
                Believing neglected so so allowance
                </h1>
             </Col>
                <p className="desk-content">
                    We so opinion friends me message as delight. Whole front do of <br/> plate heard 
                    oh ought. His defective nor convinced residence own.
                </p>
                <Button className="content-free justify-content-center align-items-center">We so opinion friends me message as delight.</Button>
          </Row>
        </Container>
        </Row>
    );
   }
}
 


