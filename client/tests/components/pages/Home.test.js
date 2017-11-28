import expect from 'expect';
import React from 'react';
import { mount } from 'enzyme';
import Home from '../../../src/components/pages/home/Home.jsx';


describe('<Home/>', () => {
  it('renders a Navigation and a Jumbotron', () => {
    const wrapper = mount(<Home/>);
    expect(wrapper.find('Navigation').length).toBe(1);
    expect(wrapper.find('Jumbotron').length).toBe(1);
  });
});
