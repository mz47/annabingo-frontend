import React from "react";
import {Nav, Navbar} from "react-bootstrap";

export const Header = () => {
    return (
        <Navbar className="navbar-custom">
            <Navbar.Brand href="#">ANNABINGO!</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#create">+ Neu</Nav.Link>
                <Nav.Link href="#search">o Suchen</Nav.Link>
            </Nav>
        </Navbar>
    )
}