import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description defines button component
 *
 * @param { object } props
 *
 * @return { jsx } jsx
 */
const Button = ({
  id, wrapperClass, name, type, buttonClassName,
  label, onClick, disabled, children
}) =>
  (
    <div
        className = { wrapperClass }>
        <button
          id={ id }
          type = { type }
          name = {name}
          onClick = { onClick }
          disabled = { disabled }
          className ={ buttonClassName } >
          { children }
          { label }
        </button>
      </div>

  );
// proptype validation
Button.propTypes = {
  wrapperClass: PropTypes.string,
  label: PropTypes.string.isRequired,
  buttonClassName: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
