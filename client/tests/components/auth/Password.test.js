import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { Password } from '../../../src/components/auth/password/Password.jsx';


const user = { email: 'testemail@gmail.com' };
let event;

const setup = (loading) => {
  const props = {
    actions: {
      passwordActions: {
        sendResetPassword: jest.fn()
      }
    },
    passwordIsLoading: loading

  };
  return shallow(<Password {...props} />);
};
describe('<Password/>', () => {
  it('should render navigation,section,passwordform and a footer', () => {
    const wrapper = mount(<Password/>);
    expect(wrapper.find('Navigation').length).toEqual(1);
    expect(wrapper.find('Section').length).toEqual(1);
    expect(wrapper.find('PasswordForm').length).toEqual(1);
    expect(wrapper.find('AuthFooter').length).toEqual(1);
  });
  it('should set user props', () => {
    const wrapper = shallow(<Password/>);
    wrapper.setState({ user });
    expect(wrapper.find('PasswordForm').props().user).toEqual(user);
  });
  it('should call the setUserEmail method', () => {
    const wrapper = shallow(<Password/>);
    const handleChangeSpy = jest.spyOn(wrapper.instance(), 'setUserEmail');
    event = {
      preventDefault: jest.fn(),
      target: {
        email: 'user@email.com'
      }
    };
    wrapper.instance().setUserEmail(event);
    expect(handleChangeSpy).toHaveBeenCalledTimes(1);
  });
  it('should call the handleResetSubmit method', () => {
    const wrapper = setup(false);
    const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'handleResetOnSubmit');
    wrapper.instance().handleResetOnSubmit(event);
    expect(handleSubmitSpy).toHaveBeenCalledTimes(1);
  });
  it('should show a loader when passwordIsLoading is true', () => {
    const wrapper = setup(true);
    expect(wrapper.find('Loader').length).toEqual(1);
  });
});
