import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userout } from "../userSlice";
import { logout } from "../../../services/Apicall";
//import { profileUser } from "../../../services/Apicall";
import { useInternalNotification } from "antd/es/notification/useNotification";
import { bringUserInfo } from "../../../services/Apicall";
import userData from "../userSlice";
import { useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState("");
  const user = useSelector(userData);
  const userMail = JSON.parse(localStorage.getItem("SAVEUSERMAIL"));

//  useEffect(() => {
//    //This function is triggered when the component is mounted for the first time.

//    if (userInfo.length === 0) {
//      // bringmovies()
//      bringUserInfo(userMail)
//        .then((res) => {
//          setUserInfo(res.data);
//        })
//        .catch((error) => {
//          setError(error.response?.data || "ups intentalo de nuevo");
//        });
//    }
//  }, [userInfo]);

//  if (error) {
//    return <h2>{error.repeat(1)} </h2>;
//  }

//  return (
//    <Container>
//      <Row className="d-flex justify-content-center">
//        <Card style={{ width: "12rem" }} className="cards">
//          <Card.Img
//            className="imgCards"
//            variant="top"/>
//          <Card.Body>
//            <Card.Title>{userInfo.name}</Card.Title>
//            <Card.Text>{userInfo.mail}</Card.Text>
//            <Button variant="warning" onClick={() => navigate("/films")}>
//              Alquilar películas
//            </Button>
//          </Card.Body>
//        </Card>
//      </Row>
//    </Container>
//  );
//};
  
    //useEffect(() => {
    //  //This function is triggered when the component is mounted for the first time.

    //  if (userInfo.length === 0) {
    //    // bringmovies()
    //    bringUserInfo(userMail)
    //      .then((res) => {
    //        setUserInfo(res.data);
    //      })
    //      .catch((error) => {
    //        setError(error.response?.data || "ups intentalo de nuevo");
    //      });
    //  }
    //}, [userInfo]);

    //if (error) {
    //  return <h2>{error.repeat(1)} </h2>;
    //}
  
  
  
  const logout = () => {
    localStorage.removeItem("SAVEUSERROLE");
    localStorage.removeItem("SAVEUSEREMAIL");
    localStorage.removeItem("SAVEJWT");
    dispatch(
      userout({
        credentials: {
          token: "",
          email: "",
          role: ""
        }
      })
    );
  };
  return (
    <Container>
      <Row className="cards d-flex align-content-center justify-content-center">
        <Col>
          <h1>BIENVENIDO DE VUELTA A GEEKSDENT</h1>
          <Button className="buttonDesign" href="/login" onClick={logout}>
            Logout
          </Button>
        </Col>
      </Row>

      <br></br>
      <Row>
        <Col className="cards d-flex align-content-center justify-content-center flex-wrap">
          {" "}
          <Card
            style={{ width: "12rem" }}
            className="cards d-flex align-content-center justify-content-center"
          >
            <Card.Body>
              <Card.Title>{userInfo.email}</Card.Title>
              <Card.Text>garcia</Card.Text>
              <Button variant="warning" onClick={() => navigate("/films")}>
                Alquilar películas
              </Button>
            </Card.Body>
            {/*<h2 className="cards d-flex align-content-center justify-content-center">
            NACHO
            </h2>*/}
            {/*<Button
              className="buttonDesign"
              onClick={() => navigate("/appointments")}
            >
              Pida su cita
            </Button>*/}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
