import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Navegacion = () => {
    return (
        <>     
                <div style ={style.container}>
                    <span>
                        <p>
                            < FavoriteBorderIcon /> No olvides Visitar nuestras redes sociales < FavoriteBorderIcon/>
                        </p>
                    </span>
                </div>
                <Navbar key="xl" bg="light" expand="xl" className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">Estudio Coral</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-xl`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl}`}>
                                    Arq. Magali Lazaro
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Inicio</Nav.Link>
                                    <Nav.Link href="#action2">Sobre Mi</Nav.Link>
                                    <NavDropdown
                                        title="Proyectos"
                                        id={`offcanvasNavbarDropdown-expand-xl`}
                                    >
                                        <NavDropdown.Item href="#action3">Tipologia 1</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Tipologia 2
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action5">
                                            Tipologia 3
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Buscar"
                                        className="me-2"
                                        aria-label="Buscar"
                                    />
                                    <Button variant="outline-success">Buscar</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            
        </>
    );
}
const style = {
    container : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        paddingTop : '10px',
        backgroundColor : 'antiquewhite',
    }
}

export default Navegacion;
