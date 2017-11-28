import expect from 'expect';
import React from 'react';
import { mount } from 'enzyme';
import UserGroups from '../../../src/components/group/UserGroups.jsx';
/**
 * @return { mount } mount
 */
function setup() {
  const props = {
    groups: [
      { name: 'laudate', description: 'laudate description' },
      { name: 'dominos', description: 'dominos description' }
    ]
  };
  return mount(<UserGroups {...props}/>);
}
describe('<UserGroups/>', () => {
  it('renders CreateGroup component', () => {
    const wrapper = setup();
    expect(wrapper.find('CreateGroup').length).toBe(1);
  });
  it('renders SingleUserGroup component based on the number of groups in the props', () => {
    const wrapper = setup();
    expect(wrapper.find('SingleUserGroup').length).toBe(2);
  });
});
