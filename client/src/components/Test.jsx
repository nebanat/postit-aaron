import React, { Component } from 'react';


/**
 * @class
 */
class Test extends Component {
  /**
   * @returns {jsx} jsx
   */
  render() {
    return (
         <div>
             <footer className="page-footer purple darken-4 white-text">
              <div className="container ">
                <div className="row">
                  <div className="col l6 s12">
                    <h5 className="white-text">PostIt Messaging</h5>
                    <p className="white-text text-lighten-4">
                      Connect with friends
                      </p>
                  </div>
                </div>
              </div>
              <div className="footer-copyright white-text">
                <div className="container">
                © 2014 Copyright Text
                <a className="white-text text-lighten-4 right" href="#!"></a>
                </div>
              </div>
           </footer>
           </div>
    );
  }
}


export default Test;

