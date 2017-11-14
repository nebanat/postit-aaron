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
  groupUsers, search, onSearchChange, onSearchSubmit, searchLoading,
  searchResult, searchErrorMessage
}) =>

  (
        <div>
            <Collapsible>
                <CollapsibleItem header='Members' icon='group'>
                    <GroupUsers groupUsers={ groupUsers } />
                </CollapsibleItem>
                <CollapsibleItem header='Add Member' icon='add_circle'>
                    <SearchModal
                        search ={search}
                        onSearchChange={onSearchChange}
                        onSearchSubmit={onSearchSubmit }
                        searchLoading={ searchLoading }
                        searchResult={searchResult}
                        searchErrorMessage={searchErrorMessage}/><br/>
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
