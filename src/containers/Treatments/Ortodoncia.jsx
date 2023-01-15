import React from "react";
import ortodonciaUno from "../../assets/img/ortodonciaUno.jpg";
import ortodonciaInfantil from "../../assets/img/ortodonciaInfantil.jpg";
import invisalign from "../../assets/img/invisalign.jpg";
import brackets from "../../assets/img/brackets.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";
import ortodonciacabecera from "../../assets/img/ortodonciacabecera.jpg"
import "./Treatments.scss";

const Ortodoncia = () => {
    
    return (
      <Container fluid className="treatmentsDesign">
        <Row>
          <Col>
            <Card>
              <img src={ortodonciacabecera} alt="implante" />
            </Card>
            <h3>¿Qué es?</h3>
            La Ortodoncia es la especialidad dentro de la odontología que se
            encarga del diagnóstico y tratamiento de los diferentes problemas
            maloclusivos y de crecimiento. Existen diferentes problemas
            dentofaciales que son diagnosticados y tratados por el Ortodoncista
            como pueden ser el apiñamiento, la mordida cruzada, la mordida
            abierta, etc.
            <h3>¿Qué tipos de maloclusiones hay?</h3>
            <h5>· Clase II</h5>
            <p>
              Es cuando el paciente tiene la mandíbula pequeña o un maxilar muy
              grande diremos que es de origen dental cuando los dientes
              superiores muy adelantados y siempre y cuando tanto maxilar como
              mandíbula sean de un tamaño normal.
            </p>{" "}
            <h5> · Clase III</h5>
            <p>
              Es cuando el paciente tiene la mandíbula muy grande o un maxilar
              pequeño diremos que el origen es dental cuando los dientes de
              abajo se sitúen por delante de los dientes de arriba siempre y
              cuando tanto maxilar como mandíbula sean de un tamaño normal. ·
              Mordida abierta Se suele producir por el uso del chupete en niños
              mayores a dos años, o por la presencia de algún mal hábito como
              puede ser chuparse el dedo o la deglución atípica (cuando al
              tragar se pone la lengua entre los dientes anteriores)
            </p>{" "}
            <h5>· Sobremordida o mordida profunda</h5>
            <p>
              Cuando los incisivos superiores tapan completamente a los
              incisivos inferiores.
            </p>
            <h5>· Mordida cruzada</h5>
            <p>
              Cuando el paladar es mas estrecho que la mandíbula por lo que se
              puede apreciar como los molares superiores muerden por dentro de
              los molares inferiores
            </p>{" "}
            <h5>· Apiñamiento</h5>
            <p>
              Amontonamiento de los dientes que se produce generalmente por
              falta de espacio. Estos problemas pueden darse por separado o de
              manera conjunta algunos de ellos.
            </p>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row className=" d-flex flex-wrap justify-content-center">
          <Col className="col-8">
            <Card className="cardDesign">
              <img src={ortodonciaUno} alt="ortodoncia" />
            </Card>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <h3>Ortodoncia interceptiva</h3>
            <h5>· ¿Que és la ortodoncia interceptiva (ortodoncia infantil)?</h5>
            <p>
              Es un tipo de ortodoncia destinada principalmente a corregir los
              problemas de crecimiento de los huesos maxilares en pacientes de
              menos de 12 años de edad.
            </p>
            <h5>· ¿Por qué ortodoncia interceptiva?</h5>
            <p>
              La ortodoncia interceptiva busca reconducir y estimular el
              crecimiento de los huesos maxilares para un desarrollo y
              crecimiento equilibrado de las estructuras que componen la boca.
              Al fin y al cabo, lo que se busca con este tipo de tratamientos es
              corregir la bases donde van a ir alojados los dientes y haya un
              desarrollo correcto de la función oral.
            </p>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row className=" d-flex flex-wrap justify-content-center">
          <Col className="col-8">
            <Card>
              <img src={ortodonciaInfantil} alt="infantil" />
            </Card>
          </Col>
        </Row>
        <Row>
          <h3>Brackets en ortodoncia</h3>
          <p>
            Cuando hablamos de brackets nos estamos refiriendo aun tipo de
            aparato que se utiliza en ortodoncia para tratar la mal posición de
            los dientes. El bracket sirve como punto de apoyo para aplicar las
            fuerzas necesarias par que se produzca el movimiento del diente,
            unidos a los arcos de ortodoncia servirán para resolver los distinto
            problemas maloclusivos o de mala oclusión que presenta el paciente.
          </p>
          <h6>Existen diferentes tipos de brackets</h6>
          <ul>
            <li>Brackets metálicos</li>
            <li>Brackets de porcelana</li>
            <li>Brackets de Zafiro</li>
          </ul>
          <p>
            Las diferencias entre los distintos tipos de brackets residen
            principalmente en el apartado estético siendo los de zafiro al ser
            transparentes los que mejor se mimetizan con el diente.
          </p>
          <h6>¿Por qué escoger brackets?</h6>
          <p>
            Por que es una opción de tratamiento económica y efectiva que viene
            avalada por su amplia utilización y sus años de desarrollo.
          </p>
        </Row>
        <br></br>
        <br></br>
        <Row className=" d-flex flex-wrap justify-content-center">
          <Col className="col-8">
            <Card>
              <img src={brackets} alt="brackets" />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Ortodoncia lingual</h3>
            <p>
              Es una técnica consistente en la utilización de unos brackets que
              van pegados por la cara interna del diente por lo que no se ven.
              En la ortodoncia lingual la fuerza del bracket la ejerce desde la
              cara interna del diente por lo que son prácticamente invisibles
            </p>
            <h6> ¿Por qué escoger brackets linguales?</h6>
            <p>
              Por que son una excelente opción para realizar tratamientos de
              alineación de las arcadas de forma rápida y discreta para el
              paciente
            </p>

            <h3>Ortodoncia Invisible</h3>
            <p>
              Los alineadores son una secuencia de férulas transparentes donde
              cada férula tiene programado el movimiento que ha de realizar cada
              diente de forma individual. También es conocida como ortodoncia
              digital ya que la planificación del caso se realiza por ordenador,
              a partir de unos modelos digitales de la boca del paciente. Una
              vez el doctor realiza su plan de tratamiento digital puede mostrar
              al paciente mediante la simulación digital qué movimientos se van
              a realizar en sis dientes y como va a ser el aproximadamente el
              resultado. Los alineadores al ser una ortodoncia digital mueven
              los dientes de manera mas efectiva acortando en muchos casos el
              tiempo de tratamiento de la ortodoncia convencional o analógica.
              En la Clínica Dental Dr. Peset trabajamos con lo alineadores de
              invisalignr que son los mas avanzados del mundo.
            </p>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row className=" d-flex flex-wrap justify-content-center">
          <Col className="col-8">
            <Card>
              <img src={invisalign} alt="invisalign" />
            </Card>

            <h6>¿Por qué escoger alineadores Invisalign?</h6>
            <ul>
              <li>
                Por que es una ortodoncia digital, es mas rápida que la
                ortodoncia convencional y es capaz de solucionar toda clase de
                problemas maloclusivos.
              </li>
              <li>
                Es cómoda; puedes comer con total comodidad y cualquier clase de
                alimento por que se quita y se pone.
              </li>
              <li>
                Es limpia; al ser removible no acumulas placa en tus dientes y
                éstos son mas fáciles de cepillar.
              </li>
              <li>
                Es invisible; al estar fabricado con un material transparente no
                se ve.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
}

export default Ortodoncia;