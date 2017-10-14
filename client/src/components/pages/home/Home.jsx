import React, { Component } from 'react';
import Jumbotron from './Jumbotron.jsx';
import Instuctions from './Instructions.jsx';


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
                {/* jumbotron component */}
                <Jumbotron/>
                <div className="container">
                    <br/>
              {/* instuction sectiom */}
                <Instuctions/>
                </div>
             </div>
    );
  }
}

export default Home;
