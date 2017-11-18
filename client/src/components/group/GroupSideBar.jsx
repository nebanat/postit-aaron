import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import PropTypes from 'prop-types';
import GroupUsers from './GroupUsers.jsx';
import SearchModal from '../search/SearchModal.jsx';
import Button from '../common/Button.jsx';

/**
 * @param { props } props
 * @return { jsx } jsx
 */
const GroupSideBar = ({
  groupUsers, search, onSearchChange, searchLoading,
  searchResult, searchErrorMessage, onAddUser, onDeleteGroup, authUser
}) => {
  const deleteButtonClass = 'btn col s12 red';
  /**
   * @returns { jsx } jsx
   */
  const showDeleteButton = () => (
    <CollapsibleItem header='Delete Group' icon='delete_forever'>
      <Button
        buttonClassName={ deleteButtonClass }
        onClick = { onDeleteGroup }
        label =' Delete Group'>
        <i class="material-icons">delete_forever</i>

      </Button><br/>
    </CollapsibleItem>
  );
  return (
        <div>
            <Collapsible>
                <CollapsibleItem header='Members' icon='group'>
                    <GroupUsers groupUsers={ groupUsers } />
                </CollapsibleItem>
                <CollapsibleItem header='Add Member' icon='add_circle'>
                    <SearchModal
                        search ={search}
                        onSearchChange={onSearchChange}
                        searchLoading={ searchLoading }
                        searchResult={searchResult}
                        searchErrorMessage={searchErrorMessage}
                        onAddUser={onAddUser}/><br/>
                </CollapsibleItem>
                { showDeleteButton() }
            </Collapsible>
        </div>
  );
};

// proptype validation
GroupUsers.propTypes = {
  onSearchChange: PropTypes.func,
  onSearchSubmit: PropTypes.func
};

export default GroupSideBar;
