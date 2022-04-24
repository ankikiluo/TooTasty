import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


export default class NavbarComp extends Component {
    render() {
        return (
                <div>
                    <Navbar bg="primary" variant={"dark"} expand="lg">
                        <Navbar.Brand>TooTasty</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/search">Search</Nav.Link>
                                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
        )
    }
}