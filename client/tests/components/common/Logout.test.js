import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Logout from '../../../src/components/common/Logout.jsx';

let props;

/**
 * @description shallow mounts the logout field
 *
 * @return { * } null
 */
function setup() {
  props = {
    navClassName: '',
    navText: '',
  };

  return shallow(<Logout {...props}/>);
}

describe('<InputLine/>', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper.find('NavItem').length).to.eql(1);
  });
  it('should have an onClick props with logout function passed', () => {
    const wrapper = setup();
    expect(wrapper.find('NavItem').props().onClick).to.be.a('function');
  });
});
