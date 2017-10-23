import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as passwordActions from '../../actions/passwordActions';
import Navigation from '../navigation/Navigation.jsx';
import Loader from '../loaders/Loader.jsx';

/**
 * @class
 */
class Password extends Component {
  /**
   *
   * @param {event} event
   * @returns {event} method
   */
  handleResetOnSubmit(event) {
    event.preventDefault();
    const email = this.refs.email.value;


    this.props.actions.passwordActions.sendResetPassword(email);

    this.refs.passResetForm.reset();
  }
  /**
   * @returns {jsx} jsx
   */
  render() {
    const { passwordIsLoading } = this.props;
    return (
            <div>

            <Navigation/>

            {
                (passwordIsLoading) ? (<Loader/>) : ('')
            }
            <div className="section purple darken-4">
                <div className="container">
                    <h4 className="center white-text">PostIt-Messaging</h4>
                    <div className="row clearfix">
                    <br/><br/><br/>
                    <div className="col s12 m6 offset-m3">
                        <div className="card">
                            <div className="card-content">

                                <span className="card-title center">
                                  Recover Password
                                </span>
                                <form
                                  ref="passResetForm"
                                  onSubmit = {this.handleResetOnSubmit.bind(this)} >
                                    <div className='row'>
                                        <div className="input-field col s8 offset-s2">
                                            <input
                                              id="email" ref='email'
                                              placeholder="Enter your Email"
                                              type="email" className="validate" required/>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className="col s8 offset-s2 center">
                                            <button type='submit' name='action'
                                                className='purple darken-4 btn col s12'>
                                                Send Reset Link
                                            </button>
                                        </div>
                                    </div>
                                    <br/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
                <br/><br/><br/><br/><br/><br/><br/>
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
    sendResetSuccessMessage: state.sendResetSuccessMessage,
    sendResetFailureMessage: state.sendResetFailureMessage,
    passwordIsLoading: state.passwordIsLoading
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
      passwordActions: bindActionCreators(passwordActions, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Password);

