import './header.css';
import history from '../../helpers/history';

import { BrowserRouter as Router, NavLink} from 'react-router-dom';
import React, {Component} from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';


const redirectTo = (route: string) =>{
  history.push(route);
}

class Header extends Component{
    render(){
       return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
        <img className="navbar__icon" 
          alt="Weather icon" 
          src="https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png"/>  
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Router>
              <Nav className="mr-auto">
                <Nav.Link as={NavLink} onClick={ () => redirectTo('/today') } to='/today'>Today</Nav.Link>
                <Nav.Link as={NavLink} onClick={ () => redirectTo('/future') } to='/future'>Future</Nav.Link>
              </Nav>
          </Router>
        </Navbar.Collapse>
      </Navbar>
       )
    }
}

export default Header;
