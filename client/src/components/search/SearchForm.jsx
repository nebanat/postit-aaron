import React from 'react';
import InputField from '../common/InputField.jsx';

/**
 * @param { * } object
 * @returns { jsx } jsx
 */
const SearchForm = ({ onSearchChange, search, onSearchSubmit }) => {
  const inputFieldWrapperClass = 'input-field col s12';

  return (
        <div>
            <form onSubmit={ onSearchSubmit }>
                <div className='row'>
                  <InputField
                    wrapperClass={ inputFieldWrapperClass }
                    name="message"
                    type="text"
                    validate="validate"
                    required = "required"
                    placeholder="Search Users"
                    onChange={ onSearchChange }
                    value={search}/>
                </div>
                
              <br/>
            </form>
        </div>

  );
};

export default SearchForm;
