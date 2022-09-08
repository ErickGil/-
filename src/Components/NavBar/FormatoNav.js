import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../imagenes/nombre.jpeg"
import CartWidget from "../Cartwidget/CartWidget"

const FormatoNav = () => {
    return (
        <>
        <Navbar key="xl" bg="light" expand="xl" className="mb-3">
                    <Container fluid style = {style.navEstilos}>
                        <Navbar.Brand ><img style = {style.imagenLogo} src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-xl`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl}`}>
                                    Enc. Sonia Lazaro
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav  className="justify-content-end flex-grow-1 pe-3">
                                    <a style ={style.navEstilosLetras}  href="#action1">Inicio</a>
                                    <a style ={style.navEstilosLetras}  href="#action2">Sobre Nosotros</a>
                                    <NavDropdown style ={style.navEstilosLetras}
                                        title="Productos"
                                        id={`offcanvasNavbarDropdown-expand-xl`}
                                    >
                                        <NavDropdown.Item href="#action3">Bolsas de hielo</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Barras
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action5">
                                            Bidones
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                < CartWidget  /> 
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        
                    </Container>
                </Navbar>
        </>
    );
}
const style = {
    
    imagenLogo : {
        width : '150px',
        height : '100%',
        marginLeft : '10px',
    },
    navEstilos : {
        backgroundColor: 'white',
    },
    navEstilosLetras : {
        display: 'block',
        padding: '0.5rem',
        color: 'black',
        textDecoration : 'none',
        alignSelf: 'center',
        
    }
}

export default FormatoNav