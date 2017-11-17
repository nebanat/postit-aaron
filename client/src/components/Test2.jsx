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
                    <div className="col s10 message">
                        <div className="user clear-top">
                          <div className="user-avatar">
                            <h5 id="profile-letter" className="center-align white-text">
                              A
                            </h5>
                          </div>
                          <div className="profile-name"><strong>Aaron</strong>
                            <span id='message-date'>1 hr ago</span>
                          </div>
                      </div>
                      <p id='message'>Rutrum commodo velit mollis lectus cubilia posuere
                        dapibus potenti sem ac conubia hymenaeos arcu etiam mattis
                        egestas taciti in feugiat.</p>
                        <span className="new badge red darken-4"
                          data-badge-caption="critical">
                      </span>
                    </div>
                  </div>
                </li>
                
                <li>
                  <div className="row">
                    <br/>
                    <div className="col s10 message">
                        <div className="user clear-top">
                          <div className="user-avatar">
                            <h5 id="profile-letter" className="center-align white-text">
                              A
                            </h5>
                          </div>
                          <div className="profile-name"><strong>Aaron</strong>
                              <span id='message-date'>2 hrs ago</span>
                          </div>
                      </div>
                      <p id='message'>Rutrum commodo velit mollis lectus cubilia posuere
                        dapibus potenti sem ac conubia hymenaeos arcu etiam mattis
                        egestas taciti in feugiat.</p>
                        <span className="new badge green darken-4"
                            data-badge-caption="normal">
                        </span>
                    </div>
                </div>
                </li>
                <li>
                  <div className="row">
                    <br/>
                    <div className="col s10 message">
                        <div className="user clear-top">
                          <div className="user-avatar">
                            <h5 id="profile-letter" className="center-align white-text">
                              A
                            </h5>
                          </div>
                          <div className="profile-name"><strong>Aaron</strong>
                              <span id='message-date'>2 hrs ago</span>
                          </div>
                      </div>
                      <p id='message'>Rutrum commodo velit mollis lectus cubilia posuere
                        dapibus potenti sem ac conubia hymenaeos arcu etiam mattis
                        egestas taciti in feugiat.</p>
                        <span className="new badge green darken-4"
                            data-badge-caption="normal">
                        </span>
                    </div>
                </div>
                </li>
                <li>
                  <div className="row">
                    <br/>
                    <div className="col s10 message">
                        <div className="user clear-top">
                          <div className="user-avatar">
                            <h5 id="profile-letter" className="center-align white-text">
                              A
                            </h5>
                          </div>
                          <div className="profile-name"><strong>Aaron</strong>
                              <span id='message-date'>2 hrs ago</span>
                          </div>
                      </div>
                      <p id='message'>Rutrum commodo velit mollis lectus cubilia posuere
                        dapibus potenti sem ac conubia hymenaeos arcu etiam mattis
                        egestas taciti in feugiat.</p>
                        <span className="new badge green darken-4"
                            data-badge-caption="normal">
                        </span>
                    </div>
                </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col s12">
              <div class="messaging-area">
                This div element has position: fixed;
              </div>
          </div>
        </div>
    </div>
    );
  }
}


export default Test2;

