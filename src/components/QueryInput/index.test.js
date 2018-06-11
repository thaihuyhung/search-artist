import React from 'react';
import { shallow, mount } from 'enzyme';
import { fromJS } from 'immutable';
import QueryInput from './index';

it('renders without crashing', () => {
  const props = {
    queryArtist: jest.fn(),
    queryArtistName: jest.fn(),
    artistSuggestions: {},
    loadingSuggestions: false,
  }
  shallow(<QueryInput {...props} />);
});

it('queryArtistName should be call when user input search field', () => {
  const props = {
    queryArtist: jest.fn(),
    queryArtistName: jest.fn(),
    artistSuggestions: {},
    loadingSuggestions: false,
  }
  const queryInput = mount(<QueryInput {...props} />);
  queryInput.find('input').simulate('change', {target: {value: 'Maroon'}});

  expect(props.queryArtistName.mock.calls.length).toBe(1);
});

it('queryArtist should be call when user select from search result', () => {
  const props = {
    queryArtist: jest.fn(),
    queryArtistName: jest.fn(),
    artistSuggestions: fromJS([{
      "name": "Maroon 5",
      "verifiedSrc": "http://dummy.url"
    }]),
    loadingSuggestions: false,
  }
  const queryInput = mount(<QueryInput {...props} />);
  queryInput.find('input').simulate('change', {target: {value: 'Maroon'}});
  queryInput.find('[name="suggestion-item"]').first().simulate('click');

  expect(props.queryArtist.mock.calls.length).toBe(1);
});

