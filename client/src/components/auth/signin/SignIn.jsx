import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../../actions/userActions';
import Navigation from '../../navigation/Navigation.jsx';
import Loader from '../../loaders/Loader.jsx';
import SignInForm from './SignInForm.jsx';
import SignInFooter from './SignInFooter.jsx';
import Card from '../../common/Card.jsx';
import Section from '../../common/Section.jsx';
import Footer from '../../footer/Footer.jsx';

/**
 * @description handles user sign in
 *
 * @class SignIn
 *
 * @extends Component
 */
export class SignIn extends Component {
  /**
   * @constructor
   *
   * @param { object } props contains user details and event based actions
   *
   */
  constructor(props) {
    super(props);
    this.signInUser = this.signInUser.bind(this);
    this.setUserDetails = this.setUserDetails.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);

    this.state = {
      user: {
        username: '',
        password: ''
      },
      usernameError: '',
      passwordError: '',
      showLoginButton: true

    };
  }
  /**
   * @description handles on focus event
   *
   * @param { object } event - event object containing user details
   *
   * @return { object } state - return error messages when error occurs
   */
  onFocus(event) {
    const { name } = event.target;

    switch (name) {
      case 'username':
        this.setState({
          usernameError: '',
          showLoginButton: true
        });
        break;
      case 'password':
        this.setState({
          passwordError: '',
          showLoginButton: true
        });
        break;
      default:
        break;
    }
  }
  /**
   * @description handles on blur event
   *
   * @param { object } event - event object containing user details
   *
   * @return { object } state - returns error messages
   */
  onBlur(event) {
    const { name } = event.target;
    const { value } = event.target;

    switch (name) {
      case 'username':
        if (!value) {
          this.setState({
            usernameError: 'Please enter your username',
            showLoginButton: false
          });
        }
        break;
      case 'password':
        if (!value) {
          this.setState({
            passwordError: 'Please enter your password',
            showLoginButton: false
          });
        }
        break;
      default:
        break;
    }
  }
  /**
   *@description fires an action to sign in a user
   *
   * @param { object } event - event object containing user details
   *
   * @return { object } action - signs in user
   */
  signInUser(event) {
    event.preventDefault();

    this.props.actions.userActions.signInUser(this.state.user);
  }
  /**
   * @description set users details onchange
   *
   * @param { object } event - event object containing user details
   *
   * @returns { object } state  - contains user details
   */
  setUserDetails(event) {
    const field = event.target.name;
    const { value } = event.target;
    this.state.user[field] = value;

    return this.setState({ user: this.state.user });
  }

  /**
   * @description renders signin form
   *
   * @return { jsx } jsx  - renders sigin component
  */
  render() {
    const { authIsLoading } = this.props;
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
                (authIsLoading) ? (<Loader/>) : ('')
              }
               <Section wrapperClass={ sectionWrapperClass }
                    headerText = "PostIt Messaging"
                    headerClass = { sectionHeaderClass }>

                  <Card
                      cardClass = { cardClass }
                      wrapperClass = { cardWrapperClass }
                      cardContentClass ={ cardContentClass }
                      cardTitleClass = { cardTitleClass }
                      title = "Sign In">

                      <SignInForm
                        user = { this.state.user }
                        onChange = { this.setUserDetails }
                        onSubmit = { this.signInUser }
                        usernameError = {this.state.usernameError}
                        passwordError = { this.state.passwordError }
                        onFocus ={ this.onFocus }
                        onBlur = {this.onBlur}
                        showLoginButton= { this.state.showLoginButton }/>

                      <SignInFooter/>
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
 * @param { object } state - holds signin state
 *
 * @return { object } props - returns mapped props from state
 */
export const mapStateToProps = state => ({
  signInErrorMessage: state.signInErrorMessage,
  authIsLoading: state.authIsLoading,
  authenticatedUser: state.authenticatedUser,
});
/**
 * @description maps dispatch events to props
 *
 * @param { object } dispatch - holds dispatchable action
 *
 * @return { object } props - returns mapped props from dispatch
 */
export const mapDispatchToProps = dispatch => ({
  actions: {
    userActions: bindActionCreators(userActions, dispatch),
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
