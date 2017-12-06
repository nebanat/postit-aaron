import React from 'react';
import InputField from '../common/InputField.jsx';

/**
 * @param { * } object
 * @returns { jsx } jsx
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
