import React , { Component } from 'react';
import { BrowserRouter as  Switch, Route, BrowserRouter } from "react-router-dom";
import TodayComponent from './today/today';
import TomorrowComponent from './tomorrow/tomorrow';
import FutureComponent from './future/future';


class AppViews extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/today' component={TodayComponent}></Route>
                    <Route exact path='/tomoroow' component={TomorrowComponent}></Route>
                    <Route exact path='/future' component={FutureComponent}></Route>
                 </Switch>
            </BrowserRouter>
        )
    }
}

export default AppViews;