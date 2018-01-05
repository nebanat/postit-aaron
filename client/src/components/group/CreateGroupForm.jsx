import React from 'react';
import InputField from '../common/InputField.jsx';
import TextField from '../common/TextField.jsx';
import Button from '../common/Button.jsx';

/**
 * @description displays create group form
 *
 * @param { object } props - contains group details and event based actions
 *
 * @returns { jsx } jsx - renders create group form component
 */
const CreateGroupForm = ({
  group, onChange, onSubmit,
  onBlur, onFocus, groupError,
  showGroupButton
}) => {
  const textFieldWrapperClass = 'input-field col s12';
  const textFieldClass = 'materialize-textarea';
  const buttonWrapperClass = 'col m3';
  const buttonClassName = 'purple darken-4 btn col s12';
  const inputFieldWrapperClass = 'input-field col s12';

  return (
        <div>
            <form onSubmit ={ onSubmit }>
                <div className='row'>
                  <InputField
                    wrapperClass={ inputFieldWrapperClass }
                    name="name"
                    type="text"
                    validate="validate"
                    label = "Name"
                    onChange = { onChange }
                    value = { group.name }
                    onBlur = { onBlur }
                    onFocus = { onFocus }
                    error = { groupError }
                    required = "required"/>
                </div>
                <div className='row'>
                  <TextField
                    wrapperClass = { textFieldWrapperClass }
                    className = { textFieldClass }
                    name = "description"
                    onChange ={ onChange }
                    value = { group.description }
                    maxlength = "140"
                    label = "Description (optional 140 characters max)"/>
                </div>
                <div className='row'>
                  <Button
                    id='create-group'
                    wrapperClass={ buttonWrapperClass }
                    buttonClassName={ buttonClassName }
                    disabled={ showGroupButton ? '' : 'disabled' }
                    name="action"
                    type="submit"
                    label="Create Group"/>
                </div>
            </form>
        </div>

  );
};

export default CreateGroupForm;
