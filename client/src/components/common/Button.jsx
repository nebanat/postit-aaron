import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  wrapperClass, name, type, buttonClassName, label
}) =>
  (
    <div
        className = { wrapperClass }>
        <button
          type = { type }
          name = {name}
          className ={ buttonClassName } >
          { label }
        </button>
      </div>

  );
// proptype validation
Button.propTypes = {
  wrapperClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  buttonClassName: PropTypes.string.isRequired,
};

export default Button;
