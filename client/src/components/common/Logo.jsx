import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

/**
 * @description defines Logo component
 *
 * @param { props } props
 * @return { jsx } jsx
 */
const Logo = ({
  logoClassName, logoText
}) =>
  (
    <div className="container">
       <Link to="/"
        className={ logoClassName }>
          { logoText }
      </Link>

    </div>
   

  );
// proptype validation
Logo.propTypes = {
  logoClassName: PropTypes.string,
  logoText: PropTypes.string,
};

export default Logo;
