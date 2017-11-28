import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import GroupHeader from '../../../src/components/group/GroupHeader.jsx';
/**
 * @return { shallow } shallow
 */
const setup = () => {
  const props = {
    headerText: '',
    onDeleteGroup: () => {},
    onExitGroup: () => {},
  };

  return shallow(<GroupHeader {...props}/>);
};

describe('<GroupHeader/>', () => {
  it('renders without crashing ', () => {
    const wrapper = setup();
    expect(wrapper.find('Link').length).toBe(1);
    expect(wrapper.find('Button').length).toBe(2);
  });
});
