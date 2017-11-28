import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { ResetPassword } from '../../../src/components/auth/password/ResetPassword.jsx';

let event;
const correctPassword = { password: 'topper', cpassword: 'topper' };
// const inCorrectPassword = { password: 'topper', cpassword: 'topper123' };
const setup = (loading) => {
  const props = {
    actions: {
      passwordActions: {
        resetPassword: jest.fn()
      }
    },
    passwordIsLoading: loading,
    params: {
      resetToken: ''
    }

  };
  return shallow(<ResetPassword {...props} />);
};

describe('<ResetPassword/>', () => {
  it('should renders without crashing', () => {
    const wrapper = mount(<ResetPassword/>);
    expect(wrapper.find('Navigation').length).toEqual(1);
    expect(wrapper.find('Section').length).toEqual(1);
    expect(wrapper.find('ResetPasswordForm').length).toEqual(1);
    expect(wrapper.find('AuthFooter').length).toEqual(1);
  });
  it('should set user props', () => {
    const wrapper = shallow(<ResetPassword/>);
    wrapper.setState({ user: correctPassword });
    expect(wrapper.find('ResetPasswordForm').props().user).toEqual(correctPassword);
  });
  it('should call the setUserPassword method', () => {
    const wrapper = shallow(<ResetPassword/>);
    const handleChangeSpy = jest.spyOn(wrapper.instance(), 'setUserPassword');
    event = {
      preventDefault: jest.fn(),
      target: {
        password: 'topper',
        cpassword: 'topper'
      }
    };
    wrapper.instance().setUserPassword(event);
    expect(handleChangeSpy).toHaveBeenCalledTimes(1);
  });
  it('should call the handleSubmitPasswordReset method', () => {
    const wrapper = setup(false);
    const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'handleSubmitPasswordReset');
    wrapper.instance().handleSubmitPasswordReset(event);
    expect(handleSubmitSpy).toHaveBeenCalledTimes(1);
  });
  it('should set the confirmPasswordError state to password do not match', () => {
    const wrapper = setup(false);
    const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'handleSubmitPasswordReset');
    event = {
      preventDefault: jest.fn(),
      target: {
        password: 'topper234',
        cpassword: 'topper'
      }
    };
    wrapper.setState({ user: event.target });
    wrapper.instance().handleSubmitPasswordReset(event);
    expect(handleSubmitSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.state().confirmPasswordError).toEqual('Passwords do not match');
  });
  it('should set the confirmPasswordError state to password must be at leat 6 characters', () => {
    const wrapper = setup(false);
    const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'handleSubmitPasswordReset');
    event = {
      preventDefault: jest.fn(),
      target: {
        password: 'top',
        cpassword: 'top'
      }
    };
    wrapper.setState({ user: event.target });
    wrapper.instance().handleSubmitPasswordReset(event);
    expect(handleSubmitSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.state().confirmPasswordError).toEqual('Passwords must be at least 6 characters');
  });
  it('should call the resetPassword and set confirmPasswordError to empty string', () => {
    const wrapper = setup(false);
    const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'handleSubmitPasswordReset');
    event = {
      preventDefault: jest.fn(),
      target: {
        password: 'topper234',
        cpassword: 'topper234'
      }
    };
    wrapper.setState({ user: event.target });
    wrapper.instance().handleSubmitPasswordReset(event);
    expect(handleSubmitSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.state().confirmPasswordError).toEqual('');
  });
  it('should show a loader when passwordIsLoading is true', () => {
    const wrapper = setup(true);
    expect(wrapper.find('Loader').length).toEqual(1);
  });
});
