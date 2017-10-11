import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './components/pages/home/Home.jsx';
import SignUp from './components/auth/SignUp.jsx';
import App from './components/App.jsx';


const Root = () => (
    <Router history ={ browserHistory }>
      <Route path="/" component = { App }>
        <IndexRoute component = { Home }></IndexRoute>
        <Route path='/signup' component = { SignUp }></Route>
      </Route>
    </Router>
);

ReactDOM.render(
  <Root/>,
  document.getElementById('app')
);

