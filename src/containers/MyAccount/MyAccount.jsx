import "./MyAccount.scss";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../User/Profile/Profile";
import AllUsers from "../../components/Admin/AllUsers/AllUsers";
import { userData } from "../User/userSlice";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Admin from "../User/Admin/VistaAdmin/Admin";
import AllApointments from "../../components/Admin/AllApointments/AllApointments";
import UserAppointments from "../User/UserAppointments/UserAppointments";

const MyAccount = () => {
  let navigate = useNavigate();
  const userCredentials = useSelector(userData);

  useEffect(() => {
    if (
      userCredentials?.credentials?.role === "null" ||
      userCredentials?.credentials?.role === null
    ) {
      navigate("/");
    }
  });

  if (userCredentials?.credentials?.role === 2) {
    return (
      <div className="myAccountDesign">
        <Container>
          <Row>
            <h2>Usuario</h2>
          </Row>
          <Row>
            {" "}
            <Profile />
          </Row>
          <Row>
            <h2>Todas mis citas</h2>
          </Row>
          <Row>
          <UserAppointments/></Row>
        </Container>
      </div>
    );
  } else {
    return (
      <Container>
        <Row>
          <h2>Administrador</h2>
        </Row>
        <Row>
          {" "}
          <Admin />{" "}
        </Row>
        <Row>
          <h2>Eres el Administrador de Geeksdent</h2>
        </Row>
        <Row> </Row>
        <Row>
          <h2>Todos los citas</h2>
        </Row>
        <Row>
          <AllApointments />
        </Row>
        <Row>
          <h2>Todos los usuarios</h2>
        </Row>
        <Row>
          {" "}
          <AllUsers />
        </Row>
      </Container>
    );
  }
};

export default MyAccount;
