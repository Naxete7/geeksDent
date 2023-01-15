import React from "react";
import "./Footer.scss"
import Nav from "react-bootstrap/Nav";


function BasicExample() {
  return (
    <Nav
      className="footerDesign"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Copyright All Rights Reserved GeeksDent © 2023
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="disabled"
          disabled
          className="footerText justify-content-end flex-grow-2 pe-5"
        >
          <h6> Direccion:</h6>
          <h6>Calle Ave del paraiso 23, Valencia</h6>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          <h5>Teléfono</h5>
          <h6>654321987</h6>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default BasicExample;
