import React from 'react';
import { shallow, mount } from 'enzyme';
import { fromJS } from 'immutable';
import ArtistDetail from './index';

it('renders without crashing', () => {
  const props = {
  }
  shallow(<ArtistDetail {...props} />);
});

it('In case initialLoad, it should render nothing', () => {
  const props = {
    initialLoad: true
  }
  const wrapper = mount(<ArtistDetail {...props} />);
  expect(wrapper.html()).toBe(null);
});

it('In case loadingDetail is true, it should render skeleton', () => {
  const props = {
    loadingDetail: true
  }
  const wrapper = mount(<ArtistDetail {...props} />);
  expect(wrapper.find('[name="artist-detail-skeleton"]')).toHaveLength(1);
});

it('In case it does not have detail information, an message should be display', () => {
  const props = {
    loadingDetail: false,
    detail: null
  }
  const wrapper = mount(<ArtistDetail {...props} />);
  expect(wrapper.find('[name="message-box-content"]').text()).toBe('No data found for this artist');
});

it('In case it has data, it should be binding properly', () => {
  const props = {
    classes: {
      artistName: 'artistName',
      artistImage: 'artistImage',
      bandsintown: 'bandsintown',
      facebookPage: 'facebookPage'
    },
    loadingDetail: false,
    detail: fromJS({
      name: 'Maroon 5',
      image_url: 'http://dummy.image',
      url: 'http://dummy.bandsintown',
      facebook_page_url: 'http://dummy.facebook',
    }),
    events: fromJS([])
  }
  const wrapper = mount(<ArtistDetail {...props} />);
  expect(wrapper.find(`.${props.classes.artistName}`).text()).toBe('Maroon 5');
  expect(wrapper.find(`a.${props.classes.bandsintown}`).prop('href')).toBe('http://dummy.bandsintown');
  expect(wrapper.find(`a.${props.classes.facebookPage}`).prop('href')).toBe('http://dummy.facebook');
});