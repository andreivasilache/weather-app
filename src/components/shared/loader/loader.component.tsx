import React , { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './loader.component.sass';

class LoaderComponent extends Component{
    render(){
        return(
           <div className="spinner">
               <Spinner animation="border"/>
           </div>
        )
    }
}

export default LoaderComponent;