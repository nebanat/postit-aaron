import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Home from './components/pages/home/Home.jsx';
import SignUp from './components/auth/SignUp.jsx';
import SignIn from './components/auth/SignIn.jsx';
import Password from './components/auth/Password.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import App from './components/App.jsx';
import configureStore from './store/configureStore';

const store = configureStore();


const Root = () => (
  <Provider store={store}>
      <Router history ={ browserHistory }>
        <Route path="/" component = { App }>
          <IndexRoute component = { Home }></IndexRoute>
          <Route path='/signup' component = { SignUp }></Route>
          <Route path='/signin' component = { SignIn }></Route>
          <Route path='/password' component = { Password }></Route>
          <Route path='/dashboard' component = { Dashboard }></Route>
        </Route>
      </Router>
</Provider>
);

ReactDOM.render(
  <Root/>,
  document.getElementById('app')
);

