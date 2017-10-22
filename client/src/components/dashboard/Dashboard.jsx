import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SideNav from '../navigation/SideNav.jsx';
import * as userActions from '../../actions/userActions';
import * as groupActions from '../../actions/groupActions';
import * as messageActions from '../../actions/messageActions';
import Navigation from '../navigation/Navigation.jsx';


/**
 * @class
 * @extends component
 */
class Dashboard extends Component {
  /**
   * @return {userData} userData
   */
  componentWillMount() {
    // loads user groups
    this.props.actions.groupActions.fetchUserGroups();
  }
  /**
   * @return { jsx } jsx
   */
  render() {
    return (
            <div>
               <Navigation/>
               <div className="row">
                  <div className="col s3">
                      <SideNav/>
                  </div>
                  <div className="col s9">
                      { React.cloneElement(this.props.children, this.props) }
                  </div>
              </div>
            </div>

    );
  }
}
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
    createGroupMessage: state.createGroupMessage,
    fetchUserGroupsError: state.fetchUserGroupsError,
    postSuccessMessage: state.postSuccessMessage,
    postFailureMessage: state.postFailureMessage,
    messages: state.messages,
    fetchMessagesError: state.fetchMessagesError,
    groupUsers: state.groupUsers,
    fetchGroupUsersError: state.fetchGroupUsersError
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
      messageActions: bindActionCreators(messageActions, dispatch),
      userActions: bindActionCreators(userActions, dispatch),
      groupActions: bindActionCreators(groupActions, dispatch),
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
