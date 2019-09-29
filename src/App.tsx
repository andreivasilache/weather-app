import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

import Header from './Header/header';
import Footer from './Footer/footer';
import AppViews from './app-views/app-views';

class App extends Component{
  render(){
    return (
      <div>
        <Header />
        <AppViews /> 
        <Footer />
      </div>
    );
  }
}
export default App;
