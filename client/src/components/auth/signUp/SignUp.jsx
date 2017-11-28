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
import '../../../../css/style.css';
/**
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
    this.state = {
      user: {
        username: '',
        email: '',
        password: '',
        cpassword: '',
      },
      passwordError: ''
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
      return this.setState({
        passwordError: 'Confirm password does not match password'
      });
    }
    if (this.state.user.password.length < 6) {
      return this.setState({ passwordError: 'Passwords must be at least 6 characters' });
    }

    this.props.actions.userActions.signUpUser(this.state.user);
    return this.setState({ passwordError: '' });
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
                              { this.state.passwordError }
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
 * @return { object } actions
 */
const mapDispatchToProps = dispatch => ({
  actions: {
    userActions: bindActionCreators(userActions, dispatch),
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

