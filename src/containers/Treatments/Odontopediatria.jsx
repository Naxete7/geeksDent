import React from "react";

import odontope from "../../assets/img/odontope.jpg";
import traumatismo from "../../assets/img/traumatismo.jpg";
import interceptiva from "../../assets/img/interceptiva.jpg"
import { Card, Col, Container, Row } from "react-bootstrap";
import odontopecabecera from "../../assets/img/odontopecabecera.jpg"

const Odontopediatria = () => {
    
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <img src={odontopecabecera} alt="implante" />
            </Card>
            <h3>¿Qué es?</h3>z
            <p>
              La odontopediatría es la rama de la odontología que se ocupa
              principalmente del cuidado y tratamiento de la salud bucodental en
              los niños, desde su nacimiento, donde los dientes todavía no han
              erupacionado, hasta la preadolescencia.
            </p>
          </Col>
        </Row>
        <Row className=" d-flex flex-wrap justify-content-center">
          <Col className="col-8">
            <Card>
              <img src={odontope} alt="odontope" />
            </Card>
            <p>
              Esta especialidad trata de controlar y tratar las posibles
              lesiones y anomalías que puedan surgir durante este tiempo. El
              objetivo de la odontopediatría es dar un tratamiento diferente y
              más específico a los más pequeños; ya que sus dientes son todavía
              muy sensibles, al tratarse de dientes de leche y lo que se
              pretende es preservar lo máximo posible estos dientes naturales en
              buenas condiciones hasta que erupcionen los dientes definitivos.
            </p>
          </Col>
        </Row>
        <Row className=" d-flex flex-wrap justify-content-center">
          <Col className="col-8">
            <h3>Los principales tratamientos en odontopediatría son:</h3>
            <h5>Empastes u Obturaciones:</h5>
            <p>
              Las obturaciones, comúnmente conocidas como empastes dentales, es
              el tratamiento que se realiza a los pacientes afectados por caries
              u otras enfermedades que generan una cavidad. Con la obturación se
              consigue reparar y restaurar la anatomía y función del diente.
            </p>
            <h5>Traumatismos y fracturas</h5>
            <p>
              Los traumatismos dentales y las fracturas son bastante habituales
              en los niños debido a las caídas y golpes que sufren al ser
              pequeños. Es importante acudir al dentista para restaurar el
              diente, de manera que no afecte la estética ni la funcionalidad de
              la mordida del niño.
            </p>
          </Col>
        </Row>
        <Row className=" d-flex flex-wrap justify-content-center">
          <Col className="col-8">
            <Card>
              <img src={traumatismo} alt="traumatismo" />
            </Card>
          </Col>
        </Row>
        <Row>
          <h5>Pulpotomía y pulpectomía</h5>
          <p>
            Cuando infecciones como las caries han avanzado demasiado, es
            necesario hacer un tratamiento de pulpotomía o pulpectomía, los
            cuales consisten en la remoción de una parte de la pulpa del diente
            de leche para eliminar todo rastro de infección, restaurar el
            espacio con sellador y evitar cualquier inflamación y dolor.
          </p>
        </Row>
        <Row>
          <h5>Ortodóncia</h5>
          <p>
            La ortodoncia interceptiva u ortodoncia infantil muy popular entre
            los niños. Con ella se consigue mediante la ayuda de aparatos
            funcionales que ejercen distintas fuerzas, disponer del espacio
            maxilar adecuado para que los dientes de leche sigan desarrollándose
            debidamente, sin perjudicar la llegada de las piezas permanentes.
          </p>
          <Card>
            <img src={interceptiva} alt="interceptiva" />
          </Card>
        </Row>
        <Row>
          <h5>Aplicación de Flúor</h5>
          <p>
            Uno de los tratamientos preventivos más populares es la aplicación
            de flúor, el cual funciona para restaurar la resistencia de las
            capas superiores del diente y evitar la aparición de infecciones y
            caries. Este procedimiento es completamente indoloro y puede ser
            llevado a cabo por medio de geles, barniz o espuma. Si quieres
            acudir GeeksDent para que le realicemos una revisión bucodental a tu
            hijo o hija, no dudes en ponerte en contacto con nosotros. La
            prevención es fundamental para que los más pequeños tengan unos
            dientes sanos y su desarrollo sea el correcto hasta llegar a la edad
            adulta.
          </p>
        </Row>
      </Container>
    );
}


export default Odontopediatria;