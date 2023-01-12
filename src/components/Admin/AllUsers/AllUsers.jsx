import React, { useState, useEffect } from "react";
import "./AllUsers.scss";

import { getAllUsers, deleteUser } from "../../../services/Apicall";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { userData } from "../../../containers/User/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  const [error, setError] = useState("");

const userCredentials = useSelector(userData);

  const deleteMe = (userDelete) => {
    deleteUser(userDelete).then((res) => {
      getAllUsers()
        .then((res) => {
          setAllUsers(res.data);
        })
        .catch((error) => {
          setError(error.response?.data || "errorrr");
        });
    });
  };

  useEffect(() => {
   

    if (userCredentials?.token !== "") {
      getAllUsers(userCredentials.token)
        .then((res) => {console.log(res)
          setAllUsers(res.data.data);
        })
        .catch((error) => {
          setError(error.response?.data || "no vaaaaa");
        });
    }
  },[userCredentials]);

  if (error) {
    return <h2>{error.repeat(1)} </h2>;
  }
  if (allUsers.length !== 0) {
    return (
      <Container>
        <Row >
          <Col className="d-flex wrap">
            {allUsers.map((allUser) => {
              return (
                <Card
                  style={{ width: "12rem" }}
                  className="cards"
                  key={allUser.name}
                >
                  <Card.Body>
                    <Card.Title>{allUser.name}</Card.Title>
                    <Card.Text>{allUser.surname}</Card.Text>
                    <Card.Text>{allUser.email}</Card.Text>
                    <Card.Text>{allUser.phone}</Card.Text>
                    {/*<Button
                  variant="warning"
                  onClick={() => deleteMe(allUser.mail)}
                >
                  Delete
                </Button>*/}
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
  } 

export default AllUsers;
