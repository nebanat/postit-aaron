import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as passwordActions from '../../../actions/passwordActions';
import Navigation from '../../navigation/Navigation.jsx';
import Loader from '../../loaders/Loader.jsx';
import ResetPasswordForm from './ResetPasswordForm.jsx';
import Card from '../../common/Card.jsx';
import Section from '../../common/Section.jsx';
import Footer from '../../footer/Footer.jsx';
/**
 * @description handles resetting user password
 *
 * @class ResetPassword
 *
 * @extends Component
 */
export class ResetPassword extends Component {
  /**
   * @constructor
   *
   * @param { object } props - contains reset password details
   *
   */
  constructor(props) {
    super(props);
    this.handleSubmitPasswordReset = this.handleSubmitPasswordReset.bind(this);
    this.setUserPassword = this.setUserPassword.bind(this);
    this.onFocus = this.onFocus.bind(this);

    this.state = {
      user: {
        password: '',
        confirmPassword: ''
      },
      confirmPasswordError: '',
    };
  }
  /**
   * @description clears errorState
   *
   * @return { object } password Error - returns confirm password error state
   */
  onFocus() {
    this.setState({
      confirmPasswordError: '',
    });
  }

  /**
   * @description handles on submit event
   *
   * @param { object } event - event object containing password details
   *
   * @return { object } action that handles password reset
   */
  handleSubmitPasswordReset(event) {
    event.preventDefault();
    const { password, confirmPassword } = this.state.user;
    const { resetToken } = this.props.params;

    if (password !== confirmPassword) {
      return this.setState({ confirmPasswordError: 'Passwords do not match' });
    }

    if (password.length < 6) {
      return this.setState({
        confirmPasswordError: 'Passwords must be at least 6 characters'
      });
    }


    this.props.actions.passwordActions.resetPassword(resetToken, password);

    this.setState({ confirmPasswordError: '' });
  }
  /**
   * @description handles on change event
   *
   * @param { object } event - event object containing user details
   *
   * @returns { object } state - return user details as state
   */
  setUserPassword(event) {
    const field = event.target.name;
    const { value } = event.target;
    this.state.user[field] = value;

    return this.setState({ user: this.state.user });
  }
  /**
   * @description renders ResetPassword form
   *
   * @return { jsx } jsx  - renders password component
   */
  render() {
    const { passwordIsLoading } = this.props;
    const cardClass = 'card';
    const cardWrapperClass = 'col s12 m6 offset-m3 reset-form';
    const sectionWrapperClass = 'section purple darken-3';
    const sectionHeaderClass = 'center white-text';
    const cardContentClass = 'card-content';
    const cardTitleClass = 'card-title center';

    return (
         <div>
              <Navigation/>
              {
                (passwordIsLoading) ? (<Loader/>) : ('')
            }
               <Section
                  wrapperClass={sectionWrapperClass}
                  headerText = "PostIt Messaging"
                  headerClass = { sectionHeaderClass }>

                    <Card
                      cardClass = { cardClass }
                      wrapperClass={cardWrapperClass}
                      cardContentClass ={ cardContentClass }
                      cardTitleClass = { cardTitleClass }
                      title="Reset Password">

                      <p className='red-text center-align'>
                        { this.state.confirmPasswordError }
                      </p>

                        <ResetPasswordForm
                              user = { this.state.user }
                              onSubmit={this.handleSubmitPasswordReset}
                              onChange={this.setUserPassword}
                              onFocus = { this.onFocus }/>
                    </Card>
               </Section>
               <Footer/>
            </div>
    );
  }
}
/**
 * @description maps state to props
 *
 * @param { object } state - holds reset password state
 *
 * @return { object } props - returns mapped props from state
 */
const mapStateToProps = state => ({
  resetSuccessMessage: state.resetSuccessMessage,
  resetFailureMessage: state.resetFailureMessage,
  passwordIsLoading: state.passwordIsLoading
});
/**
 * @description maps dispatch to props
 *
 * @param { object } dispatch - holds dispatchable actions
 *
 * @return { object } props - returns mapped props from dispatch
 */
const mapDispatchToProps = dispatch => ({
  actions: {
    passwordActions: bindActionCreators(passwordActions, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);

