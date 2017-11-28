import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import CircleLoader from '../../../src/components/loaders/CircleLoader.jsx';
/**
 * @return { shallow } shallow
 */
function setup() {
  return shallow(<CircleLoader/>);
}

describe('<CircleLoader/>', () => {
  it('renders eight divs', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(8);
  });
});
