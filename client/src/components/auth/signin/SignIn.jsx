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
import AuthFooter from '../../footer/AuthFooter.jsx';

/**
 * @class
 */
class SignIn extends Component {
  /**
   *
   * @param {object} props
   *
   */
  constructor(props) {
    super(props);
    this.signInUser = this.signInUser.bind(this);
    this.setUserDetails = this.setUserDetails.bind(this);
    this.state = {
      user: {
        username: '',
        password: ''
      }
    };
  }
  /**
   *
   * @param { object } event
   * @return { object } method
   */
  signInUser(event) {
    event.preventDefault();
    this.props.actions.userActions.signInUser(this.state.user);
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
              <Navigation/>
              {
                (authIsLoading) ? (<Loader/>) : ('')
              }
               <Section wrapperClass={ sectionWrapperClass }
                    headerText = "PostIt Messaging"
                    headerClass = { sectionHeaderClass }>
                   <br/>
                    <Card
                      cardClass = { cardClass }
                      wrapperClass = { cardWrapperClass }
                      cardContentClass ={ cardContentClass }
                      cardTitleClass = { cardTitleClass }
                      title = "Sign In">

                      <SignInForm
                        user = { this.state.user }
                        onChange = { this.setUserDetails }
                        onSubmit = { this.signInUser }/>

                      <SignInFooter/>
                    </Card>
                </Section>
              <AuthFooter/>
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
    signInErrorMessage: state.signInErrorMessage,
    authIsLoading: state.authIsLoading,
    authenticatedUser: state.authenticatedUser,
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
      userActions: bindActionCreators(userActions, dispatch),
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
