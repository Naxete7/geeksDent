import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userout, userData } from "../../userSlice";
import { logout, profile } from "../../../../services/Apicall";
import {
  AntDesignOutlined,
  UserOutlined,
  ScheduleOutlined
} from "@ant-design/icons";

import { useSelector } from "react-redux";
import { Avatar } from "antd";

const Admin = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState("");
  const userCredentials = useSelector(userData);

  const navigate = useNavigate();

  useEffect(() => {
    //This function is triggered when the component is mounted for the first time.

    if (userCredentials?.token !== "") {
      profile(userCredentials.token)
        .then((res) => {
          setUserInfo(res.data);
        })
        .catch((error) => {
          setError(error.response?.data || "errooooor");
        });
    }
  }, [userCredentials]);

  //if (error) {
  //  return <h2>{error.repeat(1)} </h2>;
  //}

  return (
    <Container>
      <Row className="d-flex align-content-center justify-content-center mt-5">
        <h1>Administrador de Geeksdent</h1>
      </Row>
      <Row className="d-flex align-content-center justify-content-center mt-5">
        <Col className="d-flex align-content-center justify-content-center">
          <Card style={{ width: "22rem" }} className="cards">
            <Card.Img className="imgCards" variant="top" />
            <Card.Body>
              <Avatar size={64} icon={<UserOutlined />} styling="big" />
              <Card.Title>
                {userCredentials?.credentials?.name}{" "}
                {/*{userCredentials?.credentials?.surname}*/}
              </Card.Title>
              <Card.Text>{userCredentials?.credentials?.email}</Card.Text>
              {/*<Card.Text>{userCredentials?.credentials?.phone}</Card.Text>*/}
            </Card.Body>
          </Card>
        </Col>
        {/*<Col>
          <Card style={{ width: "20rem" }} className="cards">
            <Card.Img className="imgCards" variant="top" />
            <Card.Body>
              <Avatar
                size={64}
                icon={<ScheduleOutlined />}
                styling="big"
                className=" "
              />
              <Card.Title>¿Tiene molestias?</Card.Title>
              <Card.Text>¿Necesita de nuestra atención?</Card.Text>
              <Card.Text>Coja cita y le atenderemos encantados</Card.Text>
              <Button
                className="buttonDesign"
                onClick={() => navigate("/appointments")}
              >
                Coja su cita
              </Button>
            </Card.Body>
          </Card>
        </Col>*/}
      </Row>
      <Row className="mt-5">
        <h1>Mis citas</h1>
        <button className="buttonDesign" onClick={() => navigate("/myAccount")}>
          My Account
        </button>
      </Row>
      <Row></Row>
    </Container>
  );
};


export default Admin;