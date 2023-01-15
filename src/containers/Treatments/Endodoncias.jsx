import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import endodoncia from "../../assets/img/endodoncia.png";
import endodonciacabecera from "../../assets/img/endodonciacabecera.jpg";
import "./Treatments.scss";

const Endodoncia = () => {
  return (
    <Container fluid className="treatmentsDesign">
      <Row>
        <Col>
          <Card>
            <img src={endodonciacabecera} alt="implante" />
          </Card>
          <h3>¿Qué es?</h3>
          <p>
            A la endodoncia también se la conoce como “tratamiento de conductos”
            o “matar el nervio”. La endodoncia se realiza para poder conservar
            un diente afectado en boca y no tener que extraerlo, ya que siempre
            es mejor mantener los dientes naturales. La endodoncia se realiza
            cuando se ve afectado el nervio del paciente, ya sea por caries
            donde las bacterias hayan entrado en contacto con el nervio del
            diente, después de haber dañado el esmalte y la dentina; o por algún
            traumatismo que haya recibido este diente y se haya visto dañado el
            nervio.
          </p>
        </Col>
      </Row>
      <Row className=" d-flex flex-wrap justify-content-center">
        <Col className="col-8">
          <Card className="cardStyle">
            <img src={endodoncia} alt="endodoncia" />
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <h3>¿En qué consiste la endodoncia?</h3>
          <p>
            Este procedimiento consiste en eliminar las bacterias que se
            encuentran en el conducto del diente afectado eliminando totalmente
            o parcialmente, la pulpa del diente o dientes para sellar el
            conducto. El paciente no sufre ninguna molestia a lo largo del
            proceso, ya que previamente se le anestesia la zona en la cual se le
            va a realizar la endodoncia. En primer lugar, el endodoncista
            realiza un agujero en la parte de la corona del diente, ya que es la
            única vía que existe para acceder a la parte de la pulpa. En segundo
            lugar, se procede a extraer esta pulpa y a continuación a limpiar el
            conducto. Tras los anteriores pasos, hay un proceso de obturación en
            el que se procede a sellar el conducto y el agujero realizado en la
            corona. El resultado final será el de un diente completamente
            insensibilizado y que dejará de molestar y de provocar dolor al
            paciente. Posteriormente al procedimiento de la endodoncia, en
            GeeksDent realizamos un seguimiento del paciente para comprobar que
            no haya habido complicaciones y que esté llevando una evolución
            adecuada. El tratamiento de conductos o endodoncia representa un
            tratamiento de suma importancia para evitar la pérdida de las piezas
            seriamente dañadas y comprometidas, logrando conservarlas en boca
            una vez que han sido rehabilitadas, y que de otra manera tendrían
            que haber sido extraídas.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Endodoncia;
