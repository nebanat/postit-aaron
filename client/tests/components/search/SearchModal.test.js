import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import SearchModal from '../../../src/components/search/SearchModal.jsx';
/**
 * @return { shallow } shallow
 */
function setup() {
  const props = {
    searchResult: [
      { username: 'biliyok', email: 'biliyok@gmail.com' },
      { username: 'nebanat', email: 'nebanat@gmail.com' }
    ],
    searchLoading: false
  };

  return mount(<SearchModal {...props}/>);
}

describe('<SearchModal/>', () => {
  it('renders all child element', () => {
    const wrapper = setup();
    expect(wrapper.find('Modal').length).toBe(1);
    expect(wrapper.find('SearchForm').length).toBe(1);
  });
  it('renders the CircleLoader when you searchLoading is true ', () => {
    const wrapper = setup();
    expect(wrapper.find('CircleLoader').length).toBe(0);
  });
  it('renders the SingleUser based on the number of search results ', () => {
    const wrapper = setup();
    expect(wrapper.find('SingleUser').length).toBe(2);
  });
  it('renders the Add Button based on the number of search result', () => {
    const wrapper = setup();
    expect(wrapper.find('Button').length).toBe(2);
  });
});
