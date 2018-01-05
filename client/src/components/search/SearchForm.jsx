import React from 'react';
import InputField from '../common/InputField.jsx';

/**
 *@description displays a search form
 *
 * @param { object } props contains search form properties and events
 *
 * @returns { jsx } jsx - renders search form
 */
const SearchForm = ({ onSearchChange, onSearch, search }) => {
  const inputFieldWrapperClass = 'input-field col s12';

  return (
        <div>
            <form>
                <div className='row'>
                  <InputField
                    wrapperClass={ inputFieldWrapperClass }
                    name="search"
                    type="text"
                    validate="validate"
                    required = "required"
                    placeholder="Search Users"
                    onChange={ onSearchChange }
                    onKeyUp = { onSearch }
                    value={ search }/>
                </div>
            </form>
        </div>

  );
};

export default SearchForm;
