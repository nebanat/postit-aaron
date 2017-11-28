import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
// import TestUtils from 'react-addons-test-utils';
import NewMessageForm from '../../../src/components/message/NewMessageForm.jsx';
/**
 * @return { shallow } shallow
 */
function setup() {
  const props = {
    message: {},
    onMessageChange: () => {},
    onSelectChange: () => {},
    onSubmit: () => {},
    priorityValue: ''
  };

  return shallow(<NewMessageForm {...props}/>);
}

describe('<NewMessageForm', () => {
  it('renders div,form, InputLine and SelectField', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('InputLine').length).toBe(1);
    expect(wrapper.find('SelectField').length).toBe(1);
  });
  // checks it populates the inputfield value with user props
});
