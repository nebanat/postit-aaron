import React from 'react';
import SingleUser from './SingleUser.jsx';

/**
 * @description shows group users
 *
 * @param { object } props - contains groupusers,component properties and events
 *
 * @return { jsx } jsx - shows group users
 */
const GroupUsers = ({
  groupUsers, showDelete, onMouseEnterDelete, onMouseLeaveDelete,
  handleRemoveMember, authUser
}) => {
  /**
   * @description shows remove button
   *
   * @param { integer } userId - contains user id
   * @param { integer } index - contains user index
   *
   * @return { jsx } jsx - show remove member button
   */
  const removeMemberButton = (userId, index) =>
    (<i onClick={() => handleRemoveMember(userId, index)}
      className="Tiny material-icons move_right">
        clear
    </i>);

  return (
      <div className="group-users">
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
