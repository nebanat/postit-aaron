import React from 'react';
import PropTypes from 'prop-types';

const SelectField = ({
  id, wrapperClass, name, className, onChange, optionEntries,
  label, placeholder, value, required

}) =>
  (
    <div
        className={ wrapperClass }>
          <label>
             { label }
          </label>
        <select id = { id }
            name = { name }
            className = { className }
            placeholder = { placeholder }
            onChange = { onChange }
            required = { required }
            value = { value }
            >
            <option defaultValue>{placeholder}</option>
            {
              optionEntries.map((entry, i) =>
                <option value={entry.id} key={i}>
                  {
                    entry.name
                  }</option>)
              }
        </select>

      </div>

  );
// proptype validation
SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  optionEntries: PropTypes.array,
  onChange: PropTypes.func,
  label: PropTypes.string,
  required: PropTypes.string,
  name: PropTypes.string
};

export default SelectField;
