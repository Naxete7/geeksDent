import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAppointments } from "../../../services/Apicall";
import "./Appointments.scss";








const Appointment=()=> {

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const createAppointment = () => {
        addAppointments()
    }



    return (
      <Container>
        <Row>
          <Col>
            <h2>Seleccione la cita que desee</h2>
          </Col>
        </Row>
        <br></br>
        <Card>
          <Row className="d-flex align-content-center justify-content-center">
            <Col className="col-8 ">
              <br></br>
              <h6>Elija su doctor</h6>

              <Form.Select size="ml" name="doctorId">
                <option>Doctor</option>
              </Form.Select>
            </Col>
          </Row>
          <br></br>
          <Row className="d-flex align-content-center justify-content-center">
            <Col className="col-8">
              <h6>Elija su tratamiento</h6>
              <Form.Select size="ml" name="treatmentId">
                <option>Tratamiento</option>
              </Form.Select>
            </Col>
          </Row>
          <br></br>
          <Row className="d-flex align-content-center justify-content-center">
            <Col className="col-8">
              <h6>Elija el dia que desee</h6>
              <Form.Select size="ml" name="date">
                <option>Dia</option>
              </Form.Select>
            </Col>
          </Row>
          <br></br>
          <Row className="d-flex align-content-center justify-content-center">
            <Col className="col-8">
              <h6>Elija la hora que desee</h6>
              <Form.Select size="ml">
                <option>Hora</option>
              </Form.Select>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <button
                className="buttonDesign"
                onClick={() => createAppointment()}
              >
                Guardar
              </button>
            </Col>
          </Row>
        </Card>
      </Container>
    );
}



export default Appointment;