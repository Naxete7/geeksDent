import React, { useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAppointment } from "../../../services/Apicall";
import "./Appointments.scss";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { doctors, treatments } from "../../../services/Apicall";
import { useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";


dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

//DatePicker
const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf("day");
};
const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(4, 20),
  disabledMinutes: () => range(30, 60),
  disabledSeconds: () => [55, 56]
});
const disabledRangeTime = (_, type) => {
  if (type === "start") {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56]
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56]
  };
};

const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{
        defaultValue: dayjs("00:00:00", "HH:mm:ss")
      }}
    />
    <DatePicker picker="month" disabledDate={disabledDate} />
    <RangePicker disabledDate={disabledDate} />
    <RangePicker
      disabledDate={disabledDate}
      disabledTime={disabledRangeTime}
      showTime={{
        hideDisabledOptions: true,
        defaultValue: [
          dayjs("00:00:00", "HH:mm:ss"),
          dayjs("11:59:59", "HH:mm:ss")
        ]
      }}
      format="YYYY-MM-DD HH:mm:ss"
    />
  </Space>
);

const Appointment = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [allDoctors, setAllDoctors] = useState([]);
  const [allTreatments, setAllTreatments] = useState([]);
  const [error, setError] = useState("");
  const userCredentials = useSelector(userData);
  

  const [appointment, setappointment] = useState({
    doctorsId: "",
    treatmentsId: "",
    reason: "",
    date: ""
  });

  const inputHandler = (e) => {
  
    setappointment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const inputHandlerDate = (e) => {
 
    setappointment((prevState) => ({
      ...prevState,
      date: `${e.$y}-${e.$M + 1}-${e.$D} ${e.$H}:${e.$m}:${e.$s}`
    }));
    console.log(appointment);
  };

 

  //DatePicker

  const disabledDate = (current) => {
    return current && current < dayjs().endOf("day");
  };
  const disabledDateTime = () => ({
    disabledHours: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 21, 22, 23],
    disabledMinutes: () => range(),
    disabledSeconds: () => []
  });

  const App = () => (
    <Space direction="vertical" size={12}>
      <DatePicker
        format="YYYY-MM-DD HH:mm:ss"
        disabledDate={disabledDate}
        disabledTime={disabledDateTime}
        showTime={{
          defaultValue: dayjs("00:00:00", "HH:mm:ss")
        }}
      />
      <DatePicker picker="month" disabledDate={disabledDate} />
      <RangePicker disabledDate={disabledDate} />
      <RangePicker
        disabledDate={disabledDate}
        disabledTime={disabledRangeTime}
        showTime={{
          hideDisabledOptions: true,
          defaultValue: [
            dayjs("00:00:00", "HH:mm:ss"),
            dayjs("11:59:59", "HH:mm:ss")
          ]
        }}
        format="YYYY-MM-DD HH:mm:ss"
      />
    </Space>
  );

  const getDoctors = () => {
    doctors(userCredentials?.token)
      .then((res) => {
        setAllDoctors(res.data.data);
      })
      .catch((error) => {
        setError(
          error.response?.data || "No se pudieron entcontrar los doctores"
        );
      });
  };

  useEffect(() => {
    getDoctors();
  }, []);

  const getTreatments = () => {
    treatments(userCredentials?.token)
      .then((res) => {
        setAllTreatments(res.data.data);
      })
      .catch((error) => {
        setError(
          error.response?.data || "No se pudieron entcontrar los tratamientos"
        );
      });
  };

  useEffect(() => {
    getTreatments();
  }, []);

  const createAppointment = () => {
    console.log(appointment, userCredentials?.token);
    addAppointment(appointment, userCredentials?.token).then((res) => {
      navigate("/myAccount");
    });
  };

  return (
    <Container className="appointmentsDesign">
      <Row>
        <Col>
          <h2>Seleccione la cita que desee</h2>
        </Col>
      </Row>
      <br></br>
      <Card className="cardStyle">
        <Row className="d-flex align-content-center justify-content-center">
          <Col className="col-8 ">
            <br></br>
            <h6>Elija su doctor</h6>

            <Form.Select
              size="ml"
              name="doctorsId"
              onChange={(e) => inputHandler(e)}
            >
              {allDoctors.map((doctors) => {
                return <option value={doctors.id}>{doctors.name}</option>;
              })}
            </Form.Select>
          </Col>
        </Row>
        <br></br>
        <Row className="d-flex align-content-center justify-content-center">
          <Col className="col-8">
            <h6>Elija su tratamiento</h6>
            <Form.Select
              size="ml"
              name="treatmentsId"
              onChange={(e) => inputHandler(e)}
            >
              {allTreatments.map((treatments) => {
                return <option value={treatments.id}>{treatments.name}</option>;
              })}
            </Form.Select>
          </Col>
        </Row>
        <br></br>
        <Row className="d-flex align-content-center justify-content-center">
          <Col className="col-8">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <h6>Ponga el motivo de la cita</h6>
              </Form.Label>

              <Form.Control
                as="textarea"
                rows={3}
                name="reason"
                onChange={(e) => inputHandler(e)}
              />
            </Form.Group>
          </Col>
        </Row>
        <br></br>
        <Row className="d-flex align-content-center justify-content-center">
          <Col className="col-8">
            <h6>Elija el dia y la hora que desee</h6>
            <DatePicker
              as="timpstamp"
              value=""
              name="date"
              format="YYYY-MM-DD HH:mm:ss"
              disabledDate={disabledDate}
              disabledTime={disabledDateTime}
              onChange={(e) => inputHandlerDate(e)}
              showTime={{
                defaultValue: dayjs("10:00:00", "HH:mm:ss")
              }}
            />
            <h6>{appointment.date}</h6>
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
};

export default Appointment;
