import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { Col, Container, Row } from "react-bootstrap";
import "../../../components/Button/ButtonDesign.scss"
import { useDispatch } from "react-redux";
import { login } from "../userSlice";



const App = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({
      email: email,
      password: password,
      loggedIn: true,
    })
    );
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
    return (
      <Container fluid>
        <Row>
          <Col className="col-9  ">
            <br></br>
            <br></br>
            <br></br>
            <Form
              className=" formDesign"
              name="basic"
              labelCol={{
                span: 11
              }}
              wrapperCol={{
                span: 10
              }}
              initialValues={{
                remember: true
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                onSubmit={(e)=>handleSubmit(e)}
                label="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!"
                  }
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                rules={[
                  {
                    required: true,
                    message: "Please input your password!"
                  }
                ]}
              >
                <Input.Password />
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
                  span: 14
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  className="buttonDesign"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
            {/*<div className="login">
              <form className="loginForm">
                <h1>Login Here</h1>
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="buttonDesign">Submit</button>
              </form>
            </div>*/}
          </Col>
        </Row>
      </Container>
    );
};
export default App;
