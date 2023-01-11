import React, { useState, useEffect } from "react";
import "./Login.scss";
import { loginUser } from "../../../services/Apicall";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../userSlice";
import { errorCheck } from "../../../services/useful";
import { userData } from "../userSlice";
import "../../../components/Button/ButtonDesign.scss";
import { Button } from "react-bootstrap";

const Login = () => {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const userCredentials = useSelector(userData);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [userError, setUserError] = useState({
    emailError: "",
    passwordError: "",
    LoginError: ""
  });

  //Handlers

  const inputHandler = (e) => {
    //Aqui setearemos DINÁMICAMENTE el BINDEO entre inputs y hook.
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const errorHandler = (field, value, type) => {
    let error = "";

    error = errorCheck(field, value, type);

    setUserError((prevState) => ({
      ...prevState,
      [field + "Error"]: error
    }));
  };

  useEffect(() => {
    //let loged = localStorage.getItem("SAVEUSEREMAIL");

    if (userCredentials?.token !== "") {
      navigate("/appointments");
    }
  });

  //Funciones

  const logMe = () => {
    //Estoy ejecutando loginUser y le paso el body (que en este caso es el hook user)

    loginUser(user)
      .then(data => {
          
      })
      .catch()


    dispatch(login({ credentials: {} }));
    

    setTimeout(() => {
      navigate("/appointments");
    }, 1000);
    setUserError((prevState) => ({
      ...prevState,
      LoginError: ""
    }));
  };
    
    return (
      <div className="loginDesign">
        <pre>Bienvenido de nuevo</pre>

        <div className="inputsContainer">
          <div className="errorInput">{userError.LoginError}</div>
          <div>
            <input
              type="mail"
              name="email"
              placeholder="email"
              onChange={(e) => inputHandler(e)}
              onBlur={(e) => errorHandler(e.target.name, e.target.value, "email")}
            />
            <div className="errorInput">{userError.mailError}</div>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => inputHandler(e)}
              onBlur={(e) =>
                errorHandler(e.target.name, e.target.value, "password")
              }
            />
            <div className="errorInput">{userError.passwordError}</div>
          </div>
        </div>
        <Button onClick={() => logMe()} className="buttonDesign">
          Login me!
        </Button>
      </div>
    );
  };

export default Login;
