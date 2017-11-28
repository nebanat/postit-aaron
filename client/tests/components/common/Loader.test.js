import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../../../src/components/loaders/Loader.jsx';
/**
 * @return { shallow } shallow
 */
function setup() {
  return shallow(<Loader/>);
}

describe('Loader/>', () => {
  it('renders two divs', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(2);
  });
});
