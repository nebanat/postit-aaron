import React from 'react';
import InputField from '../../common/InputField.jsx';
import Button from '../../common/Button.jsx';

/**
 *@description displays signup form
 *
 * @param { props } props
 * @returns { jsx } jsx
 */
const SignUpForm = ({
  user, onChange, onSubmit,
  usernameError, passwordError, emailError,
  onBlur, onFocus, showRegisterButton
}) => {
  const wrapperClass = 'input-field col s10 offset-s1';
  const buttonWrapperClass = 'col s6 offset-s3 center';
  const buttonClassName = 'purple darken-4 btn col s12';

  return (
        <div>
            <form onSubmit ={ onSubmit }>
                <div className='row'>
                  <InputField
                    wrapperClass={ wrapperClass }
                    name="username"
                    type="text"
                    validate="validate"
                    label = "Username"
                    onChange = { onChange }
                    value = { user.username }
                    required = "required"
                    error={ usernameError }
                    onBlur={ onBlur }
                    onFocus={ onFocus }/>
                  <InputField
                      wrapperClass = { wrapperClass }
                      name = "email"
                      type="email"
                      validate="validate"
                      onChange ={ onChange }
                      value = { user.email }
                      required="required"
                      label = "Email"
                      error={ emailError }
                      onBlur={ onBlur }
                      onFocus={ onFocus }/>
                  </div>
                  <div className='row'>
                    <InputField
                        wrapperClass = { wrapperClass }
                        name = "password"
                        type="password"
                        validate="validate"
                        onChange ={ onChange }
                        value = { user.password }
                        required="required"
                        error = { passwordError }
                        label = "Password"
                        onBlur={ onBlur }
                        onFocus={ onFocus }/>
                    <InputField
                      wrapperClass = { wrapperClass }
                      name = "confirmPassword"
                      type="password"
                      validate="validate"
                      onChange ={ onChange }
                      value = { user.confirmPassword }
                      required="required"
                      label = "Confirm Password"
                      onBlur={ onBlur }
                      onFocus={ onFocus }/>
                </div>
                <div className='row'>
                  <Button
                    wrapperClass={ buttonWrapperClass }
                    buttonClassName={ buttonClassName }
                    disabled={ showRegisterButton ? '' : 'disabled' }
                    id='register'
                    name="action"
                    type="submit"
                    label='Register'/>
                </div>
            </form>
        </div>

  );
};

export default SignUpForm;
