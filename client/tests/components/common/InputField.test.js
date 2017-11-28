import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import InputField from '../../../src/components/common/InputField.jsx';
/**
 * @return { shallow } shallow
 */
function setup() {
  const props = {
    wrapperClass: '',
    name: '',
    value: '',
    labelError: '',
    labelSuccess: '',
    onChange: () => {},
    type: '',
    label: '',
    placeholder: '',
    validate: '',
    required: ''
  };

  return shallow(<InputField {...props}/>);
}

describe('<InputField/>', () => {
  it('renders a div, input and a label', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('label').length).toBe(1);
  });
});
