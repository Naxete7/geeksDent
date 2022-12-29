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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-emoji-smile"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
          </svg>
          <br></br>
          <br></br>
          <h3>Satisfacción</h3>
          <p>
            Te ofrecemos una amplia gama de tratamientos bucodentales.
            Pregúntanos en tu primera visita gratuita.
          </p>
        </Col>
        <Col>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-clipboard2-plus"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
            <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z" />
            <path d="M8.5 6.5a.5.5 0 0 0-1 0V8H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V9H10a.5.5 0 0 0 0-1H8.5V6.5Z" />
          </svg>
          <br></br>
          <br></br>
          <h3>Experiencia</h3>
          <p>
            Somos una empresa joven en Valencia, pero con una dilatada
            experiencia en el sector. ¡Ven a conocernos sin compromiso!
          </p>
        </Col>
        <Col>
          
          <br></br>
          <br></br>
          <h3>Cercania</h3>
          <p>
            Nos gusta que nuestros pacientes sean parte de nuestra familia, para
            ello los mejores profesionales le trataran de una forma muy cercana
            y acojedora.
          </p>
        </Col>
        <Col>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-question-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
          </svg>
          <br></br>
          <br></br>
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