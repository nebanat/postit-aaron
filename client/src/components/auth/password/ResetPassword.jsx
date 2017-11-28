import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as passwordActions from '../../../actions/passwordActions';
import Navigation from '../../navigation/Navigation.jsx';
import Loader from '../../loaders/Loader.jsx';
import ResetPasswordForm from './ResetPasswordForm.jsx';
import Card from '../../common/Card.jsx';
import Section from '../../common/Section.jsx';
import AuthFooter from '../../footer/AuthFooter.jsx';
/**
 * @class
 * @extends component
 */
export class ResetPassword extends Component {
  /**
   *
   * @param { props } props
   * @return { functionInitialization } functionInitialization
   */
  constructor(props) {
    super(props);
    this.handleSubmitPasswordReset = this.handleSubmitPasswordReset.bind(this);
    this.setUserPassword = this.setUserPassword.bind(this);
    this.state = {
      user: {
        password: '',
        cpassword: ''
      },
      confirmPasswordError: '',
    };
  }

  /**
   *
   * @param { event } event
   * @return { password } password
   */
  handleSubmitPasswordReset(event) {
    event.preventDefault();
    const { password, cpassword } = this.state.user;
    const { resetToken } = this.props.params;

    if (password !== cpassword) {
      return this.setState({ confirmPasswordError: 'Passwords do not match' });
    }

    if (password.length < 6) {
      return this.setState({ confirmPasswordError: 'Passwords must be at least 6 characters' });
    }


    this.props.actions.passwordActions.resetPassword(resetToken, password);

    this.setState({ confirmPasswordError: '' });
  }
  /**
   * @param { event } event
   * @returns { state } state
   */
  setUserPassword(event) {
    const field = event.target.name;
    const { value } = event.target;
    this.state.user[field] = value;

    return this.setState({ user: this.state.user });
  }
  /**
   * @return { jsx } jsx
   */
  render() {
    const { passwordIsLoading } = this.props;
    const cardClass = 'card';
    const cardWrapperClass = 'col s12 m6 offset-m3 login-form';
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
                        <ResetPasswordForm
                              user = { this.state.user }
                              onSubmit={this.handleSubmitPasswordReset}
                              onChange={this.setUserPassword}/>
                    </Card>
               </Section>
               <AuthFooter/>
            </div>
    );
  }
}
/**
 *
 * @param {state} state
 * @return {state} state
 */
const mapStateToProps = state => ({
  resetSuccessMessage: state.resetSuccessMessage,
  resetFailureMessage: state.resetFailureMessage,
  passwordIsLoading: state.passwordIsLoading
});
/**
 *
 * @param {dispatch} dispatch
 * @return {object} actions
 */
const mapDispatchToProps = dispatch => ({
  actions: {
    passwordActions: bindActionCreators(passwordActions, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);

