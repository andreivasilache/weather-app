import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

import Header from './Header/header';
import Footer from './Footer/footer';
import AppViews from './app-views/app-views';
import { BrowserRouter } from 'react-router-dom';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Header />
        <AppViews /> 
        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;
