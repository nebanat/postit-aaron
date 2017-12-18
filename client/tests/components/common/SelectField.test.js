import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import SelectField from '../../../src/components/common/SelectField.jsx';
/**
 * @description shallow mounts the input field
 *
 * @return { * } null
 */
function setup() {
  const props = {
    id: 'select',
    wrapperClass: 'wrapper',
    optionEntries: [
      { id: '1', name: 'one' },
      { id: '2', name: 'two' }
    ],
    placeholder: 'placeholder',
    required: 'required'
  };
  return shallow(<SelectField {...props}/>);
}

describe('<SelectField/>', () => {
  it('renders a div,label and select', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('label').length).toBe(1);
    expect(wrapper.find('select').length).toBe(1);
  });
  it('allows us to pass props', () => {
    const wrapper = setup();
    expect(wrapper.find('select').props().placeholder).toEqual('placeholder');
    expect(wrapper.find('select').props().required).toEqual('required');
  });
});
