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

const Team = () => {
  return (
    <Container fluid className="teamDesign">
      <h3>NUESTRO EQUIPO</h3>
      <Row>
        <Col className="d-flex col-12 flex-wrap justify-content-center">
          <Card className="cardStyle m-4" style={{ width: "20rem" }}>
            <Card.Img variant="top" src={DOCTOR1} />
            <Card.Body>
              <Card.Title>Juan Pedro Quiles</Card.Title>
              <Card.Text>Endodoncias/Prótesis</Card.Text>
            </Card.Body>
          </Card>

          <Card className="cardStyle m-4" style={{ width: "20rem" }}>
            <Card.Img variant="top" src={DOCTOR3} />
            <Card.Body>
              <Card.Title>Faustino Sala</Card.Title>
              <Card.Text>Cirujano/Implantes</Card.Text>
            </Card.Body>
          </Card>

          <Card className="cardStyle m-4" style={{ width: "20rem" }}>
            <Card.Img variant="top" src={DOCTOR11} />
            <Card.Body>
              <Card.Title>Laura Barchino</Card.Title>
              <Card.Text>Odontopediatra</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col className="d-flex col-12 flex-wrap justify-content-center">
          <Card className="cardStyle m-4" style={{ width: "20rem" }}>
            <Card.Img variant="top" src={DOCTOR12} />
            <Card.Body>
              <Card.Title>Javier Flors</Card.Title>
              <Card.Text>Ortodoncista</Card.Text>
            </Card.Body>
          </Card>

          <Card className="cardStyle m-4" style={{ width: "20rem" }}>
            <Card.Img variant="top" src={DOCTOR17} />
            <Card.Body>
              <Card.Title>Olivia García</Card.Title>
              <Card.Text>Estética Dental/Prótesis</Card.Text>
            </Card.Body>
          </Card>

          <Card className="cardStyle m-4" style={{ width: "20rem" }}>
            <Card.Img variant="top" src={DOCTOR13} />
            <Card.Body>
              <Card.Title>Maite Catalá</Card.Title>
              <Card.Text>Periodoncista</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col className="d-flex col-12 flex-wrap justify-content-center">
          <Card className="cardStyle m-4" style={{ width: "20rem" }}>
            <Card.Img variant="top" src={DOCTOR18} />
            <Card.Body>
              <Card.Title>Ana Campillo</Card.Title>
              <Card.Text>Higienista</Card.Text>
            </Card.Body>
          </Card>
  
          <Card className="cardStyle m-4" style={{ width: "20rem" }}>
            <Card.Img variant="top" src={DOCTOR15} />
            <Card.Body>
              <Card.Title>Susana Garcia</Card.Title>
              <Card.Text>Higienista</Card.Text>
            </Card.Body>
          </Card>

          <Card className="cardStyle m-4" style={{ width: "20rem" }}>
            <Card.Img variant="top" src={DOCTOR16} />
            <Card.Body>
              <Card.Title>Ethel Ferrer</Card.Title>
              <Card.Text>Recepción</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Team;
