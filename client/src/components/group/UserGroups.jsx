import React, { Component } from 'react';
import SingleUserGroup from './SingleUserGroups.jsx';

/**
 * @class
 * @extends component
 */
class UserGroups extends Component {
  /**
   * @return { jsx } jsx
   */
  render() {
    return (
            <div>
                <h4>Your Groups</h4>

                <div className="row">
                    {
                        this.props.groups.map((group, i) =>
                            <SingleUserGroup key={i} i={i} group={group}/>)
                    }

                </div>


            </div>
    );
  }
}

export default UserGroups;
