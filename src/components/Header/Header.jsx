import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch } from "react-redux";
import Logo from "../../assets/img/Logo.png";
import "../Button/ButtonDesign.scss";
import "./Header.scss";
import { userout } from "../../containers/User/userSlice";


function OffcanvasExample() {
 
let userMailHeader = JSON.parse(localStorage.getItem("SAVEUSEREMAIL"));

const dispatch = useDispatch();

const logOut = () => {
  localStorage.removeItem("SAVEUSERMAIL");
  localStorage.removeItem("SAVEJWT");
  dispatch(
    userout({
      credentials: {
        token: "",
        mail: ""
      }
    })
  );
};
  
console.log (userMailHeader)
if (userMailHeader === null) {
    console.log(userMailHeader,'dentro de if');
    return (
      <>
        {["md"].map((expand) => (
          <Navbar
            key={expand}
            //bg="light"
            expand={expand}
            className="mb-3 navbarDesign sticky-top "
          >
            <Container fluid>
              <img
                src={Logo}
                //width="110"
                //height="100"
                className="  fluid logoDesign"
                alt="Clinica logo"
              />
              <Navbar.Brand href="/" className="titleDesign">
                GeeksDent
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/knowus">Conócenos</Nav.Link>
                    <Nav.Link href="/team">Nuestro Equipo</Nav.Link>
                    <NavDropdown
                      title="Tratamientos"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      {" "}
                      <NavDropdown.Item href="/treatments">
                        Tratamientos
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/endodoncia">
                        Endodoncia
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/estetica">
                        Estética Dental
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/implantes">
                        Implantes
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/odontopediatria">
                        Odontopediatria
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/ortodoncia">
                        Ortodoncia
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/invisalign">
                        Ortodoncia Invisible
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/periodoncia">
                        Periodoncia
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/protesis">
                        Prótesis
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                    <Button className="buttonDesign" href="/login">
                      Login
                    </Button>
                  </Form>
                  <Form className="d-flex ">
                    <Button href="/register" className="buttonDesign">
                      Regístrate
                    </Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  } else {
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          //bg="light"
          expand={expand}
          className="mb-3 navbarDesign sticky-top "
        >
          <Container fluid>
            <img
              src={Logo}
              //width="110"
              //height="100"
              className="  fluid logoDesign"
              alt="Clinica logo"
            />
            <Navbar.Brand href="/" className="titleDesign">
              GeeksDent
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/knowus">Conócenos</Nav.Link>
                  <Nav.Link href="/team">Nuestro Equipo</Nav.Link>
                  <NavDropdown
                    title="Tratamientos"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    {" "}
                    <NavDropdown.Item href="/treatments">
                      Tratamientos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/endodoncia">
                      Endodoncia
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/estetica">
                      Estética Dental
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/implantes">
                      Implantes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/odontopediatria">
                      Odontopediatria
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/ortodoncia">
                      Ortodoncia
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/invisalign">
                      Ortodoncia Invisible
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/periodoncia">
                      Periodoncia
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/protesis">
                      Prótesis
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Button className="buttonDesign" onClick={logOut} href="/">
                    Logout
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>;
  


  }
}

export default OffcanvasExample;
