import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAppointments } from "../../../services/Apicall";
import "./Appointments.scss";
 import { DatePicker, Space } from "antd";
 import dayjs from "dayjs";
 import customParseFormat from "dayjs/plugin/customParseFormat";


dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};


// eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf('day');
};
const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(4, 20),
  disabledMinutes: () => range(30, 60),
  disabledSeconds: () => [55, 56],
});
const disabledRangeTime = (_, type) => {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
};
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{
        defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
      }}
    />
    <DatePicker picker="month" disabledDate={disabledDate} />
    <RangePicker disabledDate={disabledDate} />
    <RangePicker
      disabledDate={disabledDate}
      disabledTime={disabledRangeTime}
      showTime={{
        hideDisabledOptions: true,
        defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('11:59:59', 'HH:mm:ss')],
      }}
      format="YYYY-MM-DD HH:mm:ss"
    />
  </Space>
);

const Appointment=()=> {

    let navigate = useNavigate();
    const dispatch = useDispatch();

  // eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
 
  return current && current < dayjs().endOf('day');
};
const disabledDateTime = () => ({
  disabledHours: () => [0,1,2,3,4,5,6,7,8,9,20,21,22,23],
  disabledMinutes: () => range(),
  disabledSeconds: () => [],
});
//const disabledRangeTime = (_, type) => {
//  if (type === 'start') {
//    return {
//      disabledHours: () => range(0, 60).splice(4, 20),
//      disabledMinutes: () => range(30, 60),
//      disabledSeconds: () => [55, 56],
//    };
//  }
//  return {
//    disabledHours: () => range(0, 60).splice(20, 4),
//    disabledMinutes: () => range(0, 31),
//    disabledSeconds: () => [55, 56],
//  };
//};
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{
        defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
      }}
    />
    <DatePicker picker="month" disabledDate={disabledDate} />
    <RangePicker disabledDate={disabledDate} />
    <RangePicker
      disabledDate={disabledDate}
      disabledTime={disabledRangeTime}
      showTime={{
        hideDisabledOptions: true,
        defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('11:59:59', 'HH:mm:ss')],
      }}
      format="YYYY-MM-DD HH:mm:ss"
    />
  </Space>
);
  
  
  
  
  
  
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
              <h6>Elija el dia y la hora que desee</h6>
              <DatePicker
                format="YYYY-MM-DD HH:mm:ss"
                disabledDate={disabledDate}
                disabledTime={disabledDateTime}
                showTime={{
                  defaultValue: dayjs("00:00:00", "HH:mm:ss")
                }}
              />
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Button
                className="buttonDesign"
                onClick={() => createAppointment()}
              >
                Guardar
              </Button>
            </Col>
          </Row>
        </Card>
      </Container>
    );
}



export default Appointment;