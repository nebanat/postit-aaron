import expect from 'expect';
import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import CreateGroup from '../../../src/components/group/CreateGroup.jsx';

let event;
/**
 * @return { mount } mount
 */
const setup = () => {
  const props = {
    groupisLoading: true,
    actions: {
      groupActions: {
        createGroup: jest.fn()
      }
    }
  };
  return mount(<CreateGroup {...props}/>);
};

describe('<CreateGroup/>', () => {
  it('renders a div with a class of container', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(16);
  });
  it('allows us to set props', () => {
    const wrapper = setup();
    expect(wrapper.find('CreateGroupModal').props().groupisLoading).toEqual(true);
  });
  it('calls componentDidMount', () => {
    sinon.spy(CreateGroup.prototype, 'componentDidMount');
    const wrapper = setup();
    expect(CreateGroup.prototype.componentDidMount.calledOnce).toEqual(true);
  });
  it('should call the setGroupDetail method', () => {
    const wrapper = setup();
    const handleChangeSpy = jest.spyOn(wrapper.instance(), 'setGroupDetail');
    event = {
      preventDefault: jest.fn(),
      target: {
        name: 'dotnet group',
        description: 'dotnet description'
      }
    };
    wrapper.instance().setGroupDetail(event);
    expect(handleChangeSpy).toHaveBeenCalledTimes(1);
  });
  it('should call the handleGroupSubmit method', () => {
    const wrapper = setup();
    const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'handleGroupSubmit');
    wrapper.instance().handleGroupSubmit(event);
    expect(handleSubmitSpy).toHaveBeenCalledTimes(1);
  });
});
