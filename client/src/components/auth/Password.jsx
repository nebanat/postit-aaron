import React, { Component } from 'react';
// import Loader from '../loader/Loader.jsx'

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
    const { sendResetFailureMessage, sendResetSuccessMessage } = this.props;
    return (
            <div>
          {/*
            {
                (this.props.groupIsLoading) ? (<Loader/>) : ('')
            } */}
            <div className="section purple darken-4">
                <div className="container">
                    <h4 className="center white-text">PostIt-Messaging</h4>
                    <div className="row clearfix">
                    <br/><br/><br/>
                    <div className="col s12 m6 offset-m3">
                        <div className="card">
                            <div className="card-content">
                             <p className='red-text center'>
                                 { (sendResetFailureMessage) || ''}
                             </p><br/>
                             <p className='green-text center'>
                                 { (sendResetSuccessMessage) || ''}
                             </p><br/>
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

export default Password;
