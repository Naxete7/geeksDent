import React from "react";
import "./Treatments.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import peri2 from "../../assets/img/peri2.jpg";
import Odontopediatria2 from "../../assets/img/odontopediatra2.jpg";
import blanque1 from "../../assets/img/blanque1.jpg";
import endo1 from "../../assets/img/endo1.png";
import implantes1 from "../../assets/img/implantes1.jpg";
import ORTODONCIA from "../../assets/img/ORTODONCIA.jpg";
import ORTODONCIA1 from "../../assets/img/ORTODONCIA1.jpg";
import ortopedia1 from "../../assets/img/ortopedia1.jpg";
import "../../components/Button/ButtonDesign.scss"


const Treatments = () => {
  return (
    <Container fluid className="treatmentsDesign">
      <h3>NUESTROS TRATAMIENTOS</h3>
      <Row>
        <Col className="d-flex col-12 flex-wrap justify-content-center">
          <Card className="cardStyle m-4" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={endo1} />
            <Card.Body>
              <Card.Title>
                <a href="/endodoncia">Endodóncia</a>
              </Card.Title>
              <Card.Text className="textDesign ">
                Contamos con la úlltima tecnología y las técnicas mas
                vanguardistas en endodoncia rotatoria, siempre avalado por
                nuestros expertos para dar a tus dientes el mejor de los
                tratamientos.
              </Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <Card className=" cardStyle m-3 " style={{ width: "17rem" }}>
            <Card.Img variant="top" src={blanque1} />
            <Card.Body>
              <Card.Title>
                <a href="/estetica">Estética Dental</a>
              </Card.Title>
              <Card.Text className="textDesign ">
                Blanquemientos, carillas de porcelana, de composite, todo lo
                necesario para que luzcas la mejor de las sonrisas, siempre con
                el respaldo de los mejores profesionales.
              </Card.Text>
              {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
          </Card>
          <br></br>
          <Card style={{ width: "18rem" }} className="cardStyle m-3">
            <Card.Img variant="top" src={implantes1} />
            <Card.Body>
              <Card.Title>
                {" "}
                <a href="/implantes">Implantes</a>
              </Card.Title>
              <Card.Text>
                La reposición de los dientes perdidos ha de tener la mayor de
                las garantías contamos con las técnicas más avanzadas y
                materiales de primera calidad como los implantes STRAUMANN el
                mejor implante del mercado.
              </Card.Text>
              {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col className="d-flex col-12 flex-wrap  justify-content-center">
          <Card style={{ width: "18rem" }} className="cardStyle m-3">
            <Card.Img variant="top" src={Odontopediatria2} />
            <Card.Body>
              <Card.Title>
                {" "}
                <a href="/odontopediatria">Odontopediatría</a>
              </Card.Title>
              <Card.Text>
                Por que tus hijos se merecen el mejor de los cuidados para sus
                dientes contamos con especialistas en odontopediatria altamente
                cualificados.
              </Card.Text>
              {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className="cardStyle m-3">
            <Card.Img variant="top" src={ORTODONCIA} />
            <Card.Body>
              <Card.Title>
                {" "}
                <a href="/ortodoncia">Ortodoncia</a>
              </Card.Title>
              <Card.Text>
                Ortodoncia con brackets metálicos de porcelana y zafiro.
                Contamos con las últimas técnicas de alineadores invisibles como
                Smysecret o Inviflex. Así como, ortodoncia lingual.
              </Card.Text>
              {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className="cardStyle m-3">
            <Card.Img variant="top" src={ORTODONCIA1} />
            <Card.Body>
              <Card.Title>
                {" "}
                <a href="/invisalign">Invisalign</a>
              </Card.Title>
              <Card.Text>
                Los alineadores Invisalign son una secuencia de férulas
                transparentes donde cada férula tiene programado el movimiento
                que ha de realizar cada diente de forma individual.
              </Card.Text>
              {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col className="d-flex col-12 flex-wrap  justify-content-center">
          <Card style={{ width: "18rem" }} className="cardStyle m-3">
            <Card.Img variant="top" src={peri2} />
            <Card.Body>
              <Card.Title>
                {" "}
                <a href="/periodoncia">Periodoncia</a>
              </Card.Title>
              <Card.Text>Todo para el cuidado de tus encías.</Card.Text>
              {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className="cardStyle m-3">
            <Card.Img variant="top" src={ortopedia1} />
            <Card.Body>
              <Card.Title >
                {" "}
                <a href="/protesis">Prótesis</a>
              </Card.Title>
              <Card.Text>
                Trabajamos con los mejores laboratorios protésicos para devolver
                la función a tu boca con la máxima estética.
              </Card.Text>
              {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Treatments;
