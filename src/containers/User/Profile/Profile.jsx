import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userout } from "../userSlice";
import { logout } from "../../../services/Apicall";

const Profile = () => {
    
    const dispatch = useDispatch();
    let navigate = useNavigate();

     const logout = () => {
       localStorage.removeItem("SAVEUSERROLE");
       localStorage.removeItem("SAVEUSERMAIL");
       localStorage.removeItem("SAVEJWT");
       dispatch(
         userout({
           credentials: {
             token: "",
             mail: "",
             role: ""
           }
         })
       );
     };
    return (
        
        <div>
            Soy la pagina del usuario
            <Button className="buttonDesign" href="/login" onClick={logout}>Logout</Button>
    
        </div>
    );
}


export default Profile;