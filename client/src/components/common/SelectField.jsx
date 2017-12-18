import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description defines SelectField component
 *
 * @param { object } props
 *
 * @return { jsx } jsx
 */
const SelectField = ({
  id, wrapperClass, name, className, onChange, optionEntries,
  label, placeholder, value, required

}) =>
  (
    <div className={ wrapperClass }>
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
            {
              optionEntries.map((entry, index) =>
                <option value={entry.value} key={ index }>
                  {
                    entry.name
                  }</option>)
            }
        </select>

      </div>

  );
// proptype validation
SelectField.propTypes = {
  id: PropTypes.string,
  wrapperClass: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  optionEntries: PropTypes.array,
  onChange: PropTypes.func,
  label: PropTypes.string,
  required: PropTypes.string,
  name: PropTypes.string
};

export default SelectField;
