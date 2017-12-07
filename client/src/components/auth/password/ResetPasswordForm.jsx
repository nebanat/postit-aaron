import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../common/InputField.jsx';
import Button from '../../common/Button.jsx';

/**
 *@description displays reset password form
 *
 * @param { props } props
 * @returns { jsx } jsx
 */
const ResetPasswordForm = ({ user, onChange, onSubmit }) => {
  const wrapperClass = 'input-field col s8 offset-s2';
  const buttonWrapperClass = 'col s8 offset-s2 center';
  const buttonClassName = 'purple darken-4 btn col s12';

  return (
        <div>
            <form onSubmit = { onSubmit }>
                <div className='row'>
                    <InputField
                      wrapperClass = { wrapperClass }
                      name = "password"
                      type="password"
                      validate="validate"
                      onChange ={ onChange }
                      value = { user.password }
                      required="required"
                      placeholder="New Password"/>
                </div>
                <div className='row'>
                    <InputField
                      wrapperClass = { wrapperClass }
                      name = "cpassword"
                      type="password"
                      validate="validate"
                      onChange ={ onChange }
                      value = { user.cpassword }
                      required="required"
                      placeholder="Confirm Password"/>
                </div>
                <div className='row'>
                  <Button
                      wrapperClass = { buttonWrapperClass }
                      buttonClassName = { buttonClassName }
                      name="action"
                      type="submit"
                      label='Reset'/>
                </div>
              <br/>
            </form>
        </div>

  );
};
// proptype validation
ResetPasswordForm.propTypes = {
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ResetPasswordForm;
