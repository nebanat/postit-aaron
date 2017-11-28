import React from 'react';
import Modal from '../common/Modal.jsx';
import SearchForm from './SearchForm.jsx';
import CircleLoader from '../loaders/CircleLoader.jsx';
import SingleUser from '../group/SingleUser.jsx';
import Button from '../common/Button.jsx';


const SearchModal = ({
  search, onSearchChange, searchLoading, searchResult,
  searchErrorMessage, onAddUser
}) => {
  const modalButtonClass = 'purple darken-4 btn col s12 modal-trigger';
  const modalButtonText = 'Add users';
  const buttonClassName = 'btn-small btn-flat';
  const buttonWrapperClass = 'move_right';

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
              onSearchChange={ onSearchChange }/>

              <ul>
                {
                  searchResult.map((user, index) =>
                    <SingleUser key={index} i={index} username = { user.username }>
                      <Button wrapperClass={ buttonWrapperClass }
                        buttonClassName={ buttonClassName }
                        onClick= {() => onAddUser(user.id) }
                        label="add"/>
                    </SingleUser>)
                }
              </ul>


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
