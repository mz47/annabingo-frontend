import React from "react";
import {Nav, Navbar} from "react-bootstrap";

export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">ANNABINGO!</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#create">Create!</Nav.Link>
            </Nav>
        </Navbar>
    )
}