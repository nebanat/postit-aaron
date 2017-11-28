import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
// import TestUtils from 'react-addons-test-utils';
import SignInForm from '../../../src/components/auth/signin/SignInForm.jsx';
/**
 * @return { shallow } shallow
 */
function setup() {
  const props = {
    user: {},
    onChange: () => {},
    onSubmit: () => {}
  };

  return shallow(<SignInForm {...props}/>);
}

describe('<SignInForm', () => {
  it('renders form, two input field and a button', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('InputField').length).toBe(2);
    expect(wrapper.find('Button').length).toBe(1);
  });
  // checks it populates the inputfield value with user props
});
