import React, { Component } from 'react';
import SideNav from '../navigation/SideNav.jsx';


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
              <div className="row">
                  <div className="col s3">
                      <SideNav/>
                  </div>
                  <div className="col s9">
                      <h1>Hello Dashboard</h1>
                  </div>
              </div>
            </div>

    );
  }
}


export default Dashboard;

