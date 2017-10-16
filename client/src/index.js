import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Home from './components/pages/home/Home.jsx';
import SignUp from './components/auth/SignUp.jsx';
import SignIn from './components/auth/SignIn.jsx';
import Password from './components/auth/Password.jsx';
import ResetPassword from './components/auth/ResetPassword.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import CreateGroup from './components/group/CreateGroup.jsx';
import GroupMessages from './components/message/GroupMessages.jsx';
// import Groups from './components/group/Groups.jsx';
import { requireAuth, noRequireAuth } from './utils/authservice';
import App from './components/App.jsx';
import configureStore from './store/configureStore';

const store = configureStore();


const Root = () => (
  <Provider store={store}>
      <Router history ={ browserHistory }>
        <Route path="/" component = { App }>
          <IndexRoute component = { Home }></IndexRoute>
          <Route path='/signup' component = { SignUp } onEnter={ noRequireAuth }></Route>
          <Route path='/signin' component = { SignIn } onEnter={ noRequireAuth }></Route>
          <Route path='/password' component = { Password } onEnter={ noRequireAuth }></Route>
          <Route path='/reset/:resetToken' component = { ResetPassword } onEnter={ noRequireAuth }></Route>
          <Route path='/dashboard' component = { Dashboard } onEnter={ requireAuth }></Route>
          <Route path='/group/new' component = { CreateGroup } onEnter={ requireAuth }></Route>
          <Route path='/group' component = { GroupMessages }></Route>
        </Route>
      </Router>
</Provider>
);

ReactDOM.render(
  <Root/>,
  document.getElementById('app')
);

