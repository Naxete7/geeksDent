import React from "react";
import "./Home.scss";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="homeDesign">
           
            <h1>GEEKSDENT</h1>
            <h2>EN CONSTRUCCION...</h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
