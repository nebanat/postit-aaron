import React from 'react';
import InputField from '../../common/InputField.jsx';
import Button from '../../common/Button.jsx';

/** @description displays sign in form
 *
 * @param { object } props - contains user details and event based actions
 *
 * @returns { jsx } jsx  - renders signin form component
 */
const SignInForm = ({
  user, onChange, onSubmit, usernameError, passwordError,
  onBlur, onFocus, showLoginButton
}) => {
  const wrapperClass = 'input-field col s10 offset-s1';
  const buttonWrapperClass = 'col s10 offset-s1 center';
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
                    error = { usernameError }
                    onBlur={ onBlur }
                    onFocus = { onFocus }/>
                </div>
                <div className='row'>
                    <InputField
                        wrapperClass = { wrapperClass }
                        name = "password"
                        type="password"
                        validate="validate"
                        onChange ={ onChange }
                        value = { user.password }
                        error = { passwordError }
                        onBlur={ onBlur }
                        onFocus = { onFocus }
                        required="required"
                        label = "Password"/>
                </div>
                <div className='row'>
                    <Button
                      wrapperClass={ buttonWrapperClass }
                      buttonClassName={ buttonClassName }
                      id='login'
                      name="action"
                      type="submit"
                      label='Login'
                      disabled={ showLoginButton ? '' : 'disabled' }/>
                </div>
             </form>
        </div>

  );
};

export default SignInForm;
