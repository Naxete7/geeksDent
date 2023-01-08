import React, { useState, useEffect } from "react";
import "./Register.scss";

import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../services/Apicall";
import { login } from "../userSlice";
import { useDispatch } from "react-redux";
import "../../../components/Button/ButtonDesign.scss";
import { loginUser } from "../../../services/Apicall";

import { Button, Form } from "antd";

const Register = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    let loged = localStorage.getItem("SAVEUSERMAIL");

    if (loged) {
      // TODO: redireccionar a una vista que diga que no puede acceder a registro si ya está logueado con un timeout y que luego redireccione a home
      navigate("/profile");
    }
  });

  const regMe = () => {
    registerUser(user).then((res) => {
      //console.log(res.res.message, "mensaje");
      try {
        loginUser(user).then((res) => {
          //console.log(res.data.message, "dentro de if");
          //Aqui procedo a guardar el token en redux, o en alguna otra parte del proyecto

          if (res.data.message !== "Password or email is incorrect") {
            localStorage.setItem("SAVEJWT", JSON.stringify(res.data.token));
            localStorage.setItem("SAVEUSERMAIL", JSON.stringify(res.data.email));
          
            //if (res.data.role === null) {
            //  localStorage.setItem("SAVEUSERROLE", "userRole");
            //} else {
            //  localStorage.setItem(
            //    "SAVEUSERROLE",
            //    JSON.stringify(res.data.role)
            //  );
            //}
  
            dispatch(
              login({
                credentials: {
                  token: res.data.jwt,
                  email: res.data.email,
                  //role: res.data.role
                }
              })
            );
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
    Birth_day:""
  });
  const onFinish = (values) => {};
  const onFinishFailed = (errorInfo) => {};
  return (
    <div className="registerDesign">
      <Form
        name="basic"
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 16
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
          name="name"
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
          name="surname"
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
          name="password"
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
          name="phone"
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
          //label="Username"
          name="birth_date"
          rules={[
            {
              required: true,
              message: "Please input your BirthDay!"
            }
          ]}
        >
          <input
            type="date"
            name="Birth_day"
            placeholder="Birth_day"
            onChange={(e) => inputHandler(e)}
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        ></Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button
            className="buttonDesign   d-flex justify-content-center col-5  "
            type="primary"
            htmlType="submit"
            onClick={() => regMe()}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
