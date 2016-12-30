import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './css/bootstrap.min.css';
import App from './App';
import Doc from './Document';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/document/:docId" component={Doc}/>
  </Router>,
  document.getElementById('root')
);


