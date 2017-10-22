import React, { Component } from 'react';

/**
 * @class
 * @extends component
 */
class SingleUser extends Component {
  /**
   * @returns { jsx } jsx
   */
  render() {
    const { user } = this.props;
    return (
            <div>
               <li className="collection-item">
                    <i className="tiny material-icons">account_circle</i>
                        <span>{user.username}</span><br/>
                </li>
            </div>
    );
  }
}

export default SingleUser;
