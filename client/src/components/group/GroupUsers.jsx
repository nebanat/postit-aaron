import React, { Component } from 'react';
import SingleUser from './SingleUser.jsx';
/**
 * @extends component
 */
class GroupUsers extends Component {
  /**
   * @returns {jsx} jsx
   */
  render() {
    return (
            <div>
                <div className="row">
                    <div className="col s12">
                        <ul className="collection">
                            {
                                this.props.groupUsers.map((user, i) =>
                                    <SingleUser key={i} i={i} user={user}/>)
                            }
                        </ul>

                    </div>
                </div>

            </div>
    );
  }
}

export default GroupUsers;
