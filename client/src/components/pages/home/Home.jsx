import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 * @class
 * @extends component
 */
class Home extends Component {
  /**
   * @return {jsx} jsx
   */
  render() {
    return (
            <div>
                <div className='section purple darken-4'>
                    <div className='container'>
                        <br/><br/><br/>
                        <h2 className="header center white-text">
                          PostIt-Group Messaging
                        </h2>
                    </div>
                    <div className='row center'>
                        <h5 className="header col s12 white-text">
                            A modern Group Messaging for you and your group
                        </h5>
                        <br/><br/><br/><br/>
                    </div>
                    <div className='row center'>
                        <Link to='/signup'
                          className="btn-large waves-effect waves-light orange">
                            Get Started
                        </Link>
                        <br/><br/><br/><br/>
                    </div>
                </div>
                <div className="container">
                    <br/>
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
                                      Lorem ipsum dolor sit amet,
                                      consectetur adipiscing elit.
                                      Cras nec dictum est. Quisque pellentesque,
                                      diam quis maximus vulputate,
                                      nunc diam porttitor odio,
                                      non molestie nisi nulla sed magna
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
                                      Lorem ipsum dolor sit amet,
                                      consectetur adipiscing elit.
                                      Cras nec dictum est. Quisque pellentesque,
                                      diam quis maximus vulputate,
                                      nunc diam porttitor odio,
                                      non molestie nisi nulla sed magna
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
                                      Lorem ipsum dolor sit amet,
                                      consectetur adipiscing elit.
                                      Cras nec dictum est. Quisque pellentesque,
                                      diam quis maximus vulputate,
                                      nunc diam porttitor odio,non molestie nisi nulla sed magna
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
    );
  }
}

export default Home;
