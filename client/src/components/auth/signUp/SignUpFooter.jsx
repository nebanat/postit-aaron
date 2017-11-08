import React from 'react';
import { Link } from 'react-router';

const SignUpFooter = () => (
    <div className='row'>
      <div className="col s8 offset-s2 center">
          <span>
            Have an account?
          </span>
          <Link to='/signin'> Sign In</Link>
      </div>
</div>
);

export default SignUpFooter;
