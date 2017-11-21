import React from 'react';
import NavItem from './NavItem.jsx';
import { logout } from '../../utils/authservice';

const Logout = ({ navItemClass, navText }) =>
  (
    <NavItem
       onClick={ () => logout() }
       navClassName={ navItemClass }
       navText ={ navText } />

  );

export default Logout;