import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import login from './components/login'
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
ReactDOM.render(
    <Router>
        <div>
            <Route path='/' component="App" />
        </div>
    </Router>,
    document.getElementById('root'))
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={login} />
        </div>
    </Router>
    , document.getElementById('root')
);