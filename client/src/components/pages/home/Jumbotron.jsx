import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 * @class
 * @extends component
 */
class Jumbotron extends Component {
  /**
   * @returns {jsx} jsx
   */
  render() {
    return (
      <div>
          <div className='section purple darken-4'>
            <div className="home-container">
                <div className='container '>

                    <h2 className="header center white-text home_message">
                      Welcome to PostIt Messaging
                    </h2>
                </div>
                <div className='row center'>
                    <h5 className="header col s12 white-text">
                          A modern Group Messaging for you and your group
                    </h5>

                </div>
                <div className='row center'>
                    <Link to='/signup'
                        className="btn-large waves-effect waves-light orange">
                          Get Started
                    </Link>
                </div>
            </div>
          </div>
       </div>

    );
  }
}
export default Jumbotron;

