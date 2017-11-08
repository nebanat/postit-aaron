import React from 'react';

/**
 * @param { user } userObject
 * @returns {jsx} jsx
 */
const SingleUser = ({ user }) =>
  (
            <div>
               <li className="collection-item">
                    <i className="tiny material-icons">account_circle</i>
                        <span>{user.username}</span><br/>
                </li>
            </div>
  );
export default SingleUser;
