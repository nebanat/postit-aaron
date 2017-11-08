import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import GroupUsers from './GroupUsers.jsx';


/**
 * @param { props } props
 * @return { jsx } jsx
 */
const GroupSideBar = props =>

  (
            <div>
                <Collapsible>
                    <CollapsibleItem header='Members' icon='group'>
                        <GroupUsers {...props}/>
                    </CollapsibleItem>
                    <CollapsibleItem header='Add Member' icon='add_circle'>

                    </CollapsibleItem>
                </Collapsible>
            </div>
  );


export default GroupSideBar;
