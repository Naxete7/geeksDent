import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userout } from "../userSlice";
import { logout, profile } from "../../../services/Apicall";

import { useInternalNotification } from "antd/es/notification/useNotification";

import userData from "../userSlice";
import { useSelector } from "react-redux";

const Profile = () => {
  
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState("");
  //const user = useSelector(userData);
  const userEmail = JSON.parse(localStorage.getItem("SAVEUSEREMAIL"));
  const navigate = useNavigate();

  useEffect(() => {
    //This function is triggered when the component is mounted for the first time.

    if (userInfo.length === 0) {
     
      profile(userEmail)
      //console.log(res,'holaaa');
        .then((res) => {
          setUserInfo(res.data);
        })
        .catch((error) => {
          setError(error.response?.data || "ups intentalo de nuevo");
        });
    }
  }, [userInfo]);

  if (error) {
    return <h2>{error.repeat(1)} </h2>;
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Card style={{ width: "12rem" }} className="cards">
          <Card.Img className="imgCards" variant="top" />
          <Card.Body>
            <Card.Title>{userInfo.name}</Card.Title>
            <Card.Text>{userInfo.email}</Card.Text>
          <Button
                className="buttonDesign"
                onClick={() => navigate("/appointments")}
              >
                Pida su cita
              </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};



//  return (
//    <Container>
//      <Row className="cards d-flex align-content-center justify-content-center">
//        <Col>
//          <h1>BIENVENIDO DE VUELTA A GEEKSDENT</h1>
//        </Col>
//      </Row>
//      <br></br>
//      <Row>
//        <Col className="cards d-flex align-content-center justify-content-center flex-wrap">
//          {" "}
//          <Card
//            style={{ width: "12rem" }}
//            className="cards d-flex align-content-center justify-content-center"
//          >
//            <Card.Body>
//              <Card.Title>NACHO</Card.Title>
//              <Card.Text>{ bringUserInfo}</Card.Text>
//              <Button
//                className="buttonDesign"
//                onClick={() => navigate("/appointments")}
//              >
//                Pida su cita
//              </Button>
//            </Card.Body>
//          </Card>
//        </Col>
//      </Row>
//    </Container>
//  );
//};

export default Profile;
