import React, { Component } from 'react';
import SingleUserGroup from './SingleUserGroups.jsx';
import CreateGroup from './CreateGroup.jsx';

/**
 * @class
 * @extends Component
 */
class UserGroups extends Component {
  /**
   * @return { jsx } jsx
   */
  render() {
    const { groups } = this.props;
    return (
      <div>
          <div className="row">
              <div className="col s6">
                <h4 className="center-align">Your Groups</h4>
              </div>
              <div className="col s6">
                <br/>
                <CreateGroup {...this.props}/>
              </div>
          </div>
          {
            this.props.groups.length ?
            '' :
            <div className="col s6 offset-s2 not-found center-align">
                <h5>You have no groups</h5>
                <p>Please create a group</p>
            </div>
          }

          <div className="row">
              {
                  groups.map((group, i) =>
                      <SingleUserGroup key={i} i={i} group={group}/>)
              }

          </div>


      </div>
    );
  }
}

export default UserGroups;
