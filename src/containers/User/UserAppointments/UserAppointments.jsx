import React, { useState, useEffect } from "react";
import "./UserAppointments.scss";

import { myAppointments } from "../../../services/Apicall";
import { userData } from "../userSlice";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

const UserAppointments = () => {
    
    const [userAppointments, setUserAppointments] = useState([]);

    const [error, setError] = useState("");

    const userCredentials = useSelector(userData);

    const appointments = () => {
        myAppointments(userCredentials?.credentials?.token)
        .then((res) => {
                console.log(res, "adios")
                setUserAppointments(res.data);
            
            })
            .catch((error) => {
                console.log(error,"holaaa")
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
            <div>
                {userAppointments.map((allAppointments) => {
    
                    return (
                        <Card
                            style={{ width: "12rem" }}
                            className="cards"
                            key={allAppointments.mail}
                        >
                            <Card.Body>
                                <Card.Title>{allAppointments.name}</Card.Title>
                              
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






export default UserAppointments;