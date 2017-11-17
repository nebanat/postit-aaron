import React from 'react';
import SingleUser from './SingleUser.jsx';
/**
 * @param { groupUsers } groupUsers array
 * @return { jsx } jsx
 */
const GroupUsers = ({ groupUsers }) =>

  (
        <div>
            <div className="row">
                <div className="col s12">
                    <ul className="collection">
                        {
                            groupUsers.map((user, i) =>
                            <SingleUser key={i} i={i} username = { user.username }>
                                </SingleUser>)
                        }
                    </ul>
                </div>
            </div>

        </div>
  );


export default GroupUsers;
