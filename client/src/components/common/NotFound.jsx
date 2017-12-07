import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description defines NotFound component
 *
 * @param { props } props
 * @return { jsx } jsx
 */
const NotFound = ({ header, body }) =>
  (
    <div className="col s8 offset-s2 not-found center-align">
          <h4>{ header} </h4>
          <p>{ body }</p>
    </div>

  );
// proptype validation
NotFound.propTypes = {
  header: PropTypes.string,
  body: PropTypes.string,
};

export default NotFound;
