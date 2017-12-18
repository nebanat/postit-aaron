import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description defines InputLine component
 *
 * @param { object } props
 *
 * @return { jsx } jsx
 */
const InputLine = ({
  wrapperClass, name, onChange, value, type, children,
  placeholder, validate, required, maxlength
}) =>
  (
    <div
        className={ wrapperClass }>
        <div className="col s9">
          <input id = { name }
              name = { name }
              type = { type }
              className = { validate }
              placeholder = { placeholder }
              onChange = { onChange }
              value = { value }
              required = { required }
              maxLength = { maxlength }
              />
        </div>
        <div className="col s3">
          { children }
        </div>
      </div>

  );
// proptype validation
InputLine.propTypes = {
  wrapperClass: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  validate: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.string,
  maxlength: PropTypes.string

};

export default InputLine;
