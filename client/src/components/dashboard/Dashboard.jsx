import React, { Component } from 'react';


/**
 * @class
 * @extends component
 */
class Dashboard extends Component {
  /**
   * @return { jsx } jsx
   */
  render() {
    return (
            <div>
               <h2>Welcome {this.props.authenticatedUser.username}</h2>
            </div>

    );
  }
}


export default Dashboard;

