import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';
import * as groupActions from '../../actions/groupActions';
import * as messageActions from '../../actions/messageActions';
import Navigation from '../navigation/Navigation.jsx';

/**
 *@description HOC for dashboard components
 *
 * @class Dashboard
 *
 * @extends Component
 */
export class Dashboard extends Component {
  /**
   * @return { userGroups} userGroups - returns fetch user group action
   */
  componentDidMount() {
    this.props.actions.groupActions.fetchUserGroups();
  }
  /**
   * @return { jsx } jsx - renders dashboard and its children component
   */
  render() {
    return (
      <div>
          <Navigation/>

          <div className="container-fluid">
            <div className="row">
              <div className="col s12">
                  { React.cloneElement(this.props.children, this.props) }
              </div>
            </div>
        </div>
      </div>

    );
  }
}
/**
 * @description maps state to props
 *
 * @param { object } state - holds dashboard state
 *
 * @return { object } props - returns mapped props from state
 */
const mapStateToProps = state => ({
  authenticatedUser: state.authenticatedUser,
  groups: state.groups,
  messages: state.messages,
  groupUsers: state.groupUsers,
  groupIsLoading: state.groupIsLoading,
  messageIsLoading: state.messageIsLoading
});
/**
 * @description maps dispatch to props
 *
 * @param { object } dispatch - holds dispatchable actions
 *
 * @return { object } props - returns mapped props from dispatch
 */
const mapDispatchToProps = dispatch => ({
  actions: {
    messageActions: bindActionCreators(messageActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
    groupActions: bindActionCreators(groupActions, dispatch),
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
