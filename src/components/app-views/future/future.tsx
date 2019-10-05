import React , { Component } from 'react';

class FutureComponent extends Component{
    componentDidMount(){
        console.log('component future activated!');
    }
    
    render(){
        return(
            <h1>Future Component works!</h1>
        )
    }
}

export default FutureComponent;