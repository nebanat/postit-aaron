import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from '../../../src/components/dashboard/Dashboard.jsx';

/**
 * @description shallow renders Dashboard
 * @param { loading } loading
 * @return { shallowRender } shallowRender
 */
const setup = (loading) => {
  const props = {
    actions: {
      groupActions: {
        fetchUserGroups: jest.fn()
      }
    },
    groupIsLoading: loading,
    children: ''

  };
  return shallow(<Dashboard {...props}/>);
};
describe('<Dashboard/>', () => {
  it('should render navigation,section,passwordform and a footer', () => {
    const wrapper = setup(false);
    expect(wrapper.find('Navigation').length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(4);
  });
  it('should show a loader when passwordIsLoading is true', () => {
    const wrapper = setup(true);
    expect(wrapper.find('Loader').length).toEqual(1);
  });
});
