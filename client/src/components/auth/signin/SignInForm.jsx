import React from 'react';
import InputField from '../../common/InputField.jsx';
import Button from '../../common/Button.jsx';

/**
 * @param { * } object
 * @returns { jsx } jsx
 */
const SignInForm = ({ user, onChange, onSubmit }) => {
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
                    required = "required"/>
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
                        label = "Password"/>
                </div>
                <div className='row'>
                    <Button
                      wrapperClass={ buttonWrapperClass }
                      buttonClassName={ buttonClassName }
                      name="action"
                      type="submit"
                      label='Login'/>
                </div>
              <br/>
            </form>
        </div>

  );
};

export default SignInForm;
