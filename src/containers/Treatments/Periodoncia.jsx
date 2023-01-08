import React from "react";
import gingivitis from "../../assets/img/gingivitis.jpg";
import periodontal from "../../assets/img/periodontal.png";
import embarazo from "../../assets/img//embarazo.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";
import periodonciacabecera from "../../assets/img/periodonciacabecera.jpg"

const Periodoncia = () => {
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <img src={periodonciacabecera} alt="implante" />
            </Card>
            <h3>¿Qué es?</h3>
            <p>
              La periodoncia es el área de la odontología que estudia la
              prevención, diagnóstico y tratamiento de las enfermedades y
              condiciones que afectan los tejidos que dan soporte a los órganos
              dentarios (encía, ligamento periodontal, cemento radicular y hueso
              alveolar) y a los sustitutos implantados, para el mantenimiento de
              la salud, función y estética de los dientes y sus tejidos
              adyacentes.
            </p>
            <h3>¿Cuáles son las más comunes?</h3>
            <h6>Gingivitis</h6>
            <p>
              La gingivitis provoca la inflamación de las encías y su sangrado.
              Se produce porque las encías se llenan de bacterias. La
              gingivitis, bien tratada, no reviste especial gravedad a
              diferencia de la periodontitis. No obstante, es un primer signo de
              alarma ante el cual hay que tomar medidas de inmediato para que no
              se agrave.
            </p>
          </Col>
        </Row>
        <Row>
          <Card>
            <img src={gingivitis} alt="gingivitis" />
          </Card>
        </Row>
        <Row>
          <Col>
            <h6>Periodontitis</h6>
            <p>
              La periodontitis es conocida también como piorrea. Se diferencia
              principalmente de la gingivitis porque ya no solo se ven afectadas
              las encías, sino también el hueso alveolar y los tejidos del
              periodonto. La solución es complicada y es posible que el diente
              se caiga o se parta. Por lo tanto, la atención debe ser urgente y
              el tratamiento ha de seguirse estrictamente según la prescripción
              médica. En casos graves, la presencia de piorrea no solo afecta a
              la estética y funcionalidad de la boca, sino que puede derivar en
              dolencias más peligrosas, como los problemas cardiovasculares.
            </p>
          </Col>
        </Row>
        <Row>
          <Card>
            <img src={periodontal} alt="periodontal" />
          </Card>
        </Row>
        <Row>
          <Col>
            <h3>
              Factores de riesgo para la aparición de enfermedades periodontales
            </h3>
            <p>
              El estilo de vida puede convertirse en un factor de riesgo para la
              salud periodontal debido al consumo de alimentos inadecuados, a la
              falta de ejercicio, el consumo de alcohol y a otras sustancias. El
              tabaquismo es el factor de riesgo principal, que afecta a la
              prevalencia y progresión de las periodontitis e interfiere con la
              cicatrización de los tejidos. Puede ser un factor etiológico
              directo en la progresión de una lesión estable de gingivitis a una
              enfermedad destructiva. Otro de los motivos por los que aparece la
              enfermedad periodontal es la predisposición genética. El genotipo
              tiene un papel importante en la susceptibilidad a la
              periodontitis. El riesgo de pérdida dental es significativamente
              alto si se combina con el consumo de tabaco. Seguir una inadecuada
              higiene oral es otro de los factores de riesgo más extendidos. El
              apiñamiento dental y otros problemas de malposición dentaria
              pueden dificultar la realización de una completa limpieza oral
              diaria, provocando un alto riesgo de padecer patologías
              periodontales.
            </p>
            <h3>Mujeres: El embarazo y la gingivitis</h3>
            <p>
              Las variaciones hormonales que experimentan las mujeres durante la
              pubertad, menstruación, embarazo y menopausia, producen cambios
              significativos a nivel del periodonto, especialmente si existe
              inflamación gingival provocada por placa bacteriana preexistente.
              La gingivitis del embarazo es muy común y afecta a entre un 60-75%
              de las mujeres embarazadas. Los signos de la enfermedad comienzan
              durante el segundo mes de gestación y alcanzan su pico máximo en
              el octavo mes.
            </p>
          </Col>
        </Row>
        <Row>
          <Card>
            <img src={embarazo} alt="embarazo" />
          </Card>
          <p>
            Las mujeres embarazadas deben someterse al tratamiento inmediato de
            la enfermedad periodontal para reducir el riesgo de complicaciones
            prenatales y postnatales.
          </p>
        </Row>
        <Row>
          <Col>
            <h3>¿Cómo se tratan las enfermedades periodontales?</h3>
            <p>
              El tratamiento de las enfermedades periodontales varía en función
              del estado de avance de la patología. En Clínica Dental Dr. Peset
              nos encargamos de realizar una evaluación y pautar el plan de
              tratamiento más indicado. Si la enfermedad se encuentra en un
              periodo inicial, es necesario eliminar las bacterias acumuladas
              mediante una profilaxis profesional. En el caso de la
              periodontitis, el tratamiento suele organizarse en dos fases. En
              la fase básica se eliminan las bacterias periodontales mediante el
              raspado y alisado radicular. En enfermedades cuyo estado es más
              grave se considerará acceder a las bolsas periodontales profundas
              realizando una cirugía periodontal. A veces, en este tipo de fases
              se aplican técnicas de regeneración ósea. Si las encías están muy
              retraídas puede llevarse a cabo una cirugía periodontal con
              injertos para cubrir la parte que se ha perdido tras su deterioro.
              Es muy importante concienciar a los pacientes sobre las
              consecuencias que tiene la enfermedad periodontal para que
              adquieran hábitos de higiene oral adecuados y puedan prevenir que
              la afección periodontal vuelva a manifestarse.
            </p>
          </Col>
        </Row>
      </Container>
    );
}

export default Periodoncia;