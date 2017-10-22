import React, { Component } from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import GroupUsers from './GroupUsers.jsx';


/**
 * @class
 * @extends component
 */
class GroupSideBar extends Component {
  /**
   * @return { jsx } jsx
   */
  render() {
    return (
            <div>
                <Collapsible>
                    <CollapsibleItem header='Members' icon='group'>
                        <GroupUsers {...this.props}/>
                    </CollapsibleItem>
                    <CollapsibleItem header='Add Member' icon='add_circle'>
                        
                    </CollapsibleItem>
                </Collapsible>
            </div>
    );
  }
}

export default GroupSideBar;
