import React from "react";
import "./KnowUs.scss";
import { Card, Col, Container, Row } from "react-bootstrap";
import conocenos from "../../assets/img/conocenos.jpg";

const Home = () => {
  return (
    <Container fluid className="knowUsDesign">
      <Row>
        <Col className="col-12 d-flex align-content-center justify-content-center  ">
          <Card>
            <img src={conocenos} alt="" />
          </Card>
        </Col>
      </Row>
      <Row>
        <h2>Nosotros</h2>
        <p>
          GeeksDent nace con un claro objetivo, ofrecer una odontología de
          calidad basada en los últimos avances y tratamientos más
          vanguardistas. Es por ello, que reunimos un gran grupo de
          profesionales expertos en las distintas áreas de la odontología y así
          poder ofrecer la mejor calidad asistencial a nuestros pacientes,
          abordando cada caso des de las distintas disciplinas de la odontología
          y ofreciendo un amplio abanico de posibilidades de tratamiento que se
          adapte a las características y necesidades de cada caso.
        </p>
      </Row>
      <Row className="footerKnowUsDesign">
        <h1>Tu Clínica de confianza </h1>
        <h4>Cada vez nos eligen más pacientes</h4>
        <div>
          <canvas id="radarChart"></canvas>
          <canvas id="pieChart"></canvas>
        </div>
      </Row>
    </Container>
  );
};

export default Home;
