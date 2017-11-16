import React, { Component } from 'react';
import Jumbotron from './Jumbotron.jsx';
import Navigation from '../../navigation/Navigation.jsx';

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
                <Navigation/>
                {/* jumbotron component */}
                <Jumbotron/>
            </div>
    );
  }
}

export default Home;
