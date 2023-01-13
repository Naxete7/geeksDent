import React, { useState, useEffect } from "react";
import "./Register.scss";

import { useNavigate } from "react-router-dom";
import { registerUser, loginUser, profile } from "../../../services/Apicall";
import { login, userData } from "../userSlice";
import { useDispatch, useSelector } from "react-redux";
import "../../../components/Button/ButtonDesign.scss";


import { Button, Form } from "antd";
import { Card, Col, Container, Row } from "react-bootstrap";

const Register = () => {
const userCredentials = useSelector(userData);


  let navigate = useNavigate();


  const dispatch = useDispatch();


  
   const [userError, setUserError] = useState({
     emailError: "",
     passwordError: "",
     LoginError: ""
   });

useEffect(() => {
 
  if (userCredentials?.token !== "") {
    navigate("/myAccount");
  }
});

  const regMe = () => {
    registerUser(user).then((res) => {
      //console.log(res.res.message, "mensaje");
      try {
        loginUser(user).then((res) => {
          //Aqui procedo a guardar el token en redux, o en alguna otra parte del proyecto
          if (res.data.message === "Password or email is incorrect") {
            setUserError((prevState) => ({
              ...prevState,
              LoginError: "El email o la contraseña son incorrectos"
            }));
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
    });
  };


  
  const inputHandler = (e) => {
    //Aquí setearemos de forma DINÁMICA el BINDEO entre inputs y hook
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const [user, setUser] = useState({
    name: "",
    surname:"",
    email: "",
    password: "",
    phone: "",
   
  });
  const onFinish = (values) => {};
  const onFinishFailed = (errorInfo) => {};




  return (
    <Container>
      <Row>
        <Col>
          
          <br></br>
          <Card className="d-flex align-items-center">
            <Form
              //name="basic"
              labelCol={{
                span: 12
              }}
              wrapperCol={{
                span: 50
              }}
              initialValues={{
                remember: true
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <h1 className=" mb-3 ">REGISTER</h1>
              <Form.Item
                //label="Username"
                //name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!"
                  }
                ]}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  onChange={(e) => inputHandler(e)}
                />
              </Form.Item>

              <Form.Item
                //label="Username"
                //name="surname"
                rules={[
                  {
                    required: true,
                    message: "Please input your surname!"
                  }
                ]}
              >
                <input
                  type="text"
                  name="surname"
                  placeholder="surname"
                  onChange={(e) => inputHandler(e)}
                />
              </Form.Item>

              <Form.Item
                //label="email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!"
                  }
                ]}
              >
                <input
                  type="mail"
                  name="email"
                  placeholder="email"
                  onChange={(e) => inputHandler(e)}
                />
              </Form.Item>

              <Form.Item
                //label="Password"
                //name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!"
                  }
                ]}
              >
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={(e) => inputHandler(e)}
                />
              </Form.Item>

              <Form.Item
                //label="Username"
                //name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone!"
                  }
                ]}
              >
                <input
                  type="text"
                  name="phone"
                  placeholder="phone"
                  onChange={(e) => inputHandler(e)}
                />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 2,
                  span: 16
                }}
              >
                <Button
                  className="buttonDesign d-flex  justify-content-center align-item-center col-12  "
                  type="primary"
                  htmlType="submit"
                  onClick={() => regMe()}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
