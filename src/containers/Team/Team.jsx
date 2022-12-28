import React from "react";
import "./Team.scss";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="homeDesign">
            <h1>GEEKSDENT</h1>
                      <h2>EN CONSTRUCCION...</h2>
                      <h3>NUESTRO EQUIPO</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
