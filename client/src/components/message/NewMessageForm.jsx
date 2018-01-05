import React from 'react';
import InputLine from '../common/InputLine.jsx';
import SelectField from '../common/SelectField.jsx';

/**
 *@description shows new message form
 *
 * @param { object } props - contains new message form component properties
 *
 * @returns { jsx } jsx - renders new message form
 */
const NewMessageForm = ({
  message, onMessageChange, priorityValue,
  onSelectChange, onSubmit
}) => {
  const inputFieldWrapperClass = 'row';
  const selectWrapperClass = 'browser-default priority';
  const inputClassName = 'browser-default message-input';
  const priorityLevel = [
    { name: 'Normal', value: 'normal' },
    { name: 'Urgent', value: 'urgent' },
    { name: 'Critical', value: 'critical' }];

  return (
        <div>
            <form id='new-message-form' onSubmit ={ onSubmit }>
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
                      
                      onChange={ onSelectChange }
                      value={ priorityValue }/>


                  </InputLine>
                  <br/>
            </form>
        </div>

  );
};

export default NewMessageForm;
