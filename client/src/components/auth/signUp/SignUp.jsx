/* eslint-disable no-useless-escape */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUpForm from './SignUpForm.jsx';
import SignUpFooter from './SignUpFooter.jsx';
import * as userActions from '../../../actions/userActions';
import Navigation from '../../navigation/Navigation.jsx';
import Loader from '../../loaders/Loader.jsx';
import Card from '../../common/Card.jsx';
import Section from '../../common/Section.jsx';
import Footer from '../../footer/Footer.jsx';
import '../../../../css/style.scss';

/** @description handles signing up a user
 *
 * @class
 * @extends component
 */
export class SignUp extends Component {
  /**
   * @constructor
   * @param { object } props
   */
  constructor(props) {
    super(props);
    this.registerUser = this.registerUser.bind(this);
    this.setUserDetails = this.setUserDetails.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this.state = {
      user: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      usernameError: '',
      emailError: '',
      passwordError: '',
      confirmPasswordError: '',
      showRegisterButton: true
    };
  }
  /**
   *
   * @param { event } event
   * @return { errorMessage } errorMessage
   */
  onBlur(event) {
    const { name } = event.target;
    const { value } = event.target;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    switch (name) {
      case 'username':
        if (!value) {
          this.setState({
            usernameError: 'Please enter your username',
            showRegisterButton: false
          });
        } else if (value.length < 3) {
          this.setState({
            usernameError: 'Username must be at least 3 characters',
            showRegisterButton: false
          });
        }
        break;
      case 'password':
        if (!value) {
          this.setState({
            passwordError: 'Please enter your password',
            showRegisterButton: false
          });
        } else if (value.length < 6) {
          this.setState({
            passwordError: 'Password must be at least 6 characters',
            showRegisterButton: false
          });
        }
        break;
      case 'email':
        if (!value) {
          this.setState({
            emailError: 'Please enter your email',
            showRegisterButton: false
          });
        } else if (!emailRegex.test(value)) {
          this.setState({
            emailError: 'Please enter a valid email',
            showRegisterButton: false
          });
        }
        break;
      default:
        break;
    }
  }
  /**
   *
   * @param { event } event
   * @return { errorMessage } errorMessage
   */
  onFocus(event) {
    const { name } = event.target;

    switch (name) {
      case 'username':
        this.setState({
          usernameError: '',
          showRegisterButton: true
        });
        break;
      case 'password':
        this.setState({
          passwordError: '',
          showRegisterButton: true
        });
        break;
      case 'email':
        this.setState({
          emailError: '',
          showRegisterButton: true
        });
        break;
      case 'confirmPassword':
        this.setState({
          passwordError: '',
          showRegisterButton: true
        });
        break;
      default:
        break;
    }
  }
  /**
   *
   * @param {object} event
   * @return { action } action
   */
  registerUser(event) {
    event.preventDefault();

    if (this.state.user.password !== this.state.user.confirmPassword) {
      return this.setState({
        passwordError: 'Confirm password does not match password'
      });
    }

    this.props.actions.userActions.signUpUser(this.state.user);
    return this.setState({ passwordError: '' });
  }
  /** @description sets user details onchange
   *
   * @param { event } event
   * @returns { state } state
   */
  setUserDetails(event) {
    const field = event.target.name;
    const { value } = event.target;
    this.state.user[field] = value;

    return this.setState({ user: this.state.user });
  }
  /**
   * @return { jsx } jsx
   */
  render() {
    const { authIsLoading } = this.props;
    const cardClass = 'card';
    const cardWrapperClass = 'col s12 m6 offset-m3';
    const sectionWrapperClass = 'section purple darken-3';
    const sectionHeaderClass = 'center white-text';
    const cardContentClass = 'card-content';
    const cardTitleClass = 'card-title center';

    return (
           <div>
             <header>
             <Navigation/>
                {
                   (authIsLoading) ? (<Loader/>) : ('')
                }
            </header>
             <main>
                <Section
                    wrapperClass={ sectionWrapperClass }
                    headerText = "PostIt Messaging"
                    headerClass = { sectionHeaderClass }>

                      <Card
                        cardClass = { cardClass }
                        wrapperClass={ cardWrapperClass }
                        cardContentClass ={ cardContentClass }
                        cardTitleClass = { cardTitleClass }
                        title='Register'>

                          <SignUpForm
                            user ={this.state.user}
                            onChange = { this.setUserDetails }
                            onSubmit = { this.registerUser }
                            passwordError={this.state.passwordError}
                            usernameError={this.state.usernameError}
                            emailError={this.state.emailError}
                            onBlur={this.onBlur}
                            onFocus={this.onFocus}
                            showRegisterButton={this.state.showRegisterButton}/>

                          <SignUpFooter/>
                      </Card>
                  </Section>
            </main>
            <footer>
                <Footer/>
            </footer>
         </div>
    );
  }
}
/**
 *
 * @param { state } state
 * @return { state } state
 */
const mapStateToProps = state => ({
  signUpSuccessMessage: state.signUpSuccessMessage,
  signUpErrorMessage: state.signUpErrorMessage,
  authenticatedUser: state.authenticatedUser,
  authIsLoading: state.authIsLoading
});
/**
 *
 * @param { dispatch } dispatch
 * @return { actions } actions
 */
const mapDispatchToProps = dispatch => ({
  actions: {
    userActions: bindActionCreators(userActions, dispatch),
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

