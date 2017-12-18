import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from '../../../src/components/auth/signUp/SignUpForm.jsx';
/**
 * @return { shallow } shallow
 */
function setup() {
  const props = {
    user: {},
    onChange: () => {},
    onSubmit: () => {}
  };

  return shallow(<SignUpForm {...props}/>);
}

describe('<SignUpForm/>', () => {
  it('renders form, two input field and a button', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('InputField').length).toBe(4);
    expect(wrapper.find('Button').length).toBe(1);
  });
});
