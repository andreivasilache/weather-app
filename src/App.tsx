import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

import Header from './Header/header';
import Footer from './Footer/footer';
import AppViews from './app-views/app-views';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store/index';
import { Provider } from 'react-redux';

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
              <Header />
              <AppViews /> 
              <Footer />
          </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
