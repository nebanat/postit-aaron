import React from 'react';
import PropTypes from 'prop-types';


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
