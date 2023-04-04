import React, {Component} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from './logo/icong.png';
import './App.css';
import {Link} from "react-router-dom";

class Header extends Component{
render(){
    return(
    <>
        <Navbar collapseOnSelect expand="md" bg="light">
            <Container className="header">
                <Navbar.Brand>
                    <img
                        src={logo}
                        height="50"
                        width="50"
                        className="d-inline-block align-top"
                        alt="top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to = "/">Вход</Link></Nav.Link>
                        <Nav.Link><Link to = "/client">Клиенты</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
);
}


}
export default Header;