import React, { Component } from 'react';
import { Link } from 'react-router';
// import '../../../css/style.css';

/**
 * @class
 * @extends component
 */
class SideNav extends Component {
  /**
   * @return {jsx} jsx
   */
  render() {
    return (
      <div>
          <ul id="nav-mobile" className="side-nav fixed purple darken-4">
              <h3 className="white-text">PostIt</h3>
                  <li className="bold">
                      <Link
                        to="/dashboard" className="white-text">
                        Dashboard
                      </Link>
                      <Link
                        to="/groups"
                        className="white-text">
                        Your Groups
                      </Link>
                      <Link
                        to="/group/new"
                        className="white-text">
                        New Group
                      </Link>
                      <Link to="/test" className="white-text">New Message</Link>
                      <a href='#'
                        className="btn-small waves-effect waves-light orange white-text">
                        Go Back
                      </a>
                    </li>
                  </ul>
                <a href="#" data-activates="slide-out"
                    className="button-collapse top-nav waves-effect waves-light circle hide-on-large-only">
                    <i className="material-icons">menu</i>
                 </a>
          </div>
    );
  }
}

export default SideNav;
