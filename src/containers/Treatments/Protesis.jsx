import React from "react";
import protesisDental from "../../assets/img/protesisDental.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";
import protesiscabecera from "../../assets/img/protesiscabecera.jpg"

const Protesis = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <img src={protesiscabecera} alt="implante" />
          </Card>
          <h3>Prótesis Dental</h3>
          <p>
            Cuando hemos perdido alguna o varias piezas dentales, necesitamos
            realizarnos un tratamiento que restaure nuestros dientes y nos
            permita comer sin complicaciones y también sonreír sin complejos.
            Para ello, podemos pensar en el tratamiento de implantes dentales y
            en el de las prótesis dentales. Esto nos permitirá sustituir los
            dientes de una manera eficaz y estética. Existen prótesis removibles
            y prótesis fijas, que es la solución principal que solemos
            recomendar a todos los pacientes que han perdido buena parte de su
            dentadura.
          </p>
        </Col>
      </Row>
      <Row>
        <Card>
          <img src={protesisDental} alt="protesisDental" />
        </Card>
      </Row>
      <Row>
        <Col>
          <h3>Prótesis Fija</h3>
          <p>
            Una prótesis fija es aquella que se cementa sobre pilares, que
            pueden ser dientes o implantes. Si colocamos la prótesis sobre
            dientes, previamente habrá que tallarlos. Si es sobre implantes,
            esos se integran en la estructura ósea y sobre ellos se coloca la
            corona o el puente. Este tipo de prótesis son muy útiles y efectivas
            ya que ayudan a que el paciente recupere la total funcionalidad de
            su boca y que incluso les hace olvidarse de que la llevan.
          </p>
          <h3>Prótesis Removible</h3>
          <p>
            Las prótesis removibles son aquellas que podemos quitar y poner
            cuando sea necesario. Pueden ser parciales, si falta algún diente, o
            completas, si falta la arcada entera. Las prótesis removibles son
            más económicas que las prótesis fijas, pero también más inestables e
            incómodas, y favorecen la absorción ósea, pero eso ya apenas se
            recomiendan. En nuestra clínica, realizamos las prótesis dentales
            con la tecnología CAD-CAM y conseguimos rehabilitaciones
            odontológicas muy precisas y de la alta calidad, con la posibilidad
            de hacerlo en la propia clínica. Si quieres acudir a GeeksDent para
            que te estuvimos tu caso, ponte en contacto con nosotros.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Protesis;
