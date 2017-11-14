import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Home from './components/pages/home/Home.jsx';
import SignUp from './components/auth/signUp/SignUp.jsx';
import SignIn from './components/auth/signin/SignIn.jsx';
import Password from './components/auth/password/Password.jsx';
import ResetPassword from './components/auth/password/ResetPassword.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Default from './components/dashboard/Default.jsx';
import CreateGroup from './components/group/CreateGroup.jsx';
import UserGroups from './components/group/UserGroups.jsx';
import NewMessage from './components/message/NewMessage.jsx';
import GroupMessages from './components/message/GroupMessages.jsx';
import Test from './components/Test.jsx';
import Test2 from './components/Test2.jsx';
import { requireAuth, noRequireAuth } from './utils/authservice';
import configureStore from './store/configureStore';

const store = configureStore();


const Root = () => (
  <Provider store={store}>
      <Router history ={ browserHistory }>
        <Route path="/dashboard" component = { Dashboard } onEnter={ requireAuth }>
            <IndexRoute component = { Default }></IndexRoute>
            <Route path='/group/new' component = { CreateGroup }
              onEnter={ requireAuth }></Route>
            <Route path='/groups' component = { UserGroups }
              onEnter={ requireAuth }></Route>
            <Route path='/message' component = { NewMessage }
              onEnter={ requireAuth }>
            </Route>
            <Route path='/group/:id/messages' component = { GroupMessages }
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
        <Route path="/test" component={ Test2 }></Route>
      </Router>
</Provider>
);

ReactDOM.render(
  <Root/>,
  document.getElementById('app')
);

