import React, { useState, useEffect } from "react";
import "./UserAppointments.scss";

import { myAppointments } from "../../../services/Apicall";
import { userData } from "../userSlice";
import { useSelector } from "react-redux";
import { Card, Col, Container, Row } from "react-bootstrap";

const UserAppointments = () => {
    
    const [userAppointments, setUserAppointments] = useState([]);

    const [error, setError] = useState("");

    const userCredentials = useSelector(userData);

    const appointments = () => {
        myAppointments(userCredentials?.token)
        .then((res) => {
               
                setUserAppointments(res.data.data);
            
            })
            .catch((error) => {
                
                setError(
              error.response?.data ||
                "No se pueden ver las citas"
            );
          });
    }

    useEffect(() => {
        appointments()
    }, []);
 if (error) {
        return <h2>{error.repeat(1)} </h2>;
    }
    if (userAppointments.lenght !== 0) {
        return (
            <Container>
                <Row>
                    <Col className="d-flex m-2 ">
                        {userAppointments.map((userAppointments) => {
    
                            return (
                                <Card
                                    style={{ width: "12rem" }}
                                    className="cards"
                                    key={userAppointments.date}
                                >
                                    <Card.Body>
                                        <Card.Title>{userAppointments.date}</Card.Title>
                                        <Card.Text>{userAppointments.duration}</Card.Text>
                                        <Card.Text>{userAppointments.reason}</Card.Text>
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






export default UserAppointments;