import React from "react";
import "./Treatments.scss";
import carilla from "../../assets/img/carilla.jpg";
import coronas from "../../assets/img/coronas.jpg";
import blanqueamiento from "../../assets/img/blanqueamiento.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";
import esteticacabecera from "../../assets/img/esteticacabecera.jpg";

const Estetica = () => {
  return (
    <Container
      fluid
      className="treatmentsDesign d-flex flex-wrap justify-content-center"
    >
      <Row className="col-12 d-flex flex-wrap justify-content-center">
        <Col>
          <Card>
            <img src={esteticacabecera} alt="implante" />
          </Card>
          <h1 className="subtitulos">
            {" "}
            <b>Carillas Dentales</b>
          </h1>
          <p>
            Llamamos carilla a la colocación de un material (cerámica o
            composite) sobre la superficie del diente, para darle una mejor
            estética y funcionalidad, usualmente se coloca solo sobre la cara
            frontal del diente y el tratamiento de preparación es mínimamente
            invasivo, permitiéndonos mantener prácticamente toda la estructura
            del mismo. Las carillas pueden ser:
          </p>
          <h4 className="subtitulos">Carillas de Composite</h4>
          <p>
            Se realiza en una sola sesión en clínica , colocando una fina capa
            de resina sobre el diente que nos permite modificar color y forma
            del diente de manera inmediata , se pueden hacer con diferentes
            técnicas, de forma directa sobre el diente donde el odontólogo va
            dando la forma deseada insitu, o inyectadas.
          </p>
          <h4 className="subtitulos">Carillas de Inyectadas de Composite</h4>
          <p>
            Están hechas también de resina pero el diseño se hace previamente
            por ordenador ( diseño de sonrisa), se envía al laboratorio
            protésico para que nos hagan un molde de nuestro diseño ( encerado
            diagnostico) y mediante una llave de silicona se traslada a la boca
            del paciente, por lo tanto el paciente tiene la oportunidad de ver
            como va a quedar antes de realizar el tratamiento.
          </p>
          <h4 className="subtitulos">Carillas de Cerámica</h4>
          <p>
            Es una fina lamina de cerámica, que se adhieren al diente con un
            cemento y están libres de metal, se realiza la preparación del
            diente en la clínica dental , el diseño de los dientes por
            ordenador, y se fabrican en el laboratorio. Una vez terminadas se
            colocan sobre los dientes previamente preparados y se cementan
            quedando perfectamente ajustadas a la superficie del diente, con un
            aspecto de naturalidad total .
          </p>
        </Col>
      </Row>
      <Row className="col-6 d-flex flex-wrap justify-content-center">
        <Col>
          <Card className="cardStyle">
            <img
              src={carilla}
              alt="carilla"
              className="d-flex flex-wrap justify-content-center"
            />
          </Card>
        </Col>
      </Row>
      <Row className="col-8 d-flex flex-wrap justify-content-center">
        <Col className="">
          <h1 className="subtitulos">
            {" "}
            <b>Coronas Dentales</b>
          </h1>
          <p>
            Consiste en una funda que se encarga de proteger los dientes en
            todas sus caras , dando al diente resistencia y estética . Las
            coronas pueden ser de diferentes tipos de materiales: Cerámicas,
            Zirconio, Metalcerámica. Las coronas están indicadas para
            rehabilitar el diente después de una endodoncia, dientes muy
            reconstruidos que han perdido mucha estructura , dientes erosionados
            , cambios de color muy extremos, para rehabilitar dientes
            desgastados por casos de bruxismo, roturas de dientes por
            traumatismos. La preparación se realiza en la clínica por el
            odontólogo, se toma una medida y se envía para su fabricación al
            laboratorio protésico, donde una semana después aproximadamente,
            estarán listas para su colocación, mientras tanto llevara unas
            coronas provisionales para proteger el diente y hacer una función
            estética.
          </p>
        </Col>
      </Row>
      <Row className="col-8 d-flex flex-wrap justify-content-center">
        <Card className="cardStyle">
          <img
            src={coronas}
            alt="coronas"
            className="d-flex flex-wrap justify-content-center"
          />
        </Card>
      </Row>
      <Row className="col-8 d-flex flex-wrap justify-content-center">
        <Col>
          <h1 className="subtitulos">
            {" "}
            <b>Blanqueamiento Dental</b>
          </h1>
          <p>
            Es el tratamiento mediante el cual cambiamos el color del diente ,
            volviéndolo más blanco, mediante la utilización de un producto
            químico que se coloca en la superficie del diente, este penetra el
            esmalte llegando a la dentina y causando un efecto blanqueante en
            toda la superficie del diente. Hay diferentes tipos de
            blanquemiento, marcas y procedimientos, pero todos se basan en los
            mismo. Puede ser de tres tipos:
          </p>
        </Col>
      </Row>
      <br></br>
      <Row className="col-8 d-flex flex-wrap justify-content-center">
        <Card className="cardStyle">
          <img
            src={blanqueamiento}
            alt="blanqueamiento"
            className="d-flex flex-wrap justify-content-center"
          />
        </Card>
        <br></br>
      </Row>
      <br></br>
      <Row>
        <Col>
          <h4 className="subtitulos">Blanqueamiento de clínica</h4>
          <p>
            Es el que realiza el dentista en la consulta, colocando el producto
            encima del diente durante un tiempo determinado, activándolo o no
            con láser ( dependiendo el producto) , se realiza en una sesión,
            aunque puede repetirse el proceso en caso de ser necesario.
          </p>
          <h4 className="subtitulos">Blanqueamiento domiciliario</h4>
          <p>
            Lo realiza el paciente en casa mediante unas férulas, se le entregan
            unas férulas hechas a medida con el producto y lo aplicara en casa,
            normalmente durante la noche para dormir.
          </p>
          <h4 className="subtitulos">Blamqueamiento clínica+domiciliario</h4>
          <p>
            Para lograr el resultado máximo de blanco , recomendamos realizar el
            tratamiento combinado, el de clínica+ el domiciliario.
            Blanqueamiento interno del diente Cirugías de tejido Blando
            Alineadores invisibles+ Prótesis sobre implantes
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Estetica;
