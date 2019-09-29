import '../Header/header.css';
import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, NavLink, withRouter, RouteComponentProps } from 'react-router-dom';

interface ISection{}

class Header extends React.Component<ISection & RouteComponentProps>{
    render(){
       return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
        <img className="navbar__icon"
            src="https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png"
        />  
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Router>
              <Nav className="mr-auto">
                <Nav.Link as={NavLink} to='/today' >Today</Nav.Link>
                <Nav.Link as={NavLink} to='/tomoroow'>Tomorrow</Nav.Link>
                <Nav.Link as={NavLink} to='/future'>Future</Nav.Link>
              </Nav>
          </Router>
        </Navbar.Collapse>
      </Navbar>
       )
    }
}

export default withRouter(Header);
