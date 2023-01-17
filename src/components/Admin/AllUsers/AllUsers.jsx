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
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const userCredentials = useSelector(userData);

  const deleteMe = (id) => {
    deleteUser(userCredentials?.token, id).then((res) => {
      //try {
        
      //  console.log(res);
      //      getAllUsers()
      //        .then((res) => {
      //          console.log(res.data)
      //          setAllUsers(res.data);
      //          console.log(allUsers)
      //        })

      //}
      //  catch(error)  {
      //    setError(error.response?.data || "errorrr");
      //  };

      navigate("/login")
    });
  };

  useEffect(() => {
    if (userCredentials?.token !== "") {
      getAllUsers(userCredentials.token)
        .then((res) => {
          setAllUsers(res.data.data);
        })
        .catch((error) => {
          setError(error.response?.data || "error al recuperar los usuarios");
        });
    }
  }, [userCredentials]);

  //useEffect(() => {
    
  //}, [allUsers]);

  if (error) {
    return <h2>{error.repeat(1)} </h2>;
  }
  if (allUsers.length !== 0) {
    return (
      <Container className="allUsersDesign">
        <Row>
          <Col className="d-flex col-12 flex-wrap  justify-content-center">
            {allUsers.map((allUser) => {
              if (allUser.active === 1 && allUser.role !== 1) {
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
                      <Button
                        variant="warning"
                        onClick={() => deleteMe(allUser.id)}
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                );
              }
            })}
          </Col>
        </Row>
      </Container>
    );
  }
};

export default AllUsers;
