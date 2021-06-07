import React from "react";
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

import './navbar.style.css'

export default function Navb() {
  return (
    <div className="navbar-main">
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#home">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png" width="80" height="40" />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">
              <Link to="/">خانه</Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to="/users">کاربران</Link>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <hr className="hr-end" />
    </div>
  );
}
