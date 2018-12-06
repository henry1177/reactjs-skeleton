import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import MainView from "./js/layouts/main";

//import './assets/css/style.scss';
import 'StyleSheet';

ReactDOM.render(
    <HashRouter>
        <Route path="/" component={MainView}/>
    </HashRouter>, document.getElementById('root')
)