import React from 'react';
import SingleUser from './SingleUser.jsx';

/**
 * @param { groupUsers } groupUsers array
 * @return { jsx } jsx
 */
const GroupUsers = ({
  groupUsers, showDelete, onMouseEnterDelete, onMouseLeaveDelete,
  handleRemoveMember, authUser
}) => {
  /**
   *
   * @param {userId} userId
   * @param {index} index
   * @return {jsx} jsx
   */
  const removeMemberButton = (userId, index) =>
    (<i onClick={() => handleRemoveMember(userId, index)}
      className="Tiny material-icons move_right">
        clear
    </i>);

  return (
      <div>
        <div className="row">
          <div className="col s12">
            <ul className="collection">
              {
                groupUsers.map((user, index) =>
                <div onMouseEnter={ onMouseEnterDelete }
                      onMouseLeave={ onMouseLeaveDelete }
                      key={index} i={index}>
                    <SingleUser username = { user.username }>
                      {
                        (showDelete && user.id !== authUser.id
                          && user.id !== groupUsers[0].id) ?
                          removeMemberButton(user.id, index)
                        : ''
                      }
                      {
                        (user.id === authUser.id) ?
                        (<span className="small-text grey-text"> You</span>)
                         : ''
                      }
                      {
                        (user.id === groupUsers[0].id) ?
                        (<span className="small-text green-text"> admin

                        </span>) : ''
                      }
                  </SingleUser>
                </div>)
              }
            </ul>
          </div>
        </div>

      </div>
  );
};
export default GroupUsers;
