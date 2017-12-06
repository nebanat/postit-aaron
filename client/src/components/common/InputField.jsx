import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  wrapperClass, name, onChange, value, label, type,
  placeholder, validate, required, labelError, labelSuccess, maxlength,
  onKeyDown, onKeyUp
}) =>
  (
    <div
        className={ wrapperClass }>
        <input id = { name }
              name = { name }
              type = { type }
              className = { validate }
              placeholder = { placeholder }
              onChange = { onChange }
              value = { value }
              required = { required }
              onKeyDown ={ onKeyDown }
              onKeyUp = { onKeyUp }
              maxLength={ maxlength }/>
            <label
              data-error = { labelError }
              data-success = { labelSuccess } >
              { label }
            </label>
    </div>

  );
// proptype validation
InputField.propTypes = {
  wrapperClass: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  validate: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.string,
  labelError: PropTypes.string,
  labelSuccess: PropTypes.string,
  maxlength: PropTypes.string
};

export default InputField;
