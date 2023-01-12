import React, { useState, useEffect } from "react";
import "./AllApointments.scss";
import { getAllAppointments } from "../../../services/Apicall";

import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { userData } from "../../../containers/User/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AllApointments = () => {
    
    const [allAppointments, setAllAppointments] = useState([]);

    const [error, setError] = useState("");

 const userCredentials = useSelector(userData);

    const appointments = () => {
        
        getAllAppointments(userCredentials?.credentials?.token)
          .then((res) => {
            console.log(res);
            setAllAppointments(res.data);
          })
          .catch((error) => {
            setError(
              error.response?.data ||
                "Solo el administrador puede ver todas las citas"
            );
          });
    }

    useEffect(() => {
        appointments()
    
    }, []);

    if (error) {
        return <h2>{error.repeat(1)} </h2>;
    }
    if (allAppointments.lenght !== 0) {
        return (
            <div>
                {allAppointments.map((allAppointments) => {
    
                    return (
                        <Card
                            style={{ width: "12rem" }}
                            className="cards"
                            key={allAppointments.mail}
                        >
                            <Card.Body>
                                <Card.Title>{allAppointments.name}</Card.Title>
                                <Card.Text>{allAppointments.mail}</Card.Text>
                            </Card.Body>
                        </Card>
                    );
                    
                })}

            </div>
        )
    } else {
        return <h2>No hay datos</h2>
    }
};

export default AllApointments;