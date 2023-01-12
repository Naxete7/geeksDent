import React, { useState, useEffect } from "react";
import "./AllUsers.scss";

import { getAllUsers, deleteUser } from "../../../../services/Apicall";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { userData } from "../../userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";






const AllUsers = () => {

  const [allUsersInfo, setAllUsersInfo] = useState([]);
  const [error, setError] = useState("");

 const userCredentials = useSelector(userData);
  const navigate = useNavigate();
  

  useEffect(() => {
    
    if (userCredentials?.token !== "") {
  
      userCredentials(userCredentials.token)
        .then((res) => {
          setAllUsersInfo(res.data);
        })
        .catch((error) => {
          setError(error.response?.data || "intentalo de nuevo");
        });

}


  }, [userCredentials])

  //const users = () => {
  //  getAllUsers()
  //    .then((res) => {
      
  //      setAllUsers(res.data);
  //    })
  //    .catch((error) => {
  //      setError(
  //        error.response?.data ||
  //        "Solo el Administrador pude ver todos los usuarios"
  //      );
  //    });
  //}

  //useEffect(() => {
  //  users()
  //}, []);
  //if (error) {
  //  return <h2>{error.repeat(1)}</h2>;
  //}


  if (allUsersInfo.length !== 0) {
    return (
      // <pre>{JSON.stringify(allUsers, null, 2)}</pre>
      <div >
            {allUsersInfo.map((allUser) => {
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
      </div>
    );
  } else {
    return <h2>no hay datos</h2>;
  }
};

export default AllUsers;
