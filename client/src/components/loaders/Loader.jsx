import React, { Component } from 'react';
/**
 * @class
 * @extends component
 */
class Loader extends Component {
  /**
   * @return { jsx } jsx
   */
  render() {
    return (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
    );
  }
}

export default Loader;
