import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../common/InputField.jsx';
import Button from '../../common/Button.jsx';

/**
 *@description displays password form
 *
 * @param { props } props
 * @returns { jsx } jsx
 */
const PasswordForm = ({
  user, onChange, onSubmit,
  onFocus, onBlur, emailError,
  showPasswordButton
}) => {
  const wrapperClass = 'input-field col s10 offset-s1';
  const buttonWrapperClass = 'col s8 offset-s2 center';
  const buttonClassName = 'purple darken-4 btn col s12';

  return (
        <div>
            <form onSubmit = { onSubmit }>
                <div className='row'>
                    <InputField
                      wrapperClass = { wrapperClass }
                      name = "email"
                      type="email"
                      validate="validate"
                      onChange ={ onChange }
                      value = { user.email }
                      required="required"
                      placeholder="Enter your email"
                      onFocus = { onFocus }
                      onBlur = { onBlur }
                      error = { emailError }/>
                </div>
                <div className='row'>
                  <Button
                      wrapperClass = { buttonWrapperClass }
                      buttonClassName = { buttonClassName }
                      id = "resetPassword"
                      name="action"
                      type="submit"
                      disabled={ showPasswordButton ? '' : 'disabled' }
                      label='Send Reset Link'/>
                </div>
            </form>
        </div>

  );
};
// proptype validation
PasswordForm.propTypes = {
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default PasswordForm;
