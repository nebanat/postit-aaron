import { expect } from 'chai';
import React from 'react';
// import sinon from 'sinon';
import { shallow } from 'enzyme';
import Logout from '../../../src/components/common/Logout.jsx';
// import NavItem from '../../../src/components/common/NavItem.jsx';
// import { logout } from '../../../src/utils/authservice';

let props;

/**
 * @return { shallow } shallow
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
