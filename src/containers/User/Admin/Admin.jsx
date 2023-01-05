import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userout } from "../userSlice";
import { logout } from "../../../services/Apicall";

const Admin = () => {
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
      Soy la pagina del Administrador
      <Button className="buttonDesign" href="/login" onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default Admin;