import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description defines TextField component
 *
 * @param { props } props
 * @return { jsx } jsx
 */
const TextField = ({
  wrapperClass, name, className, onChange, value, label, maxlength
}) =>
  (
    <div
        className={ wrapperClass }>
        <textarea id = { name }
            className = { className }
            name = { name }
            onChange = { onChange }
            value = { value }
            maxLength={ maxlength }>
        </textarea>
          <label>
            { label }
          </label>
      </div>

  );
// proptype validation
TextField.propTypes = {
  wrapperClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  maxlength: PropTypes.string
};

export default TextField;
