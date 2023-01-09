import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userout } from "../userSlice";
import { logout } from "../../../services/Apicall";
import Card from "antd/es/card/Card";
import { profileUser } from "../../../services/Apicall";

const Profile = () => {
    
    const dispatch = useDispatch();
    let navigate = useNavigate();

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
      <div>
        Soy la pagina del usuario
        <Button className="buttonDesign" href="/login" onClick={logout}>
          Logout
        </Button>
        <Card style={{ width: "12rem" }} className="cards">
          {/*<Card.Title>{}</Card.Title>*/}

          <Button
            className="buttonDesign"
            onClick={() => navigate("/appointments")}
          >
            Pida su cita
          </Button>
        </Card>
      </div>
    );
}


export default Profile;