import React from 'react';
import SingleUserGroup from './SingleUserGroups.jsx';

/**
 * @param { groups } groupsarray
 * @return { jsx } jsx
 */
const UserGroups = ({ groups }) =>
  (
            <div>
                <h4>Your Groups</h4>

                <div className="row">
                    {
                        groups.map((group, i) =>
                            <SingleUserGroup key={i} i={i} group={group}/>)
                    }

                </div>


            </div>
  );


export default UserGroups;
