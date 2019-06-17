import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './App';
import Display from './display';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/display" component={Display}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;
