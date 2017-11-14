import React from 'react';
import PropTypes from 'prop-types';


const Button = ({
  wrapperClass, name, type, buttonClassName, label, onClick
}) =>
  (
    <div
        className = { wrapperClass }>
        <button
          type = { type }
          name = {name}
          onClick = { onClick }
          className ={ buttonClassName } >
          { label }
        </button>
      </div>

  );
// proptype validation
Button.propTypes = {
  wrapperClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  buttonClassName: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
