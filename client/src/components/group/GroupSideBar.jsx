import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import PropTypes from 'prop-types';
import GroupUsers from './GroupUsers.jsx';
import SearchModal from '../search/SearchModal.jsx';

/**
 * @param { props } props
 * @return { jsx } jsx
 */
const GroupSideBar = ({
  groupUsers, search, onSearchChange, searchLoading,
  searchResult, searchErrorMessage, onAddUser, showDelete,
  onMouseEnterDelete, onMouseLeaveDelete, handleRemoveMember, authUser
}) => (
        <div>
             <Collapsible>
              <CollapsibleItem header='Add Member' icon='add_circle'>
                    <SearchModal
                        search ={search}
                        onSearchChange={onSearchChange}
                        searchLoading={ searchLoading }
                        searchResult={searchResult}
                        searchErrorMessage={searchErrorMessage}
                        onAddUser={onAddUser}/><br/>
                </CollapsibleItem>
                <CollapsibleItem header='Members' icon='group'>
                    <GroupUsers groupUsers={ groupUsers }
                                showDelete={ showDelete }
                                onMouseEnterDelete={onMouseEnterDelete}
                                onMouseLeaveDelete={onMouseLeaveDelete}
                                handleRemoveMember={handleRemoveMember}
                                authUser={ authUser }

                                />
                </CollapsibleItem>
          </Collapsible>
        </div>
);

// proptype validation
GroupUsers.propTypes = {
  onSearchChange: PropTypes.func,
  onSearchSubmit: PropTypes.func
};

export default GroupSideBar;
