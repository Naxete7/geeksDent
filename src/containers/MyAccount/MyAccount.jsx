import "./MyAccount.scss";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../User/Profile/Profile";
import AllUsers from "../../components/Admin/AllUsers";
import { userData } from "../User/userSlice";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Admin from "../User/Admin/VistaAdmin/Admin";





const MyAccount = () => {
  let navigate = useNavigate();
 const userCredentials = useSelector(userData);
  //const userRole = localStorage.getItem("SAVEUSERROLE");

  // const userRole = undefined

  // const userRole = "admin"

  useEffect(() => {
    

    if (
      userCredentials?.credentials?.role === "null" ||  userCredentials?.credentials?.role === null
    ) {
      
      navigate("/");
    }
  });

  if (
    userCredentials?.credentials?.role === "2" ||  userCredentials?.credentials?.role === "1"
  ) {
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
            <h2>Citas en activo</h2>
          </Row>
          <Row> </Row>
          <Row>
            <h2>Todos mis citas</h2>
          </Row>
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
        <Row></Row>
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
