import React from 'react';
import Modal from '../common/Modal.jsx';
import SearchForm from './SearchForm.jsx';
import CircleLoader from '../loaders/CircleLoader.jsx';
import SingleUser from '../group/SingleUser.jsx';


const SearchModal = ({
  search, onSearchChange, onSearchSubmit, searchLoading, searchResult,
  searchErrorMessage
}) => {
  const modalButtonClass = 'purple darken-4 btn col s12 modal-trigger';
  const modalButtonText = 'Add users';

  return (
    <div>
      <div>
          <Modal
            modalButtonClass={ modalButtonClass }
            modalButtonText={ modalButtonText }>
            <p className=' green-text center-align'>Search only returns users not in this group</p>
            <SearchForm
              search={search}
              onSearchChange={ onSearchChange }
              onSearchSubmit={ onSearchSubmit}/>

              {
                searchResult.map((user, i) =>
                    <SingleUser key={i} i={i} user={ user }/>)
              }

              <div className='center-align'>
                {
                  (searchLoading) ? (<CircleLoader/>) : ''
                }
                <p className="red-text">{searchErrorMessage}</p>
              </div>
           </Modal>
      </div>
    </div>

  );
};

export default SearchModal;
