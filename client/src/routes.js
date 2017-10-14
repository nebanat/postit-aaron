import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/pages/home/Home.jsx';
import SignUp from './components/auth/SignUp.jsx';
import App from './components/App.jsx';

export default (

    <Route path="/" component = { App }>
      <IndexRoute component = { Home }></IndexRoute>
      <Route path='/signup' component = { SignUp }></Route>
    </Route>
);

