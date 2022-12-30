import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import orto1 from "../../assets/img/orto1.jpg";
import orto2 from "../../assets/img/orto2.jpg";
import orto3 from "../../assets/img/orto3.jpg";
import orto4 from "../../assets/img/orto4.jpg";
import "./Treatments.scss"


const Ortodoncia = () => {
  return (
    <Container>
      <Row>
        <Col>
          <img src={orto1} alt="" className="imgDesign" />
          <h2>ORTODONCIA INVISIBLE + ESCÁNER iTERO + SMILEVIEW</h2>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <Col>
          <img src={orto2} alt="" className="imgDesign" />
        </Col>
        <Col>
          <h2>Ortodoncia Invisible</h2>
          <p>
            Los alineadores Invisalign son una secuencia de férulas
            transparentes donde cada férula tiene programado el movimiento que
            ha de realizar cada diente de forma individual. También es conocida
            como ortodoncia digital ya que la planificación del caso se realiza
            por ordenador, a partir de unos modelos digitales de la boca del
            paciente. Una vez el doctor realiza su plan de tratamiento digital
            puede mostrar al paciente mediante la simulación digital qué
            movimientos se van a realizar en sis dientes y como va a ser el
            aproximadamente el resultado. Los alineadores al ser una ortodoncia
            digital mueven los dientes de manera mas efectiva acortando en
            muchos casos el tiempo de tratamiento de la ortodoncia convencional
            o analógica. En la Clínica Dental Dr. Peset trabajamos con lo
            alineadores Invisalign que son los mas avanzados del mundo.
          </p>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <Col>
          <img src={orto3} alt="" className="imgDesign" />
        </Col>
        <Col>
          <h2>Descubre tu Nueva Sonrisa con iTero</h2>
          <p>
            En Clínica Dental Peset siempre trabajamos con tecnología
            innovadora, y es por ello que contamos con el novedoso escáner
            iTero, un sistema que destaca por su precisión en la obtención de
            imágenes intraorales en 3D y en tiempo real. Con iTero podemos hacer
            una simulación del resultado que conseguiremos tras el tratamiento
            de ortodoncia invisible de Invisalign en la primera visita del
            paciente a nuestra clínica. De esta manera, puede observar la
            situación actual de sus dientes y comprender mejor las explicaciones
            del Doctor. Si quieres saber cómo será tu nueva sonrisa cuando
            finalices tu ortodoncia, ahora es posible con el escáner iTero y su
            tecnología de simulación 3D. Además, también nos permite ver el tipo
            de mordida y analizar en profundidad la estética de la sonrisa. La
            última tecnología está al alcance de nuestros pacientes.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>VENTAJAS DE iTERO</h3>
          <ul>
            <li>
              Rapidez e inmediatez: En 3 minutos obtenemos el registro completo
              de tu boca, lo que nos permite anticipar el resultado del
              tratamiento. En ese mismo momento podremos ver un antes y después
              de la boca del paciente.
            </li>
            <li>Es completamente indoloro.</li>
            <li>
              Es un sistema seguro, no emite ningún tipo de radiación
              perjudicial para la salud del paciente.
            </li>
            <li>La toma de registros se realiza de manera cómoda y limpia.</li>
            <li>
              Ofrece imágenes de alta calidad, haciendo el tratamiento mucho más
              preciso.
            </li>
            <li>
              Es un sistema interactivo. Tanto los niños y como los adultos
              disfrutan viendo el movimiento de sus dientes y jugando con la
              pantalla táctil, lo que hace más amena la visita al ortodoncista.
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <h1>PRUEBA UNA NUEVA SONRISA CON SMILEVIEW SIMULATOR</h1>

        <Col>
          <img src={orto4} alt="" className="imgDesign" />
        </Col>
        <Col>
          <h2>
            SMILEVIEW: Hazte un Selfie y mira el resultado de tu Ortodoncia
          </h2>
          <p>
            SmileView es una herramienta muy interesante que está al alcance de
            los ortodoncistas que trabajan con Ortodoncia Invisible de
            Invisalign. Invisalign SmileView es un software que sirve para
            realizar una simulación de la sonrisa del paciente y poder mostrarle
            cómo será su sonrisa tras finalizar su ortodoncia. El objetivo de
            esta herramienta online es motivar al paciente y que pueda
            comprender mejor en que consiste su tratamiento de ortodoncia.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>¿Cómo Funciona SMILEVIEW?</h2>
          <p>
            Se trata de una aplicación en la que insertamos la fotografía de un
            paciente que quiere realizarse un tratamiento de Invisalign,
            mostrando su sonrisa y enseñando los dientes. Esta tecnología de
            inteligencia artificial nos ofrece en tan solo 60 segundos una
            simulación de cómo le quedarán los dientes y la sonrisa a este
            paciente. Podemos tomar la fotografía en clínica en esa primera
            visita mediante el móvil o tablet, dejar que el paciente se realice
            él mismo un selfie y subir la foto a la herramienta, o bien lo
            podemos hacer mediante el ordenador. Las opciones son diversas y los
            resultados muy aproximados. La diferencia que hay entre el escáner
            intraoral iTero y el SmileView es que con el escáner solo podemos
            ver el resultado de nuestra boca en 3D en una pantalla pero de
            manera muy fiable y que además sirve al ortodoncista para planificar
            el tratamiento; mientras que con el Smile View podemos ver como
            quedará nuestra nueva sonrisa en nuestra cara de manera aproximada,
            ya que es orientativo y en ningún caso serviría para planificar el
            tratamiento.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Ortodoncia;
