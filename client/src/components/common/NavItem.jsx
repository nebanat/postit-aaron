import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const NavItem = ({
  id, navLink, navClassName, navActiveClass, navText, onClick
}) =>
  (
      <li>
        <Link id={ id }
          to={ navLink }
          className={ navClassName }
          onClick = { onClick }
          activeClassName = { navActiveClass }>
          { navText }
        </Link>
      </li>

  );
// proptype validation
NavItem.propTypes = {
  navLink: PropTypes.string,
  navClassName: PropTypes.string,
  navActiveClass: PropTypes.string,
  navText: PropTypes.string
};

export default NavItem;
