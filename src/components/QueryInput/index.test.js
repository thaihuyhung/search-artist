import React from 'react';
import { shallow, mount } from 'enzyme';
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
  const input = queryInput
    .find('input')
    .simulate('change', {target: {value: 'Taylor'}});
  expect(props.queryArtistName.mock.calls.length).toBe(1);
});

