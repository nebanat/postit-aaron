import expect from 'expect';
import React from 'react';
import { mount } from 'enzyme';
import { SignIn, mapStateToProps } from '../../../src/components/auth/signin/SignIn.jsx';

let event;
const state = {
  signInErrorMessage: '',
  authIsLoading: false,
  authenticatedUser: {},
};
/**
 * @param { loading } loading
 * @return { mount } mount
 */
const setup = (loading) => {
  const props = {
    authIsLoading: loading,
    actions: {
      userActions: {
        signInUser: jest.fn()
      }
    }
  };

  return mount(<SignIn {...props}/>);
};

describe('<SignIn', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper.find('Navigation').length).toBe(1);
    expect(wrapper.find('Section').length).toBe(1);
    expect(wrapper.find('Card').length).toBe(1);
    expect(wrapper.find('SignInForm').length).toBe(1);
    expect(wrapper.find('SignInFooter').length).toBe(1);
  });
  it('render Loader when authLoading is true', () => {
    const wrapper = setup(true);
    expect(wrapper.find('Loader').length).toBe(1);
  });
  it('should call the setUserDetails method', () => {
    const wrapper = setup(true);
    const handleChangeSpy = jest.spyOn(wrapper.instance(), 'setUserDetails');
    event = {
      preventDefault: jest.fn(),
      target: {
        username: 'testuser',
        password: 'topper234'
      }
    };
    wrapper.instance().setUserDetails(event);
    expect(handleChangeSpy).toHaveBeenCalledTimes(1);
  });
  it('should call the signInUser method', () => {
    const wrapper = setup(false);
    const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'signInUser');
    wrapper.instance().signInUser(event);
    expect(handleSubmitSpy).toHaveBeenCalledTimes(1);
  });
  it('should return the right state object', () => {
    const expected = state;
    expect(mapStateToProps(state)).toEqual(expected);
  });
});
