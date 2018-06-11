import React from 'react';
import { shallow, mount } from 'enzyme';
import { fromJS } from 'immutable';
import ArtistEvents from './index';

it('renders without crashing', () => {
  const props = {
  }
  shallow(<ArtistEvents {...props} />);
});

it('In case loadingEvents is true, it should render skeleton', () => {
  const props = {
    loadingEvents: true
  }
  const wrapper = mount(<ArtistEvents {...props} />);
  expect(wrapper.find('[name="artist-events-skeleton"]')).toHaveLength(1);
});

it('In case it does not have any event, an message should be display', () => {
  const props = {
    loadingEvents: false,
    events: fromJS([])
  }
  const wrapper = mount(<ArtistEvents {...props} />);
  expect(wrapper.find('[name="message-box-content"]').text()).toBe('No events found');
});

it('In case it has data, it should be populate to filter dropdown', () => {
  const props = {
    loadingEvents: false,
    events: fromJS([{
      "id": "20681962",
      "artist_id": "157",
      "url": "https://www.bandsintown.com/e/20681962?app_id=SEARCH_ARTIST&came_from=267",
      "on_sale_datetime": "2017-12-06T08:55:00",
      "datetime": "2018-06-09T19:00:00",
      "description": "Taylor Swift Reputation Stadium Tour",
      "venue": {
        "name": "Manchester Etihad Stadium",
        "latitude": "53.481805",
        "longitude": "-2.203389",
        "city": "Manchester",
        "region": "England",
        "country": "United Kingdom"
      },
      "offers": [
        {
          "type": "Tickets",
          "url": "https://www.bandsintown.com/t/20681962?app_id=SEARCH_ARTIST&came_from=267",
          "status": "available"
        }
      ]
    }])
  }
  const wrapper = mount(<ArtistEvents {...props} />);
  const filterByMonth = wrapper.find('[name="filter-by-month"]').first();
  expect(filterByMonth.prop('options').size).toBe(1);

  const filterByCountry = wrapper.find('[name="filter-by-country"]').first();
  expect(filterByCountry.prop('options').size).toBe(1);
});

it('In case filter is applied, it should return a message if no matched data', () => {
  const props = {
    classes: {
      messageBlock: 'messageBlock'
    },
    loadingEvents: false,
    events: fromJS([{
      "id": "20681962",
      "artist_id": "157",
      "url": "https://www.bandsintown.com/e/20681962?app_id=SEARCH_ARTIST&came_from=267",
      "on_sale_datetime": "2017-12-06T08:55:00",
      "datetime": "2018-06-09T19:00:00",
      "description": "Taylor Swift Reputation Stadium Tour",
      "venue": {
        "name": "Manchester Etihad Stadium",
        "latitude": "53.481805",
        "longitude": "-2.203389",
        "city": "Manchester",
        "region": "England",
        "country": "United Kingdom"
      },
      "offers": [
        {
          "type": "Tickets",
          "url": "https://www.bandsintown.com/t/20681962?app_id=SEARCH_ARTIST&came_from=267",
          "status": "available"
        }
      ]
    }])
  }
  const wrapper = mount(<ArtistEvents {...props} />);
  const filterByMonth = wrapper.find('[name="filter-by-month"]').first();
  filterByMonth.prop('onClose')(['SEP 2018']);
  wrapper.update();
  expect(wrapper.find('[name="message-box-content"]').text()).toBe('No events found for that filter criteria');
});

it('In case filter is applied and it has matched data, it should render list of event item', () => {
  const props = {
    classes: {
      messageBlock: 'messageBlock'
    },
    loadingEvents: false,
    events: fromJS([{
      "id": "20681962",
      "artist_id": "157",
      "url": "https://www.bandsintown.com/e/20681962?app_id=SEARCH_ARTIST&came_from=267",
      "on_sale_datetime": "2017-12-06T08:55:00",
      "datetime": "2018-06-09T19:00:00",
      "description": "Taylor Swift Reputation Stadium Tour",
      "venue": {
        "name": "Manchester Etihad Stadium",
        "latitude": "53.481805",
        "longitude": "-2.203389",
        "city": "Manchester",
        "region": "England",
        "country": "United Kingdom"
      },
      "offers": [
        {
          "type": "Tickets",
          "url": "https://www.bandsintown.com/t/20681962?app_id=SEARCH_ARTIST&came_from=267",
          "status": "available"
        }
      ]
    }])
  }
  const wrapper = mount(<ArtistEvents {...props} />);
  const filterByCountry = wrapper.find('[name="filter-by-country"]').first();
  filterByCountry.prop('onClose')(['United Kingdom']);
  wrapper.update();
  expect(wrapper.find('[name="event-item"]').hostNodes().length).toBe(1);
});

it('renderMonthFilterValue should works properly', () => {
  const props = {
    loadingEvents: false,
    events: fromJS([{
      "id": "20681962",
      "artist_id": "157",
      "url": "https://www.bandsintown.com/e/20681962?app_id=SEARCH_ARTIST&came_from=267",
      "on_sale_datetime": "2017-12-06T08:55:00",
      "datetime": "2018-06-09T19:00:00",
      "description": "Taylor Swift Reputation Stadium Tour",
      "venue": {
        "name": "Manchester Etihad Stadium",
        "latitude": "53.481805",
        "longitude": "-2.203389",
        "city": "Manchester",
        "region": "England",
        "country": "United Kingdom"
      },
      "offers": [
        {
          "type": "Tickets",
          "url": "https://www.bandsintown.com/t/20681962?app_id=SEARCH_ARTIST&came_from=267",
          "status": "available"
        }
      ]
    }])
  }
  const wrapper = mount(<ArtistEvents {...props} />);
  const filterByMonth = wrapper.find('[name="filter-by-month"]').first();
  const filterRenderValue = filterByMonth.prop('renderValue')(['DEC 2018', 'JAN 2019']);
  expect(filterRenderValue).toBe('DEC, JAN 2019')
});