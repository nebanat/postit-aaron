import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../../src/components/common/Button.jsx';
/**
 * @return { shallow } shallow
 */
function setup() {
  const props = {
    wrapperClass: '',
    name: '',
    type: '',
    onClick: () => {},
    buttonClassName: 'buttonClass',
    label: 'buttonLabel',
  };

  return shallow(<Button {...props}/>);
}

describe('<Button/>', () => {
  it('renders a div and a button', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
  });
  it('should render children when passed in', () => {
    const wrapper = shallow((
      <Button label='buttonLabel' buttonClassName='buttonClass'>
        <div className="unique" />
      </Button>
    ));
    expect(wrapper.contains(<div className="unique" />)).toEqual(true);
  });
});
