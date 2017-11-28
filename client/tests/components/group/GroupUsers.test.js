import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import GroupUsers from '../../../src/components/group/GroupUsers.jsx';

const setup = () => {
  const props = {
    groupUsers: [{ id: 1, username: 'testuser' }],
    authUser: { id: 2, username: 'testusertwo' },
    showDelete: true,
    handleRemoveMember: () => {}

  };
  return shallow(<GroupUsers {...props} />);
};

describe('<GroupUsers/>', () => {
  it('should renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper.find('SingleUser').length).toEqual(1);
    expect(wrapper.find('ul').length).toEqual(1);
  });
  it('should allow us set SingleUser props', () => {
    const wrapper = setup();
    expect(wrapper.find('SingleUser').props().username).toEqual('testuser');
  });
});
