import React from 'react';

/**
 * @param { user } userObject
 * @returns {jsx} jsx
 */
const SingleUser = ({ user }) => {
  const userString = user.username;
  const userFirstCharacter = userString.slice('')[0].toUpperCase();
  return (
    <div>
        <div>
        <div className="user-avatar">
            <h5 id="profile-letter" className="center-align white-text">
              { userFirstCharacter }
            </h5>
          </div>
          <p className="profile-name"><strong>{user.username}</strong></p>
        </div>
    </div>
  );
}
  
export default SingleUser;
