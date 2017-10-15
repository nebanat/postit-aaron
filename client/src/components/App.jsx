import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import * as groupActions from '../actions/groupActions';
import Navigation from './navigation/Navigation.jsx';

/**
 * @class
 * @extends component
 */
class App extends Component {
  /**
   * @return { jsx } jsx
   */
  render() {
    return (
            <div>
                <Navigation/>
                { React.cloneElement(this.props.children, this.props) }
            </div>

    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };
/**
 *
 * @param {state} state
 * @return {state} state
 */
function mapStateToProps(state) {
  return {
    userSuccessMessage: state.userSuccessMessage,
    userErrorMessage: state.userErrorMessage,
    authenticatedUser: state.authenticatedUser,
    groups: state.groups,
    createGroupError: state.createGroupError,
    createGroupMessage: state.createGroupMessage
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
      groupActions: bindActionCreators(groupActions, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

