import React from 'react';
import InputField from '../common/InputField.jsx';
import Button from '../common/Button.jsx';
import SelectField from '../common/SelectField.jsx';

/**
 * @param { * } object
 * @returns { jsx } jsx
 */
const NewMessageForm = ({
  message, groups, onMessageChange, priorityValue, groupValue,
  onSelectChange, onSubmit
}) => {
  const buttonWrapperClass = 'col m3';
  const buttonClassName = 'purple darken-4 btn col s12';
  const inputFieldWrapperClass = 'input-field col s12';
  const selectWrapperClass = 'browser-default';
  const priorityLevel = [
    { id: 1, name: 'Normal' },
    { id: 2, name: 'Urgent' },
    { id: 3, name: 'Critical' }];

  return (
        <div>
            <form onSubmit ={ onSubmit }>
                <div className='row'>
                  <InputField
                    wrapperClass={ inputFieldWrapperClass }
                    name="message"
                    type="text"
                    validate="validate"
                    label = "Content"
                    onChange = { onMessageChange }
                    value = { message.content }
                    required = "required"/>
                </div>
                <div className="row">
                  <SelectField
                    id="group"
                    name="group"
                    className={ selectWrapperClass }
                    optionEntries = { groups }
                    label="Select Group"
                    required="required"
                    placeholder="select group"
                    onChange={ onSelectChange }
                    value={ groupValue }/>
                </div>
                <div className="row">
                  <SelectField
                    id="priority"
                    name="priority"
                    className={ selectWrapperClass }
                    optionEntries={ priorityLevel }
                    label="Priority"
                    required="required"
                    placeholder="Select priority"
                    onChange={ onSelectChange }
                    value={ priorityValue }/>
                </div>
                <div className='row'>
                  <Button
                    wrapperClass={ buttonWrapperClass }
                    buttonClassName={ buttonClassName }
                    name="action"
                    type="submit"
                    label="Post It"/>
                </div>
              <br/>
            </form>
        </div>

  );
};

export default NewMessageForm;
