import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../../src/components/common/NotFound.jsx';


let props;

/**
 * @return { shallow } shallow
 */
function setup() {
  props = {
    header: '',
    body: '',
  };

  return shallow(<NotFound {...props}/>);
}

describe('<NotFound/>', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).to.eql(1);
  });
});
