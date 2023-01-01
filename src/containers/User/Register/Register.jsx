import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Register.scss";


const Register = () => {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const registerHandle = () => {
  console.table(name,surname, email, password, phone, birthDate)
}

  return (
    <Container fluid className="registerDesign">
      <Row>
        <Col className=" d-flex flex-direction-column  flex-wrap align-items-center justify-content-center">
          <div className="d-flex flex-column flex-wrap align-items-center justify-content-center">
            <h3>Register</h3>
            <label htmlFor="">Nombre</label>
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Apellidos</label>
            <input
              type="text"
              placeholder="Apellidos"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Contraseña</label>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="">Telefono</label>
            <input
              type="phone"
              placeholder="Telefono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="">Fecha de Nacimiento</label>
            <input
              type="date"
              placeholder="Fecha de Nacimiento"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />

            <button className="buttonDesign" onClick={registerHandle}>
              Regístrate
            </button>
          </div>

          <div></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
