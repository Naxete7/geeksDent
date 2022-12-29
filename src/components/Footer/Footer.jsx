import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.scss"


function Footer() {
    
    return (
      <Container className="fluid footerDesign">
        <Row className="row-12">
          <Col className="col-12"></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    );

}

export default Footer;