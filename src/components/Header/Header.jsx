import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/img/Logo.png";
import "../Button/ButtonDesign.scss";
import "./Header.scss";
import { userout, userData } from "../../containers/User/userSlice";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function OffcanvasExample() {

  const [criteria, setCriteria] = useState("");
  //let userMailHeader = JSON.parse(localStorage.getItem("SAVEUSEREMAIL"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
 const userCredentials = useSelector(userData);

  //Handlers

  const criteriaHandler = (e) => {
    setCriteria(e.target.value);
  }

  const goProfile = () => {
  navigate("/myAccount")
}

  //Funciones

  const logOut = () => {

    dispatch(userout({credentials:{},token:"", active:false}))

    return navigate("/");


   

    //localStorage.removeItem("SAVEUSEREMAIL");
    //localStorage.removeItem("SAVEJWT");
    //dispatch(
    //  userout({
    //    credentials: {
    //      token: "",
    //      mail: ""
    //    }
    //  })
    //);
  };

  if (userCredentials?.active ) {
    return (
      <>
        {["lg"].map((expand) => (
          <Navbar
            key={expand}
            bg="#a18cd1"
            expand={expand}
            className=" navbarDesign sticky-top "
          >
            <Container fluid>
              <img
                src={Logo}
                className="  fluid logoDesign"
                alt="Clinica logo"
              />
              <Navbar.Brand
                className="titleDesign"
                onClick={() => navigate("/")}
              >
                GeeksDent
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Menú
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="justify-content-end">
                  <Nav className="justify-content-end flex-grow-2 pe-5">
                    <Nav.Link onClick={() => goProfile()}>
                      {userCredentials?.credentials?.name}
                    </Nav.Link>
                    <Nav.Link onClick={()=>navigate("/appointments")}>Pide tu cita</Nav.Link>
                    <Nav.Link onClick={() => navigate("/team")}>
                      Nuestro Equipo
                    </Nav.Link>
                    <NavDropdown
                      title="Tratamientos"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      {" "}
                      <NavDropdown.Item onClick={() => navigate("/treatments")}>
                        Tratamientos
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate("/endodoncia")}>
                        Endodoncia
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate("/estetica")}>
                        Estética Dental
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate("/implantes")}>
                        Implantes
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => navigate("/odontopediatria")}
                      >
                        Odontopediatria
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate("/ortodoncia")}>
                        Ortodoncia
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate("/invisalign")}>
                        Ortodoncia Invisible
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => navigate("/periodoncia")}
                      >
                        Periodoncia
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate("/protesis")}>
                        Prótesis
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Form className="d-flex">
                      <Button className="buttonDesign" onClick={logOut}>
                        Logout
                      </Button>
                    </Form>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  } else {
    return (
      <>
        {["lg"].map((expand) => (
          <Navbar
            key={expand}
            bg="#a18cd1"
            expand={expand}
            className=" navbarDesign sticky-top "
          >
            <Container fluid>
              <img
                src={Logo}
                className="  fluid logoDesign"
                alt="Clinica logo"
              />
              <Navbar.Brand
                className="titleDesign"
                onClick={() => navigate("/")}
              >
                GeeksDent
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Menú
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="justify-content-end">
                  <Nav className="justify-content-end flex-grow-2 pe-5">
                    <Nav.Link onClick={() => navigate("/team")}>
                      Nuestro Equipo
                    </Nav.Link>
                    <Nav.Link onClick={() => navigate("/knowus")}>
                      Conócenos
                    </Nav.Link>
                    <NavDropdown
                      title="Tratamientos"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item onClick={() => navigate("/treatments")}>
                        Tratamientos
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate("/endodoncia")}>
                        Endodoncia
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate("/estetica")}>
                        Estética Dental
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate("/implantes")}>
                        Implantes
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => navigate("/odontopediatria")}
                      >
                        Odontopediatria
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate("/ortodoncia")}>
                        Ortodoncia
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate("/invisalign")}>
                        Ortodoncia Invisible
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => navigate("/periodoncia")}
                      >
                        Periodoncia
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => navigate("/protesis")}
                      >
                        Prótesis
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Form className="d-flex">
                      <Button
                        className="buttonDesign"
                        onClick={() => navigate("/login")}
                      >
                        Login
                      </Button>
                    </Form>

                    <Form className="d-flex ">
                      <Button
                        onClick={() => navigate("/register")}
                        className="buttonDesign"
                      >
                        Regístrate
                      </Button>
                    </Form>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }
}

export default OffcanvasExample;
