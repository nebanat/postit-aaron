import React from 'react';
import { Link } from 'react-router';

/**
 * @class Jumbotron
 *
 * @extends component
 */
const Jumbotron = () =>
  /**
   * @description displays home page jumbotron
   *
   * @returns {jsx} jsx
   */

  (
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
                          A modern Group Messaging for you and your friends
                    </h5>

                </div>
                <div className='row center'>
                    <Link to='/signup' id="sign-up"
                        className="btn-large waves-effect waves-light orange">
                          Get Started
                    </Link>
                </div>
            </div>
          </div>
       </div>

  );
export default Jumbotron;

