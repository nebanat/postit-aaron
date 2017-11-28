import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import InputLine from '../../../src/components/common/InputLine.jsx';

let props;
/**
 * @return { shallow } shallow
 */
function setup() {
  props = {
    wrapperClass: '',
    name: '',
    value: '',
    onChange: () => {},
    type: '',
    placeholder: '',
    validate: '',
    required: ''
  };

  return shallow(<InputLine {...props}/>);
}

describe('<InputLine/>', () => {
  it('renders a div, input and a label', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(3);
    expect(wrapper.find('input').length).toBe(1);
  });
  it('should render children when passed in', () => {
    const wrapper = shallow((
      <InputLine {...props}>
        <div className="unique" />
      </InputLine>
    ));
    expect(wrapper.contains(<div className="unique" />)).toEqual(true);
  });
});
