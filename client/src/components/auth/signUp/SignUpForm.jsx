import React from 'react';
import InputField from '../../common/InputField.jsx';
import Button from '../../common/Button.jsx';

/**
 * @param { * } object
 * @returns { jsx } jsx
 */
const SignUpForm = ({ user, onChange, onSubmit }) => {
  const wrapperSplitClass = 'input-field col s6';
  const wrapperClass = 'input-field col s12';
  const buttonWrapperClass = 'col s10 offset-s1 center';
  const buttonClassName = 'purple darken-4 btn col s12';

  return (
        <div>
            <form onSubmit ={ onSubmit }>
                <div className='row'>
                  <InputField
                    wrapperClass={ wrapperSplitClass }
                    name="username"
                    type="text"
                    validate="validate"
                    label = "Username"
                    onChange = { onChange }
                    value = { user.username }
                    required = "required"/>
                  <InputField
                      wrapperClass = { wrapperSplitClass }
                      name = "email"
                      type="email"
                      validate="validate"
                      onChange ={ onChange }
                      value = { user.email }
                      required="required"
                      label = "Email"
                      labelError="Enter a valid Email"
                      labelSuccess="Correct"/>
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
                    <InputField
                      wrapperClass = { wrapperClass }
                      name = "cpassword"
                      type="password"
                      validate="validate"
                      onChange ={ onChange }
                      value = { user.cpassword }
                      required="required"
                      label = "Confirm Password"/>
                </div>
                <div className='row'>
                  <Button
                    wrapperClass={ buttonWrapperClass }
                    buttonClassName={ buttonClassName }
                    name="action"
                    type="submit"
                    label='Register'/>
                </div>
              <br/>
            </form>
        </div>

  );
};

export default SignUpForm;
