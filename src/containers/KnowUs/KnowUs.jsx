import React from "react";
import "./KnowUs.scss";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="homeDesign">
            <h1>GEEKSDENT</h1>
                      <h2>EN CONSTRUCCION...</h2>
                      <h3>CONOCENOS</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
