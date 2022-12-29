import React from "react";
import "./Home.scss";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import im1 from "../../assets/img/im1.png";
import im3 from "../../assets/img/im3.jpeg";
import im4 from "../../assets/img/im4.jpeg";

function IndividualIntervalsExample() {
  return (
    <Container>
      <Row>
        <Col className="carouselDesign col-12">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-80 carouselDesign fluid"
                src={im1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>GEEKSDENT</h2>
                <p>Ven y empieza a formar parte de nuestra familia.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-95 carouselDesign fluid"
                src={im3}
                alt="Second slide"
              />
              <Carousel.Caption className="textDesign">
                <h3 className="textDesign">
                  En GeeksDent sientete como en casa
                </h3>
                <p className="textDesign">
                  Regístrate, coge cita y ven a vernos sin compromiso
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-80 carouselDesign fluid"
                src={im4}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>¿Quieres que estudiemos tu caso?</h3>
                <p>Pide cita y descubre como podemos mejorar tu sonrisa.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <Row>
        <Col>
          <h3>Satisfacción</h3>
          <p>
            Te ofrecemos una amplia gama de tratamientos bucodentales.
            Pregúntanos en tu primera visita gratuita.
          </p>
        </Col>
        <Col>
          <h3>Experiencia</h3>
          <p>
            Somos una empresa joven en Valencia, pero con una dilatada
            experiencia en el sector. ¡Ven a conocernos sin compromiso!
          </p>
        </Col>
        <Col>
          <h3>Cercania</h3>
          <p>Nos gusta que nuestros pacientes sean parte de nuestra familia, para ello
            los mejores profesionales le trataran de una forma muy cercana y acojedora.
          </p>
        </Col>
        <Col>
          <h3>Soluciones</h3>
          <p>
            Le atenderemos gustosamente tanto en nuestra clínica como en nuestro
            servicio de consultorio Online. ¡Su dentista en casa!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default IndividualIntervalsExample;