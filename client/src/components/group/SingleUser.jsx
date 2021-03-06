import React from 'react';

/**
 *@description displays a single user component
 *
 * @param { object } props - contains user's username
 *
 * @returns { jsx } jsx - renders a single user
 */
const SingleUser = ({ username, children }) => {
  const userString = username;
  const userFirstCharacter = userString.slice('')[0].toUpperCase();
  return (
    <div className="user">
        <div className="user-avatar">
          <h5 id="profile-letter" className="center-align white-text">
            { userFirstCharacter }
          </h5>
        </div>
        <div className="profile-name">
          <strong id="user-name">{ username }
          </strong>
          { children }
        </div>
    </div>
  );
};

export default SingleUser;
