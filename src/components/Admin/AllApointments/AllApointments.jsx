import React, { useState, useEffect } from "react";
import "./AllApointments.scss";
import { getAllAppointments } from "../../../services/Apicall";
import "../../../components/Cards/Cards.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { userData } from "../../../containers/User/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AllApointments = () => {
  const [allAppointments, setAllAppointments] = useState([]);

  const [error, setError] = useState("");

  const userCredentials = useSelector(userData);

  const appointments = () => {
    getAllAppointments(userCredentials?.token)
      .then((res) => {
        console.log(res);
        setAllAppointments(res.data.data);
      })
      .catch((error) => {
        setError(
          error.response?.data ||
            "Solo el administrador puede ver todas las citas"
        );
      });
  };

  useEffect(() => {
    appointments();
  }, []);

  if (error) {
    return <h2>{error.repeat(1)} </h2>;
  }
  if (allAppointments.lenght !== 0) {
    return (
      <Container classname="allAppointmentsDesign">
        <Row>
          <Col className="d-flex  flex-wrap  justify-content-center">
            {allAppointments.map((allAppointments) => {
              return (
                <Card
                  style={{ width: "12rem" }}
                  className="cards"
                  key={allAppointments.date}
                >
                  <Card.Body>
                    <Card.Title>{allAppointments.date}</Card.Title>
                    <Card.Title>{allAppointments.usersId}</Card.Title>
                    <Card.Title>{allAppointments.reason}</Card.Title>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
};

export default AllApointments;
