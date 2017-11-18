import React from 'react';
import InputLine from '../common/InputLine.jsx';
import SelectField from '../common/SelectField.jsx';

/**
 * @param { * } object
 * @returns { jsx } jsx
 */
const NewMessageForm = ({
  message, onMessageChange, priorityValue,
  onSelectChange, onSubmit
}) => {
  const inputFieldWrapperClass = 'row';
  const selectWrapperClass = 'browser-default priority';
  const inputClassName = 'browser-default message-input';
  const priorityLevel = [
    { id: 1, name: 'Normal' },
    { id: 2, name: 'Urgent' },
    { id: 3, name: 'Critical' }];

  return (
        <div>
            <form onSubmit ={ onSubmit }>
                <InputLine
                  wrapperClass={ inputFieldWrapperClass }
                  name="message"
                  type="text"
                  validate= { inputClassName }
                  placeholder = "Enter your message here"
                  onChange = { onMessageChange }
                  value = { message.content }
                  required = "required">

                    <SelectField
                      id="priority"
                      name="priority"
                      className={ selectWrapperClass }
                      optionEntries={ priorityLevel }
                      required="required"
                      placeholder="Select priority"
                      onChange={ onSelectChange }
                      value={ priorityValue }/>


                  </InputLine>
                  <br/>
            </form>
        </div>

  );
};

export default NewMessageForm;
