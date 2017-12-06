/* eslint-disable import/no-named-as-default */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,
  browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Home from './components/pages/home/Home.jsx';
import SignUp from './components/auth/signUp/SignUp.jsx';
import SignIn from './components/auth/signin/SignIn.jsx';
import Password from './components/auth/password/Password.jsx';
import ResetPassword from './components/auth/password/ResetPassword.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import CreateGroup from './components/group/CreateGroup.jsx';
import UserGroups from './components/group/UserGroups.jsx';
import NewMessage from './components/message/NewMessage.jsx';
import GenericNotFound from '../src/components/pages/GenericNotFound.jsx';
import Group from './components/group/Group.jsx';
import { requireAuth, noRequireAuth } from './utils/authservice';
import configureStore from './store/configureStore';


const store = configureStore();


const Root = () => (
  <Provider store={store}>
      <Router history ={ browserHistory }>
        <Route path="/dashboard" component = { Dashboard } onEnter={ requireAuth }>
            <IndexRoute component = { UserGroups }
              onEnter={ requireAuth }></IndexRoute>

            <Route path='/group/new' component = { CreateGroup }
              onEnter={ requireAuth }></Route>

            <Route path='/message' component = { NewMessage }
              onEnter={ requireAuth }>
            </Route>

            <Route path='/group/:id/messages' component = { Group }
              onEnter={ requireAuth }>
            </Route>
        </Route>
        <Route path='/signup' component = { SignUp } onEnter={ noRequireAuth }>
        </Route>

        <Route path='/signin' component = { SignIn } onEnter={ noRequireAuth }>
        </Route>

        <Route path='/password' component = { Password }
          onEnter={ noRequireAuth }>
        </Route>

        <Route path='/reset/:resetToken' component = { ResetPassword }
                onEnter={ noRequireAuth }>
        </Route>

        <Route path="/" component={ Home }></Route>

        <Route path='*' component={ GenericNotFound } />
      </Router>
</Provider>
);

ReactDOM.render(
  <Root/>,
  document.getElementById('app')
);

