import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import NewMessage from '../../../src/components/message/NewMessage.jsx';

let event;
let props;
/**
 * @return { shallow } shallow
 */
const setup = () => {
  props = {
    actions: {
      messageActions: {
        postMessage: jest.fn()
      }
    },
    groupid: 1
  };

  return mount(<NewMessage {...props}/>);
};

describe('<NewMessageForm', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(6);
    expect(wrapper.find('NewMessageForm').length).toBe(1);
  });
  it('should call the handleResetSubmit method', () => {
    const wrapper = setup();
    const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'handleOnSubmitMessage');
    event = {
      preventDefault: jest.fn(),
      target: {
        message: {
          value: 'Hello group'
        },
        priority: 1
      }
    };
    wrapper.setState({ message: event.target.message.value });
    wrapper.setState({ select: { priority: event.priority } });
    wrapper.instance().handleOnSubmitMessage(event);
    expect(handleSubmitSpy).toHaveBeenCalledTimes(1);
  });
  it('should call the onSelectChange and set select value', () => {
    const wrapper = setup();
    const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'onSelectChange');
    event = {
      preventDefault: jest.fn(),
      target: {
        value: 1,
      }
    };
    wrapper.instance().onSelectChange(event);
    expect(handleSubmitSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.state().select.priority).toEqual('1');
  });
  it('should return false if priority is not set', () => {
    const wrapper = setup();
    const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'validateSelection');
    const select = {
      priority: 1,
    };
    wrapper.instance().validateSelection(select.priority);
    expect(handleSubmitSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.state().select.priority).toEqual('1');
  });
  it('should call the onMessageChange and set select value', () => {
    const wrapper = setup();
    const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'onMessageChange');
    event = {
      preventDefault: jest.fn(),
      target: {
        value: 'hello group',
      }
    };
    wrapper.instance().onMessageChange(event);
    expect(handleSubmitSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.state().message).toEqual('hello group');
  });
});
