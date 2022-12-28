import React from "react";
import "./Treatments.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import peri2 from "../../assets/img/peri2.jpg";
import Odontopediatria2 from "../../assets/img/odontopediatra2.jpg";
import blanque1 from "../../assets/img/blanque1.jpg";
import endo1 from "../../assets/img/endo1.png";
import implantes1 from "../../assets/img/implantes1.jpg";
import ORTODONCIA from "../../assets/img/ORTODONCIA.jpg";
import ORTODONCIA1 from "../../assets/img/ORTODONCIA1.jpg";
import ortopedia1 from "../../assets/img/ortopedia1.jpg";





const Treatments = () => {
  return (
    <Container fluid>
      <h3>NUESTROS TRATAMIENTOS</h3>
      <Row>
        <Col className="col-4">
          
          <Card className="cardHover">
            <img src={endo1} alt="" />
            <h3>Endodoncia</h3>
            <h6>
              Contamos con la úlltima tecnologíay las técnicas mas vanguardistas
              en endodoncia rotatoria, siempre avalado por nuestros expertos
              para dar a tus dientes el mejor de los tratamientos.
            </h6>
          </Card>
        </Col>
        <Col className="col-4">
          <Card>
            <img src={blanque1} alt="" />
            <h3>Estética Dental</h3>
            <h6>
              Blanquemientos, carillas de porcelana, de composite, todo lo
              necesario para que luzcas la mejor de las sonrisas, siempre con el
              respaldo de los mejores profesionales.
            </h6>
          </Card>
        </Col>
        <Col className="col-4">
          <Card>
            <img src={implantes1} alt="" />
            <h3>Implantes</h3>
            <h6>
              La reposición de los dientes perdidos ha de tener la mayor de las
              garantías contamos con las técnicas más avanzadas y materiales de
              primera calidad como los implantes STRAUMANN el mejor implante del
              mercado.
            </h6>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col className="col-4">
          <Card>
            <img src={Odontopediatria2} alt="" />
            <h3>Odontopediatría</h3>
            <h5>
              Por que tus hijos se merecen el mejor de los cuidados para sus
              dientes contamos con especialistas en odontopediatria altamente
              cualificados.
            </h5>
          </Card>
        </Col>
        <Col className="col-4">
          <Card>
            <img src={ORTODONCIA} alt="" />
            <h3>Ortodoncia</h3>
            <h6>
              Ortodoncia con brackets metálicos de porcelana y zafiro. Contamos
              con las últimas técnicas de alineadores invisibles como Smysecret
              o Inviflex. Así como, ortodoncia lingual.
            </h6>
          </Card>
        </Col>
        <Col className="col-4">
          <Card>
            <img src={ORTODONCIA1} alt="" />
            <h3>Ortodoncia Invisible</h3>
            <h6>
              Los alineadores Invisalign son una secuencia de férulas
              transparentes donde cada férula tiene programado el movimiento que
              ha de realizar cada diente de forma individual.
            </h6>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col className="col-4">
          <Card>
            <img src={peri2} alt="" />
            <h3>Periodoncia</h3>
            <h6>Todo para el cuidado de tus encías.</h6>
          </Card>
        </Col>
        <Col className="col-4">
          <Card>
            <img src={ortopedia1} alt="" />
            <h3>Protesis</h3>
            <h6>
              Trabajamos con los mejores laboratorios protésicos para devolver
              la función a tu boca con la máxima estética.
            </h6>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Treatments;
