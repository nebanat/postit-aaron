import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import PropTypes from 'prop-types';
import GroupUsers from './GroupUsers.jsx';
import SearchModal from '../search/SearchModal.jsx';

/**
 * @description renders group side bar
 *
 * @param { object } props
 *
 * @return { jsx } jsx
 */
const GroupSideBar = ({
  groupUsers, search, onSearchChange, searchLoading,
  searchResult, searchErrorMessage, onAddUser, showDelete,
  onMouseEnterDelete, onMouseLeaveDelete, handleRemoveMember, authUser,
  searchPages, searchCount, currentPaginatePage, onPaginateClick, onSearch
}) => (
        <div>
             <Collapsible>
              <CollapsibleItem header='Add Member' icon='add_circle'>
                <SearchModal
                    search ={ search }
                    onSearchChange={ onSearchChange }
                    searchLoading={ searchLoading }
                    searchResult={ searchResult }
                    searchErrorMessage={ searchErrorMessage }
                    onAddUser={ onAddUser }
                    searchPages={ searchPages }
                    searchCount={ searchCount }
                    onSearch = { onSearch }
                    currentPaginatePage={ currentPaginatePage }
                    onPaginateClick={ onPaginateClick }/><br/>
                </CollapsibleItem>
                <CollapsibleItem header='Members' icon='group'>
                  <GroupUsers groupUsers={ groupUsers }
                      showDelete={ showDelete }
                      onMouseEnterDelete={ onMouseEnterDelete }
                      onMouseLeaveDelete={ onMouseLeaveDelete }
                      handleRemoveMember={ handleRemoveMember }
                      authUser={ authUser }/>
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
