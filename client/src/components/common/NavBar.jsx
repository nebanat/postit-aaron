import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description defines NavBar component
 *
 * @param { object } props  - contains NavBar properties
 *
 * @return { jsx } jsx - displays NavBar component
 */
const NavBar = ({
  navBarClassName, navBarWrapperClass, children
}) =>
  (
      <nav className={ navBarClassName }>
         <div className={navBarWrapperClass}>
              { children }
         </div>
      </nav>

  );
// proptype validation
NavBar.propTypes = {
  navBarClassName: PropTypes.string,
  navBarWrapperClass: PropTypes.string,
};

export default NavBar;
