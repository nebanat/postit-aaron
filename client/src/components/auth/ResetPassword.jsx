import React, { Component } from 'react';

/**
 * @class
 * @extends component
 */
class ResetPassword extends Component {
  /**
   *
   * @param {props} props
   * @return {functionInitialization} functionInitialization
   */
  constructor(props) {
    super(props);
    this.handleSubmitPasswordReset = this.handleSubmitPasswordReset.bind(this);
    this.state = {
      confirmPasswordError: '',
    };
  }
  componentWillMount() {
    console.log(this.props.params.resetToken);
  }
  /**
   *
   * @param { event } event
   * @return { password } password
   */
  handleSubmitPasswordReset(event) {
    event.preventDefault();
    const password = this.refs.password.value;
    const passwordConfirm = this.refs.password_confirm.value;
    const { resetToken } = this.props.params;

    if (password !== passwordConfirm) {
      return this.setState({ confirmPasswordError: 'Passwords do not match' });
    }

    if (password.length < 6) {
      return this.setState({ confirmPasswordError: 'Passwords must be a least 6 characters' });
    }


    this.props.actions.passwordActions.resetPassword(resetToken, password);

    this.setState({ confirmPasswordError: '' });

    this.refs.resetForm.reset();
  }
  /**
   * @return {jsx} jsx
   */
  render() {
    return (
            <div>
               <div className="section purple darken-4">
                    <div className="container">
                        <h4 className="center white-text">PostIt-Messaging</h4>
                        <div className="row clearfix">
                        <br/><br/><br/>
                        <div className="col s12 m6 offset-m3">
                            <div className="card">
                                <div className="card-content">
                                <p className='red-text center'>
                                 { (this.state.confirmPasswordError) || ''}
                                 { (this.props.resetFailureMessage) || ''}
                                </p><br/>
                                <p className='green-text center'>
                                 { (this.props.resetSuccessMessage) || ''}
                                </p><br/>
                                    <span
                                      className="card-title center">
                                      Reset Password
                                    </span>
                                    <form
                                      ref="resetForm"
                                      onSubmit={this.handleSubmitPasswordReset}>
                                        <div className='row'>
                                            <div
                                            className="input-field col s8 offset-s2">
                                                <input
                                                id="password" ref='password'
                                                placeholder="New Password"
                                                type="password"
                                                className="validate" required/>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div
                                            className="input-field col s8 offset-s2">
                                                <input
                                                  id="cpassword"
                                                  ref='password_confirm'
                                                  placeholder="Confirm Password"
                                                  type="password"
                                                  className="validate"
                                                  required/>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div
                                            className="col s8 offset-s2 center">
                                                <button
                                                  type='submit' name='action'
                                                    className='purple darken-4 btn col s12'>
                                                    Reset
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

export default ResetPassword;
