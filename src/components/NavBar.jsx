import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import logo from '../logo.webp';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" className='NavBar'>
        <Container className='container'>
            <Navbar.Brand href="#home"><img src={logo}alt="LogoTiendaFashion" className='logo' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link className='enlaces' href="#home">Home</Nav.Link>
                <Nav.Link className='enlaces' href="#link">Inicio Seccion</Nav.Link>
                <Nav.Link className='enlaces' href="#link">Registrar</Nav.Link>
                <Nav.Link className='enlaces' href="#link">Catalogo</Nav.Link>
                <NavDropdown title="Categorias" className='enlacesDes' id="basic-nav-dropdown">
                    <NavDropdown.Item className='enlaces' href="#action/3.1">Deportivos</NavDropdown.Item>
                    <NavDropdown.Item className='enlaces' href="#action/3.2">Casuales</NavDropdown.Item>
                    <NavDropdown.Item className='enlaces' href="#action/3.3">Formales</NavDropdown.Item>
                    <NavDropdown.Divider />
                </NavDropdown>
            </Nav>
            <CartWidget/>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar