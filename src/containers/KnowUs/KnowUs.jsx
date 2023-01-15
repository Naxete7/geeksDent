import React from "react";
import "./KnowUs.scss";
import { Card, Col, Container, Row } from "react-bootstrap";
import conocenos from "../../assets/img/conocenos.jpg";
import datos from "../../assets/img/datos.jpg";

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
      <Row className=" d-flex flex-wrap justify-content-center">
        <Col className="col-10">
          <Card>
            <img src={datos} alt="" />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card></Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
