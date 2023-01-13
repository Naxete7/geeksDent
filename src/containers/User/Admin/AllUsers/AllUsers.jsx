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
  

  const deleteMe = (userDelete) => {
    deleteUser(userDelete).then((res) => {
      getAllUsers()
        .then((res) => {
          setAllUsersInfo(res.data);
        })
        .catch((error) => {
          setError(error.response?.data || "ups intentalo de nuevo");
        });
    });
  };

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



  if (allUsersInfo.length !== 0) {
    return (
       
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
