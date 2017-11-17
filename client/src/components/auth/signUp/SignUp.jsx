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
import AuthFooter from '../../footer/AuthFooter.jsx';
import '../../../../css/style.css';
/**
 * @class
 * @extends component
 */
class SignUp extends Component {
  /**
   * @constructor
   * @param { object } props
   */
  constructor(props) {
    super(props);
    this.registerUser = this.registerUser.bind(this);
    this.setUserDetails = this.setUserDetails.bind(this);
    this.state = {
      user: {
        username: '',
        email: '',
        password: '',
        cpassword: '',
      },
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

    if (this.state.user.password !== this.state.user.cpassword) {
      this.setState({
        passwordMatchError: 'Confirm password does not match password'
      });
      return;
    }
    this.props.actions.userActions.signUpUser(this.state.user);
  }
  /**
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
                    <br/>
                      <Card
                        cardClass = { cardClass }
                        wrapperClass={ cardWrapperClass }
                        cardContentClass ={ cardContentClass }
                        cardTitleClass = { cardTitleClass }
                        title='Register'>

                            <p className='red-text center col s12'>
                              { this.state.passwordMatchError }
                              </p><br/>
                            <br/>

                          <SignUpForm
                              user ={this.state.user}
                              onChange = { this.setUserDetails }
                              onSubmit = { this.registerUser }/>
                          <SignUpFooter/>
                      </Card>
                  </Section>
            </main>
            <footer>
                <AuthFooter/>
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
function mapStateToProps(state) {
  return {
    signUpSuccessMessage: state.signUpSuccessMessage,
    signUpErrorMessage: state.signUpErrorMessage,
    authenticatedUser: state.authenticatedUser,
    authIsLoading: state.authIsLoading
  };
}
/**
 *
 * @param { dispatch } dispatch
 * @return { object } actions
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      userActions: bindActionCreators(userActions, dispatch),
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

