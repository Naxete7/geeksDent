import React, { useState, useEffect } from "react";
import "./UpdateProfile.scss";

import { useNavigate } from "react-router-dom";
import { updateUser, loginUser, profile } from "../../../services/Apicall";
import { login, userData } from "../userSlice";
import { useDispatch, useSelector } from "react-redux";
import "../../../components/Button/ButtonDesign.scss";

import { Button, Form } from "antd";
import { Card, Col, Container, Row } from "react-bootstrap";

const Update = () => {
  const userCredentials = useSelector(userData);

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    surname: "",
    phone: ""
  });

  const [userError, setUserError] = useState({
    emailError: "",
    passwordError: "",
    LoginError: ""
  });

  const updateMe = () => {
    updateUser(user, userCredentials?.token) 
      profile(userCredentials?.token)
        .then((res) => {
          console.log(res)
          setUser({
            name: res.data.name,
            surname: res.data.surname,
            phone:res.data.phone
          })
          console.log(user)
          dispatch(login({ credentials: res.data, active: true }));
      })

    
  };

  const inputHandler = (e) => {
    //Aquí setearemos de forma DINÁMICA el BINDEO entre inputs y hook
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };


  const onFinish = (values) => {};
  const onFinishFailed = (errorInfo) => {};

  return (
    <Container>
      <Row>
        <Col>
          <br></br>
          <Card className="d-flex align-items-center">
            <Form
              
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
              <h1 className=" mb-3 ">Modifique sus datos</h1>
              <Form.Item
                label="name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!"
                  }
                ]}
              >
                <input
                  type="string"
                  name="name"
                  placeholder="name"
                  onChange={(e) => inputHandler(e)}
                />
              </Form.Item>

              <Form.Item
                label="surname"
                name="surname"
                rules={[
                  {
                    required: true,
                    message: "Please input your surname!"
                  }
                ]}
              >
                <input
                  type="string"
                  name="surname"
                  placeholder="surname"
                  onChange={(e) => inputHandler(e)}
                />
              </Form.Item>

              <Form.Item
                label="phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone!"
                  }
                ]}
              >
                <input
                  type="string"
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
                  onClick={() => updateMe()}
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

export default Update;
