import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import SingleGroupMessage from '../../../src/components/message/SingleGroupMessage.jsx';


let props;

/**
 * @return { shallow } shallow
 */
const setup = () => {
  props = {
    message: {
      author: 'djcranker',
      content: 'Hello guys',
      priority: 1,
      createdAt: Date.now()
    }
  };

  return shallow(<SingleGroupMessage {...props}/>);
};

describe('<SingleGroupMessage/>', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper.find('li').length).to.eql(1);
    expect(wrapper.find('div').length).to.eql(2);
    expect(wrapper.find('span').length).to.eql(2);
    expect(wrapper.find('SingleUser').length).to.eql(1);
    expect(wrapper.find('p').length).to.eql(1);
  });
  it('should set the SingleUser username props to the message author', () => {
    const wrapper = setup();
    expect(wrapper.find('SingleUser').props().username).to.eql('djcranker');
  });
});
