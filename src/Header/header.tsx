import '../Header/header.css';
import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, NavLink, withRouter, RouteComponentProps, Route, Switch } from 'react-router-dom';

import history from '../helpers/history';

const redirectTo = (route: string) =>{
  history.push(route);
  return '';
}

class Header extends Component{
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
                <Nav.Link as={NavLink} onClick={ () => redirectTo('/today') } to='/today'>Today</Nav.Link>
                <Nav.Link as={NavLink} onClick={ () => redirectTo('/tomoroow') } to='/tomoroow'>Tomoroow</Nav.Link>
                <Nav.Link as={NavLink} onClick={ () => redirectTo('/future') } to='/future'>Future</Nav.Link>
              </Nav>
          </Router>
        </Navbar.Collapse>
      </Navbar>
       )
    }
}

export default Header;
