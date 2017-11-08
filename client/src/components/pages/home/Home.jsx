import React, { Component } from 'react';
import Jumbotron from './Jumbotron.jsx';
import Instuctions from './Instructions.jsx';
import Navigation from '../../navigation/Navigation.jsx';
import Footer from '../../footer/Footer.jsx';
import Test from '../../Test.jsx';


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
                <div className="container">
                    <br/>
              {/* instuction section */}
                <Instuctions/>
                </div>
                <Footer/>
                {/* <Test/> */}
             </div>
    );
  }
}

export default Home;
