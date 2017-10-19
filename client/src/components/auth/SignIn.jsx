import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';
import Navigation from '../navigation/Navigation.jsx';

/**
 * @class
 */
class SignIn extends React.Component {
  /**
   *
   * @param {object} props
   *
   */
  constructor(props) {
    super(props);
    this.signInUser = this.signInUser.bind(this);
  }
  /**
   *
   * @param { object } event
   * @return { object } method
   */
  signInUser(event) {
    event.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    this.props.actions.userActions.signInUser(username, password);
  }

  /**
 * @return {jsx} jsx
 */
  render() {
    return (
           <div>
              <Navigation/>
               <div className="section purple darken-4">
                <div className="container">
                    <h4 className="center white-text">PostIt-Messaging</h4>
                    <div className="row clearfix">
                        <br/><br/>
                        <div className="col s12 m6 offset-m3">
                            <div className="card">
                                <div className="card-content">
                                    <p className='red-text center'>{
                                        this.props.userErrorMessage
                                         ? this.props.userErrorMessage : ''}
                                    </p><br/>
                                    <span className="card-title center">
                                      Sign In
                                     </span>
                                    <form onSubmit={this.signInUser}>
                                        <div className='row'>
                                        <div className="input-field col s8 offset-s2">
                                            <input
                                              id="username"
                                              ref='username'
                                              type="text" className="validate" required/>
                                            <label>Username</label>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="input-field col s8 offset-s2">
                                            <input id="password" ref='password'
                                            type="password" className="validate" required/>
                                            <label>Password</label>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col s8 offset-s2 center">
                                            <button type='submit' name='action'
                                                className='purple darken-4 btn col s12'>
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                    <br/>
                                    </form>

                                    <div className='row'>
                                        <div className="col s8 offset-s2">
                                            <Link
                                                to='/password'
                                                className="left">
                                                <i className="material-icons left">lock
                                                </i>Forgot Password
                                              </Link>
                                            <Link to='/signup' className="right">Sign Up</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <br/><br/><br/><br/><br/>
              </div>
            </div>
    );
  }
}
/**
 *
 * @param {state} state
 * @return {state} state
 */
function mapStateToProps(state) {
  return {
    userSuccessMessage: state.userSuccessMessage,
    userErrorMessage: state.userErrorMessage,
  };
}
/**
 *
 * @param {dispatch} dispatch
 * @return {object} actions
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      userActions: bindActionCreators(userActions, dispatch),
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
