import React from 'react';
import PropTypes from 'prop-types';


const NotFound = ({ header, body }) =>
  (
    <div className="col s6 offset-s2 not-found center-align">
          <h5>{ header} </h5>
          <p>{ body }</p>
    </div>

  );
// proptype validation
NotFound.propTypes = {
  header: PropTypes.string,
  body: PropTypes.string,
};

export default NotFound;
