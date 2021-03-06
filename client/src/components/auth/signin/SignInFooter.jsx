import React from 'react';
import { Link } from 'react-router';
/**
 * @description displays sign in footer
 *
 * @returns { jsx } jsx  - renders signin footer component
 */
const SignInFooter = () => (
  <div className='row'>
    <div className="col s8 offset-s2">
        <Link
            to='/password'
            className="left">
            <i className="material-icons left">lock
            </i>Forgot Password
        </Link>
        <Link to='/signup' className="right">
          Sign Up
        </Link>
    </div>
</div>
);

export default SignInFooter;
