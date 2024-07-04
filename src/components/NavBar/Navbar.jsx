import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBs from 'react-bootstrap/Navbar';
import './Navbar.css'


const Navbar = () => {

    return (
        <NavbarBs className="navbar pe-5">
            <Container>
                <NavbarBs.Brand><img src='./src/assets/LuxRay.png' className='luxray img-fluid'></img></NavbarBs.Brand>
                <Nav className="ps-4 nav-container justify-content-evenly">
                    <Nav.Item>
                        <Link to="/" className='btn'>Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/create" className='btn'>Crear</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/show" className='btn'>Listar</Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </NavbarBs>
    ) 
}

export default Navbar