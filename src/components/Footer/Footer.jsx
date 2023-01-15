import React from "react";
import "./Footer.scss"
import Navbar from "react-bootstrap/Nav";
import { Container, Row, Col } from react - bootstrap;

function BasicExample() {
  return (
    <Navbar
     
      bg="#a18cd1"
     
      className=" navbarDesign sticky-top "
    >
      <Container fluid>
        <img src={Logo} className="  fluid logoDesign" alt="Clinica logo" />
        <Navbar.Brand className="titleDesign" >
          GeeksDent
        </Navbar.Brand>

       
          <Offcanvas.Body className="justify-content-end">
            <Nav className="justify-content-end flex-grow-2 pe-5">
              <Nav.Link >
                Nuestro Equipo
              </Nav.Link>
              <Nav.Link >Conócenos</Nav.Link>

              <Form className="d-flex">
                <h5>Regístrate</h5>
              </Form>

              <Form className="d-flex ">
                <h5>Regístrate</h5>
              </Form>
            </Nav>
          </Offcanvas.Body>
        
      </Container>
    </Navbar>
  );}
     
  

export default BasicExample;
