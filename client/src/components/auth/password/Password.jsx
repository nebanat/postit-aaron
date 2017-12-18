/* eslint-disable no-useless-escape */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PasswordForm from './PasswordForm.jsx';
import * as passwordActions from '../../../actions/passwordActions';
import Navigation from '../../navigation/Navigation.jsx';
import Loader from '../../loaders/Loader.jsx';
import Card from '../../common/Card.jsx';
import Section from '../../common/Section.jsx';
import Footer from '../../footer/Footer.jsx';

/**
 * @description handles sending password reset email link
 *
 * @class Password
 *
 * @extends Component
 */
export class Password extends Component {
  /**
   * @constructor
   * @param { props } props
   */
  constructor(props) {
    super(props);
    this.handleResetOnSubmit = this.handleResetOnSubmit.bind(this);
    this.setUserEmail = this.setUserEmail.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this.state = {
      initialState: {
        email: ''
      },
      user: {
        email: ''
      },
      emailError: '',
      showPasswordButton: true
    };
  }
  /**
   * @description handles on blur event
   *
   * @param { object } event
   *
   * @return { object } errorMessage
   */
  onBlur(event) {
    const { name } = event.target;
    const { value } = event.target;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    switch (name) {
      case 'email':
        if (!value) {
          this.setState({
            emailError: 'Please enter your email',
            showPasswordButton: false
          });
        } else if (!emailRegex.test(value)) {
          this.setState({
            emailError: 'Please enter a valid email',
            showPasswordButton: false
          });
        }
        break;
      default:
        break;
    }
  }
  /**
   * @description handles on focus event
   *
   * @param { object } event
   *
   * @return { object } errorMessage
   */
  onFocus(event) {
    const { name } = event.target;

    switch (name) {
      case 'email':
        this.setState({
          emailError: '',
          showPasswordButton: true
        });
        break;
      default:
        break;
    }
  }
  /**
   *@description handles on submit event
   *
   * @param { object } event
   *
   * @returns { object } user state contains email
   */
  handleResetOnSubmit(event) {
    event.preventDefault();

    this.props
      .actions
      .passwordActions.sendResetPassword(this.state.user.email);

    return this.setState({ user: this.state.initialState });
  }
  /**
   * @description handles on change event
   *
   * @param { object } event
   *
   * @returns { object } user state contains email
   */
  setUserEmail(event) {
    const field = event.target.name;
    const { value } = event.target;
    this.state.user[field] = value;

    return this.setState({ user: this.state.user });
  }
  /**
   *@description renders password form
   *
   * @returns { jsx } jsx
   */
  render() {
    const { passwordIsLoading } = this.props;
    const cardClass = 'card';
    const cardWrapperClass = 'col s12 m6 offset-m3 password-form';
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
                  wrapperClass = { sectionWrapperClass }
                  headerText = "PostIt Messaging"
                  headerClass = { sectionHeaderClass }>

                  <Card
                    cardClass ={ cardClass }
                    wrapperClass= { cardWrapperClass }
                    cardContentClass ={ cardContentClass }
                    cardTitleClass = { cardTitleClass }
                    title = "Recover Password">

                      <PasswordForm
                        user = { this.state.user }
                        onSubmit = { this.handleResetOnSubmit }
                        onChange = { this.setUserEmail }
                        onFocus = { this.onFocus }
                        onBlur = { this.onBlur }
                        emailError = { this.state.emailError }
                        showPasswordButton = { this.state.showPasswordButton }/>

                  </Card>
              </Section>
              <Footer/>
          </div>
    );
  }
}
/**
 *@description maps state to props
 *
 * @param { object} state
 *
 * @return { object } props
 */
const mapStateToProps = state => ({
  sendResetSuccessMessage: state.sendResetSuccessMessage,
  sendResetFailureMessage: state.sendResetFailureMessage,
  passwordIsLoading: state.passwordIsLoading
});
/**
 * @description maps dispatch to props
 *
 * @param { object } dispatch
 *
 * @return { object } props
 */
const mapDispatchToProps = dispatch => ({
  actions: {
    passwordActions: bindActionCreators(passwordActions, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Password);

