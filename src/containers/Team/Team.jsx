import React from "react";
import "./Team.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import DOCTOR1 from "../../assets/img/DOCTOR1.jpg";
import DOCTOR12 from "../../assets/img/DOCTOR12.jpg";
import DOCTOR3 from "../../assets/img/DOCTOR3.jpg";
import DOCTOR18 from "../../assets/img/DOCTOR18.jpg";
import DOCTOR15 from "../../assets/img/DOCTOR15.jpg";
import DOCTOR11 from "../../assets/img/DOCTOR11.jpg";
import DOCTOR13 from "../../assets/img/DOCTOR13.jpg";
import DOCTOR17 from "../../assets/img/DOCTOR17.jpg";
import DOCTOR16 from "../../assets/img/DOCTOR16.jpg";

const Home = () => {
  return (
    <Container fluid>
      <h3>NUESTRO EQUIPO</h3>
      <Row>
        <Col className="col-4">
          <Card>
            <img src={DOCTOR1} alt="" />
            <h3>Juan Pedro Quiles</h3>
            <h5>Endodoncias/Prótesis</h5>
          </Card>
        </Col>
        <Col className="col-4">
          <Card>
            <img src={DOCTOR3} alt="" />
            <h3>Faustino Sala</h3>
            <h5>Cirujano/Implantes</h5>
          </Card>
        </Col>
        <Col className="col-4">
          <Card>
            <img src={DOCTOR11} alt="" />
            <h3>María Castillo</h3>
            <h5>Odontopediatra</h5>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="col-4">
          <Card>
            <img src={DOCTOR12} alt="" />
            <h3>Javier Flors</h3>
            <h5>Ortodoncista</h5>
          </Card>
        </Col>
        <Col className="col-4">
          <Card>
            <img src={DOCTOR17} alt="" />
            <h3>Olivia García</h3>
            <h5>Estética Dental/Prótesis</h5>
          </Card>
        </Col>
        <Col className="col-4">
          <Card>
            <img src={DOCTOR13} alt="" />
            <h3>Maite Catalá</h3>
            <h5>Periodoncista</h5>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="col-4">
          <Card>
            <img src={DOCTOR15} alt="" />
            <h3>Ana Campillo</h3>
            <h5>Higienista</h5>
          </Card>
        </Col>
        <Col className="col-4">
          <Card>
            <img src={DOCTOR18} alt="" />
            <h3>Susana Garcia</h3>
            <h5>Higienista</h5>
          </Card>
        </Col>
        <Col className="col-4">
          <Card>
            <img src={DOCTOR16} alt="" />
            <h3>Ethel Ferrer</h3>
            <h5>Recepción</h5>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
