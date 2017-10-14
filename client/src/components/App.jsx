import React, { Component } from 'react';
import Navigation from './navigation/Navigation.jsx';

/**
 * @class
 * @extends component
 */
class App extends Component {
  /**
   * @return { jsx } jsx
   */
  render() {
    return (
            <div>
                <Navigation/>
                { React.cloneElement(this.props.children, this.props) }
            </div>

    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };
export default App;
