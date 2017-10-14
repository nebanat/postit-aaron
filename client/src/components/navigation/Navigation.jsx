import React from 'react';
import { Link } from 'react-router';
// import { isLoggedIn, logout } from '../utils/AuthService'
// import SearchUser from '../dashboard/search/user/SearchUser'

/**
 * @class
 * @extends react.component
 */
class Navigation extends React.Component {
  /**
   * @return {jsx} jsx
   */
  render() {
    return (
            <div className="navbar-fixed">

            {/* <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!" className="black-text">Profile</a></li>
                <li className="divider"></li> */}
                {/* <li><Link className="black-text" onClick={() => logout()} to="/login">Logout</Link></li> */}
            {/* </ul> */}
                <nav className='white'>

                    <div className="nav-wrapper">
                        <div className="row">


                            <div className="col s8 push-s4">

                                <ul id="nav-mobile"
                                  className="right hide-on-med-and-down">
                                    <li className="black-text">

                                    </li>
                                    <li>
                                        <Link to="/"
                                          className="black-text"
                                          activeClassName = "active">
                                          Home
                                        </Link>
                                    </li>
                                    {/* <li>
                                    {
                                        (isLoggedIn()) ?
                                        (
                                          <Link to="/dashboard"
                                            className="black-text">
                                        Dashboard
                                        </Link>
                                        ):
                                        ('')
                                    }
                                    </li> */}
                                    {/* <li>
                                    {
                                        (isLoggedIn()) ?
                                        (
                                          <Link
                                            className="btn waves-effect waves-light white black-text"
                                            to="/new/group">
                                                New Group
                                          </Link>):('')
                                    }
                                    </li> */}
                                    <li>
                                      <Link
                                          className="black-text"
                                          activeClassName = "orange white-text"
                                          to="/signin">
                                          Log In
                                      </Link>
                                   </li>
                                    <li>
                                    {
                                        <Link
                                          className="btn white black-text"
                                          activeClassName = "active"
                                          to="/signup">
                                          Get Started
                                        </Link>
                                    }
                                    </li>
                                    {/* <li>
                                    {
                                        (isLoggedIn()) ?
                                        (<a
                                            className="dropdown-button black-text"
                                            href="#!"
                                            data-activates="dropdown1">
                                            { this.props.authUser ? this.props.authUser.username : ''}
                                            <i className="material-icons right">arrow_drop_down</i></a>) : ('')
                                    }
                                    </li> */}
                                </ul>

                            </div>
                        </div>


                    </div>
                </nav>
            </div>

    );
  }
}
export default Navigation;
