import React, { Component } from 'react';

/**
 * @class
 * @extends component
 */
class Instructions extends Component {
  /**
   * @returns {jsx} jsx
   */
  render() {
    return (
      <div>
      <div className='section'>
          <div className="row">
            <div className="col s12 m4">
                <div className="icon-block">
                    <h2 className="center black-text">
                        <i className="large material-icons">
                          email
                        </i>
                    </h2>
                    <h5 className="center">Create Group</h5>
                    <p className="black-text">
                      Create groups and invite friends to connect
                    </p>
                </div>
          </div>
          <div className="col s12 m4">
              <div className="icon-block">
                  <h2 className="center black-text">
                    <i className="large material-icons">
                      add_a_photo
                    </i>
                  </h2>
                  <h5 className="center">Post Message</h5>
                  <p className="black-text">
                    Send and receive messages from your groups
                  </p>
              </div>
          </div>
          <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center black-text">
                  <i className="large material-icons">
                     equalizer
                  </i>
                </h2>
                <h5 className="center">Add Users</h5>
                <p className="black-text">
                  Add and connect with friends on your group
                </p>
             </div>
          </div>
        </div>
      </div>

      </div>

    );
  }
}
export default Instructions;

