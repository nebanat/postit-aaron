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
 * @class
 */
export class Password extends Component {
  /**
   * @constructor
   * @param {props} props
   */
  constructor(props) {
    super(props);
    this.handleResetOnSubmit = this.handleResetOnSubmit.bind(this);
    this.setUserEmail = this.setUserEmail.bind(this);
    this.state = {
      user: {
        email: ''
      }
    };
  }
  /**
   *
   * @param {event} event
   * @returns {event} method
   */
  handleResetOnSubmit(event) {
    event.preventDefault();

    this.props.actions.passwordActions.sendResetPassword(this.state.user.email);
  }
  /**
   * @param { event } event
   * @returns { state } state
   */
  setUserEmail(event) {
    const field = event.target.name;
    const { value } = event.target;
    this.state.user[field] = value;

    return this.setState({ user: this.state.user });
  }
  /**
   * @returns {jsx} jsx
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
                              onChange = { this.setUserEmail }/>

                      </Card>
              </Section>
              <Footer/>
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
  sendResetSuccessMessage: state.sendResetSuccessMessage,
  sendResetFailureMessage: state.sendResetFailureMessage,
  passwordIsLoading: state.passwordIsLoading
});
/**
 *
 * @param { dispatch } dispatch
 * @return { object } actions
 */
const mapDispatchToProps = dispatch => ({
  actions: {
    passwordActions: bindActionCreators(passwordActions, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Password);

