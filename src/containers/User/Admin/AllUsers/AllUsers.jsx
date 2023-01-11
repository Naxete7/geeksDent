import React, { useState, useEffect } from "react";
import "./AllUsers.scss";

import { getAllUsers, deleteUser } from "../../../../services/Apicall";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useNavigate } from "react-router-dom";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  const [error, setError] = useState("");

  const deleteMe = (userDelete) => {
    deleteUser(userDelete).then((res) => {
      getAllUsers()
        .then((res) => {
          setAllUsers(res.data);
        })
        .catch((error) => {
          setError(error.response?.data || "ups intentalo");
        });
    });
  };

  useEffect(() => {
    //This function is triggered when the component is mounted for the first time.
    getAllUsers()
        .then((res) => {
          console.log(res);
        setAllUsers(res.data);
      })
      .catch((error) => {
        setError(
          error.response?.data ||
            "Solo el Administrador puede ver a todos los usuarios"
        );
      });
  }, []);

  if (error) {
    return <h2>{error.repeat(999)} </h2>;
  }
  if (allUsers.length !== 0) {
    return (
      // <pre>{JSON.stringify(allUsers, null, 2)}</pre>
      <div className="contentStyle2">
            {allUsers.map((allUser) => {
            console.log(AllUsers)
          return (
            <Card
              style={{ width: "12rem" }}
              className="cards"
              key={allUser.mail}
            >
             
              <Card.Body>
                <Card.Title>{allUser.name}</Card.Title>
                <Card.Text>{allUser.mail}</Card.Text>

                <Button
                  variant="warning"
                  onClick={() => deleteMe(allUser.mail)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  } else {
    return <h2>no hay datos</h2>;
  }
};

export default AllUsers;
