import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';


/**
 * @class
 * @extends component
 */
class SignUp extends Component {
  /**
   *
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.registerUser = this.registerUser.bind(this);
    this.state = {
      passwordMatchError: ''
    };
  }
  /**
   *
   * @param {object} event
   * @return {*} method
   */
  registerUser(event) {
    event.preventDefault();
    const username = this.refs.username.value;
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const cpassword = this.refs.cpassword.value;

    if (password !== cpassword) {
      this.setState({ passwordMatchError: 'Confirm password does not match password' });
      return;
    }

    this.props.actions.userActions.signUpUser(username, email, password);
    this.refs.signUpForm.reset();
  }
  // /**
  //  * @return { actions } actions
  //  */
  // componentWillMount() {
  //   this.props.signUpUserSuccess('');
  //   this.props.signUpUserError('');
  // }
  /**
   * @return {jsx} jsx
   */
  render() {
    return (
           <div>
                {/* <Navigation/> */}
                <div className="section purple darken-4">
                <div className="container">
                    <h4 className="center white-text">PostIt-Messaging</h4>
                    <div className="row clearfix">
                        <br/>
                        <div className="col s12 m6 offset-m3">

                            <div className="card">
                                <div className="card-content">
                                    <p className='red-text center col s12'>
                                      { this.state.passwordMatchError }
                                      {
                                        (this.props.userErrorMessage)
                                        ? this.props.userErrorMessage : ''
                                       }
                                      </p><br/>
                                    <p className='green-text center col s12'>
                                      {(this.props.userSuccessMessage)
                                         ? this.props.userSuccessMessage
                                         : ''}
                                    <span>
                                      {/* link to login */}
                                      <Link href='/signin'>
                                        {/* {
                                          (this.props.userSuccessMessage)
                                          ? ' Login here' : ' '
                                        } */}
                                        </Link></span></p>
                                    <br/><br/>
                                    <span className="card-title center">
                                      Register
                                    </span>
                                    <form onSubmit = { this.registerUser } ref='signUpForm'>
                                        <div className='row'>
                                            <div
                                              className="input-field col s10 offset-s1">
                                              <input id="username"
                                                  ref='username'
                                                  type="text"
                                                  className="validate"
                                                  required/>
                                                <label>Username</label>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div
                                              className="input-field col s10 offset-s1">
                                                <input
                                                    id="email" ref='email'
                                                    type="email"
                                                    className="validate"
                                                    required/>
                                                <label
                                                    data-error="Enter a valid Email"
                                                    data-success="correct">
                                                    Email
                                                </label>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div
                                              className="input-field col s10 offset-s1">
                                                <input
                                                  id="password" ref='password'
                                                  type="password"
                                                  className="validate"
                                                  required/>
                                                <label>Password</label>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className="input-field col s10 offset-s1">
                                                <input
                                                id="cpassword" ref='cpassword'
                                                type="password"
                                                className="validate"
                                                required/>
                                                <label>Confirm Password</label>
                                            </div>
                                        </div>
                                    <div className='row'>
                                        <div className="col s10 offset-s1 center">
                                            <button
                                                type='submit' name='action'
                                                className='purple darken-4 btn col s12'>
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                    <br/>
                                    </form>

                                    <div className='row'>
                                        <div className="col s8 offset-s2 center">
                                            <span>
                                              Have an account?
                                            </span>
                                            <Link to='/signin'> Sign In</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
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
    userErrorMessage: state.userErrorMessage
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

