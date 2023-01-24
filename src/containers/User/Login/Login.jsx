import React, { useState, useEffect } from "react";
import "./Login.scss";
import { loginUser, profile } from "../../../services/Apicall";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../userSlice";
import { errorCheck } from "../../../services/useful";
import { userData } from "../userSlice";
import "../../../components/Button/ButtonDesign.scss";
import { Button } from "react-bootstrap";

const Login = () => {
  let navigate = useNavigate();
  const [messageError, setMessageError] = useState("");
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
   

    if (userCredentials?.token !== "") {
      navigate("/myAccount");
    }
  });

  //Funciones

  const logMe = () => {
    

    try {
      loginUser(user).then((res) => {
        if (res.data.message === "Wrong number of segments") {
          setMessageError("Email o contraseña no válidos.");
        } else {
          dispatch(
            login({
              credentials: {
                token: res.data.token
              }
            })
          );
          const token = res.data.token;
          profile(token).then((res) => {
            dispatch(login({ token, credentials: res.data, active: true }));
          });

          setUserError((prevState) => ({
            ...prevState,
            LoginError: ""
          }));
        }
      });
    } catch (error) {}
  };

  return (
    <div className="loginDesign ">
      <br></br>
      <br></br>
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
