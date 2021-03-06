import React, { Component } from 'react';
import SingleGroup from './SingleGroup.jsx';
import CreateGroup from './CreateGroup.jsx';
import NotFound from '../common/NotFound.jsx';

/**
 *@description displays all user groups
 *
 * @class UserGroups
 *
 * @extends Component
 */
class UserGroups extends Component {
  /**
   * @constructor
   *
   * @param { props } props - contains user groups,compoonent properties
   */
  constructor(props) {
    super(props);
    this.showNoGroupMessage = this.showNoGroupMessage.bind(this);
  }
  /**
   * @description show no group message
   *
   * @return {jsx} jsx - renders no group message info
   */
  showNoGroupMessage() {
    return (
      <div className="col s6 offset-s2 not-found center-align">
          <h5>You have no groups</h5>
          <p>Please create a group</p>
      </div>
    );
  }
  /**
   * @description displays user groups
   *
   * @return { jsx } jsx - renders user groups
   */
  render() {
    const { groups } = this.props;
    const NotFoundMsgHeader = 'You have no groups';
    const NotFoundMsgBody = 'Please create a group';
    return (
      <div>
          <div className="row">
              <div className="col s6">
                <h4 className="center-align">Your Groups</h4>
              </div>
              <div className="col s6 center-align">
                <br/>
                <CreateGroup {...this.props}/>
              </div>
          </div>
          {
            this.props.groups.length ?
            '' :
            <NotFound
            header={ NotFoundMsgHeader }
            body={ NotFoundMsgBody }
            />
          }

          <div className="row">
              {
                  groups.map((group, i) =>
                      <SingleGroup key={i} i={i} group={group}/>)
              }

          </div>


      </div>
    );
  }
}

export default UserGroups;
