import React, { Component } from 'react';
// import PropTypes from 'prop-types';

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
                { React.cloneElement(this.props.children, this.props) }
            </div>

    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default App;
