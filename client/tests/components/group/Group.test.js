import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Group from '../../../src/components/group/Group.jsx';

let event;
/**
 * @param { loading } loading
 * @return { mount } mount
 */
const setup = (loading) => {
  const props = {
    groups: [{ name: 'super hero', description: 'description' }],
    messages: ['hello guys', 'another hello guys'],
    group: '',
    groupUsers: [
      { id: '1', name: 'user one' },
      { id: '2', name: 'user two' }
    ],
    actions: {
      messageActions: {
        fetchGroupMessages: () => {}
      },
      groupActions: {
        fetchGroupUsers: () => {},
        addUserToGroup: () => {}
      }
    },
    params: {
      id: ''
    },
    messageIsLoading: loading
  };
  return shallow(<Group {...props}/>);
};

describe('<Group/>', () => {
  it('renders without crashing', () => {
    const wrapper = setup(false);
    expect(wrapper.find('GroupSideBar').length).toBe(1);
  });
  it('renders loader if messageIsLoading is true', () => {
    const wrapper = setup(true);
    expect(wrapper.find('Loader').length).toBe(1);
  });
  it('renders SingleGroupMessage based on the number of messages props', () => {
    const wrapper = setup(false);
    expect(wrapper.find('SingleGroupMessage').length).toBe(2);
  });
  it('should call onSearchChange function', () => {
    const wrapper = setup(false);
    const handleChangeSpy = jest.spyOn(wrapper.instance(), 'onSearchChange');
    event = {
      preventDefault: jest.fn(),
      target: {
        value: 'aaron',
      }
    };
    wrapper.setState({ search: event.target.value });
    wrapper.instance().onSearchChange(event);
    expect(handleChangeSpy).toHaveBeenCalledTimes(1);
  });
});
