import React from 'react';
import Modal from '../common/Modal.jsx';
import SearchForm from './SearchForm.jsx';
import CircleLoader from '../loaders/CircleLoader.jsx';
import SingleUser from '../group/SingleUser.jsx';
import Button from '../common/Button.jsx';
import Pagination from '../common/Pagination.jsx';

/**
 *@description displays search modal
 *
 * @param { props } props
 * @return { jsx } jsx
 */
const SearchModal = ({
  search, onSearchChange, searchLoading, searchResult,
  searchErrorMessage, onAddUser, searchPages, searchCount,
  currentPaginatePage, onPaginateClick, onSearch
}) => {
  const modalButtonClass = 'purple darken-4 btn col s12 modal-trigger';
  const modalButtonText = 'Add users';
  const buttonClassName = 'btn-small btn-flat';
  const buttonWrapperClass = 'move_right';
  /**
   * @description shows search result count
   *
   * @return { jsx } jsx
   */
  const showSearchDetails = () => (
      <div className="grey-text left-align">
        Results: { searchCount } pages: { searchPages }
      </div>
  );
  /**
   * @description displays search result
   *
   * @returns { jsx } jsx
   */
  const showSearchResult = () => (
    searchResult.map((user, index) =>
      <SingleUser key={index} i={index} username = { user.username }>
        <Button wrapperClass={ buttonWrapperClass }
          buttonClassName={ buttonClassName }
          onClick= {() => onAddUser(user.id) }
          label="add"/>
      </SingleUser>)
  );

  return (
    <div>
      <div>
          <Modal
            modalButtonClass={ modalButtonClass }
            modalButtonText={ modalButtonText }>
            <p className=' green-text center-align'>
                Search only returns users not in this group
            </p>
            <SearchForm
              search={search}
              onSearchChange={ onSearchChange }
              onSearch = { onSearch }/>

              { search ? showSearchDetails() : '' }

              <ul>
                { search ? showSearchResult() : '' }
              </ul>


              <div className='center-align'>
                {
                  (searchLoading) ? (<CircleLoader/>) : ''
                }

                <p className="red-text">{ searchErrorMessage }</p>

               {
                (search && searchResult.length > 0) ?
               <Pagination pageNumber = { searchPages }
                  currentPaginatePage = { currentPaginatePage }
                  onPaginateClick = { onPaginateClick }/> : '' }
              </div>
           </Modal>
      </div>
    </div>

  );
};

export default SearchModal;
