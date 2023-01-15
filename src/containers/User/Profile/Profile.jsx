import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userout } from "../userSlice";
import { logout, profile } from "../../../services/Apicall";
import { AntDesignOutlined, UserOutlined,ScheduleOutlined} from "@ant-design/icons";


import { userData } from "../userSlice";
import { useSelector } from "react-redux";
import { Avatar } from "antd";

const Profile = () => {
  
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
          setError(error.response?.data || "no vaaaaa");
        });
    }
  }, [userCredentials]);

  //if (error) {
  //  return <h2>{error.repeat(1)} </h2>;
  //}

  return (
    <Container className="profileDesign">
      <Row className="d-flex align-content-center justify-content-center mt-5">
        <h1>Perfil del paciente</h1>
      </Row>
      <Row className="d-flex align-content-center justify-content-center mt-5">
        <Col className="d-flex align-content-center justify-content-center">
          <Card style={{ width: "20rem" }} className="cards">
            <Card.Img className="imgCards" variant="top" />
            <Card.Body>
              <Avatar size={64} icon={<UserOutlined />} styling="big" />
              <Card.Title>
                {userCredentials?.credentials?.name}{" "}
                {userCredentials?.credentials?.surname}
              </Card.Title>
              <Card.Text>{userCredentials?.credentials?.email}</Card.Text>
              <Card.Text>{userCredentials?.credentials?.phone}</Card.Text>
              <Button
                className="buttonDesign"
                onClick={() => navigate("/updateProfile")}
              >
                Modifique sus datos
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex align-content-center justify-content-center">
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
        </Col>
      </Row>
      <Row className="mt-5">
       
        <button className="buttonDesign">
         Todas mis citas
        </button>
      </Row>
      <Row></Row>
    </Container>
  );
};



export default Profile;
