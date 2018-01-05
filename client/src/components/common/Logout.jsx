import React from 'react';
import NavItem from './NavItem.jsx';
import { logout } from '../../utils/authservice';

/**
 * @description defines Logout component
 *
 * @param { object } props - contains Logout properties
 *
 * @return { jsx } jsx - renders Logout
 */
const Logout = ({ navItemClass, navText }) =>
  (
    <NavItem
       id="logout"
       onClick={ () => logout() }
       navClassName={ navItemClass }
       navText ={ navText } />

  );

export default Logout;
