import React from 'react';
import PropTypes from 'prop-types';


const Logo = ({
  logoClassName, logoText
}) =>
  (
    <a href="/"
      className={ logoClassName }>
      { logoText }
    </a>

  );
// proptype validation
Logo.propTypes = {
  logoClassName: PropTypes.string,
  logoText: PropTypes.string,
};

export default Logo;
