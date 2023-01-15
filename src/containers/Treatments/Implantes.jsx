import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import implante from "../../assets/img/implante.jpg";
import psimplantes from "../../assets/img/psimplantes.jpg";
import arcadacompleta from "../../assets/img/arcadacompleta.jpg";
import imppost from "../../assets/img/imppost.jpg";
import implantecarga from "../../assets/img/implantecarga.jpg";
import elevacion from "../../assets/img/elevacion.jpg";
import dosimplantes from "../../assets/img/dosimplantes-.jpg";
import implantescabecera from "../../assets/img/implantescabecera.jpg"
import "./Treatments.scss";

const Implantes = () => {
    
    return (
      <Container fluid className="treatmentsDesign">
        <Row>
          <Col>
            <Card>
              <img src={implantescabecera} alt="implante" />
            </Card>
            <div>
              <h2>¿Qué es?</h2>
              <p>
                Llamamos implante dental a una raíz artificial de titanio que
                sustituye a uno o más dientes , que estén ausentes en boca o en
                mal estado, nos sirven para rehabilitar las piezas perdidas y
                devolver así la estética y funcionalidad de la cavidad oral.
                Sobre el implante debidamente integrado en el hueso
                (osteointegración )se coloca la corona/s , que es la parte
                visible del diente.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <h2>Diagnóstico</h2>
          <p>
            Debe hacerlo un profesional cualificado , para recomendarnos cual es
            el mejor tratamiento en nuestro caso, utilizando todos los medios
            necesarios como son: el TAC dental, ortopantomografia , radiografías
            periapicales . Para tras una evaluación completa se proponga el
            tratamiento más favorable en cada caso.
          </p>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Card>
          {" "}
          <Row>
            <Col>
              {" "}
              <h3>Implantología Unitaria:</h3>
              <p>
                Llamamos implante unitario a cuando sustituimos 1 sola pieza
                dental, el implante ( raíz de titanio) sustituye a la raíz
                natural del diente , constituyendo la base para la corona dental
                , sin afectar a los dientes adyacentes, ya que la corona esta
                conectada directamente al implante .
              </p>
            </Col>
            <Col>
              {" "}
              <Card className="col-12">
                <img src={implante} alt="implante" />
              </Card>
            </Col>
          </Row>
        </Card>
        <br></br>
        <Card>
          {" "}
          <Row>
            <Col>
              {" "}
              <h3>Puente sobre Implantes:</h3>
              <p>
                No es necesario colocar un implante por cada diente que nos haga
                falta, podemos colocar lo que llamamos un puente sobre
                implantes,el puente va atornillado a los implantes que nos
                sirvan de base, de modo que esta totalmente fijo y estable, si
                los dientes que faltan están juntos, de esta forma se restablece
                la función masticatoria y estética , utilizando el menor numero
                de implantes para debilitar el hueso lo menos posible.
              </p>
            </Col>
            <Col>
              {" "}
              <Card className="col-12">
                <img src={psimplantes} alt="implante" />
              </Card>
            </Col>
          </Row>
        </Card>
        <br></br>
        <Card>
          {" "}
          <Row>
            <Col>
              {" "}
              <h3>Arcada completa con implantes:</h3>
              <p>
                Podemos sustituir todos los dientes de la boca mediante
                implantes, utilizando estos como pilares para atornillar una
                arcada completa, ya sea en el maxilar superior o en la
                mandíbula. ¿Cómo lo hacemos? No es necesario colocar 1 implante
                por cada diente, colocando de 6 a 4 implantes podemos colocar
                dientes fijos atornillados en la arcada completa.
              </p>
            </Col>
            <Col>
              {" "}
              <Card className="col-12">
                <img src={arcadacompleta} alt="implante" />
              </Card>
            </Col>
          </Row>
        </Card>
        <br></br>
        <Card>
          {" "}
          <Row>
            <Col>
              {" "}
              <h3>Implante post-extracción:</h3>
              <p>
                Es aquel que colocamos en el mismo momento de realizar la
                extracción dental , aprovechando el alveolo ( agujero que deja
                la raíz natural en el hueso) se coloca el implante ( raíz
                artificial) , en una misma intervención , acortando así tiempos
                de cicatrización , es posible incluso poner el mismo día una
                corona ( parte visible del diente) provisional, en el mismo
                momento, recuperando en unas pocas horas la funcionalidad y
                estética del diente perdido.
              </p>
            </Col>
            <Col>
              {" "}
              <Card className="col-12">
                <img src={imppost} alt="implante" />
              </Card>
            </Col>
          </Row>
        </Card>
        <br></br>
        <Card>
          {" "}
          <Row>
            <Col>
              {" "}
              <h3>Implantes de Carga Inmediata</h3>
              <p>
                Son aquellos que se rehabilitan el mismo día, unas horas después
                de la colocación de los implantes. Las coronas que se colocan
                son provisionales tendrán que cambiarse pasado el periodo de
                cicatrización de los implantes ( mas o menos 3 meses) , por las
                coronas definitivas . No importa que tenga que hacerse la
                extracción de los dientes el mismo día, se puede hacer
                extracción dental + colocación de implante + colocación de
                corona provisional , todo el mismo día. Ya sea de un diente o
                una boca entera.
              </p>
            </Col>
            <Col>
              {" "}
              <Card className="col-12">
                <img src={implantecarga} alt="implante" />
              </Card>
              <br></br>
            </Col>
          </Row>
        </Card>
        <br></br>
        <Card>
          {" "}
          <Row>
            <Col>
              {" "}
              <h3>Elevación de Seno Maxilar:</h3>
              <p>
                Situados en el maxilar superior los senos maxilares, a veces por
                su tamaño o por una reabsorción de hueso severa, no es posible
                la colocación de implantes de forma convencional, es necesario
                recurrir esta técnica de injerto de hueso que consiste en elevar
                la membrana del seno sin romperla y colocar hueso artificial en
                el espacio ganado al retirar la membrana, de esa forma
                conseguimos mayor altura de hueso para colocar un implante de la
                longitud deseada. Según casos es posible o no colocar el
                implante en la misma intervención, cuando no lo es lo
                colocaremos de 4 a 6 meses después, cuando el hueso está
                consolidado.
              </p>
            </Col>
            <Col>
              {" "}
              <Card className="col-12">
                <img src={elevacion} alt="implante" />
              </Card>
            </Col>
          </Row>
        </Card>
        <br></br>
        <Card>
          {" "}
          <Row>
            <Col>
              {" "}
              <h3>2 Implantes para sobre dentadura</h3>
              <p>
                Son aquellos que se rehabilitan el mismo día, unas horas después
                de la colocación de los implantes. Las coronas que se colocan
                son provisionales tendrán que cambiarse pasado el periodo de
                cicatrización de los implantes ( mas o menos 3 meses) , por las
                coronas definitivas . No importa que tenga que hacerse la
                extracción de los dientes el mismo día, se puede hacer
                extracción dental + colocación de implante + colocación de
                corona provisional , todo el mismo día. Ya sea de un diente o
                una boca entera.
              </p>
            </Col>
            <Col>
              {" "}
              <Card className="col-12">
                <img src={dosimplantes} alt="implante" />
              </Card>
            </Col>
          </Row>
        </Card>
      </Container>
    );
}

export default Implantes;