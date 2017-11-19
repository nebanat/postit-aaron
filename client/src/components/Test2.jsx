import React, { Component } from 'react';

/**
 * @class
 */
class Test2 extends Component {
  /**
   * @returns {jsx} jsx
   */
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s10 sticky">
            <button className=" btn-flat white-text exit-group">
                <i className=" small material-icons">exit_to_app</i>
                  Exit Group
              </button>
            <h5>Laravel Group</h5>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="overflowTest">
              <ul>
                <li>
                    <div className="row">
                    <div className="col s10 delete-area">
                        <div className="user clear-top">
                          <div className="user-avatar">
                            <h5 id="profile-letter" className="center-align white-text">
                              A
                            </h5>
                          </div>
                          <div className="profile-name"><strong>Aaron</strong>
                            <span><button className="btn-flat">
                              <i className="material-icons">clear</i>
                              </button></span>
                          </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
          <div class="messaging-area">
              <div class="row">
                <div class="col s8">
                  <input className="browser-default message-input" placeholder="Enter your message" id="first_name" type="text" />
                </div>
                <div class="col s4">

                </div>
            </div>
          </div>
    </div>
    );
  }
}


export default Test2;

