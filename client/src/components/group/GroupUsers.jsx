import React from 'react';
import SingleUser from './SingleUser.jsx';
import { getAccessId } from '../../utils/authservice';
/**
 * @param { groupUsers } groupUsers array
 * @return { jsx } jsx
 */
const GroupUsers = ({
  groupUsers, showDelete, onMouseEnterDelete, onMouseLeaveDelete,
  handleRemoveMember
}) => {
  const authUserId = getAccessId();
  return (
      <div>
          <div className="row">
              <div className="col s12">
                  <ul className="collection">
                      {
                          groupUsers.map((user, index) =>
                          <div onMouseEnter={onMouseEnterDelete}
                                onMouseLeave={onMouseLeaveDelete}
                                key={index} i={index}>
                              <SingleUser username = { user.username }>
                              {
                                (showDelete && user.id !== authUserId && user.id !== groupUsers[0].id) ?
                                (<i onClick={() => handleRemoveMember(user.id, index)}
                                    className="Tiny material-icons move_right">
                                  clear
                                </i>)
                                : ''
                              }
                              {
                                (user.id === authUserId) ?
                                (<span className="small-text grey-text"> You</span>) : ''
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
