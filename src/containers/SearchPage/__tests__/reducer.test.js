import reducer from '../reducer';
import { fromJS } from 'immutable';
import {
  queryArtist,
  queryArtistSuccess,
  queryArtistError,
  queryArtistEvent,
  queryArtistEventError,
  queryArtistEventSuccess,
  queryArtistName,
  queryArtistNameError,
  queryArtistNameSuccess
} from '../action';

const initialState = fromJS({
  initialLoad: true,
  detail: null,
  loadingDetail: false,
  events: [],
  loadingEvents: false,
  artistSuggestions: [],
  loadingSuggestions: false,
})

it('it should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

// QUERY_ARTIST
it('it should handle QUERY_ARTIST', () => {
  const result = reducer(initialState, queryArtist('Maroon 5'));
  expect(result.get('initialLoad')).toBe(false);
  expect(result.get('events')).toBe(fromJS([]));
  expect(result.get('loadingDetail')).toBe(true);
});

it('it should handle QUERY_ARTIST_SUCCESS', () => {
  const result = reducer(initialState, queryArtistSuccess({ name: 'Maroon 5'}));
  expect(result.get('detail')).toEqual(fromJS({ name: 'Maroon 5'}));
  expect(result.get('loadingDetail')).toBe(false);
});

it('it should handle QUERY_ARTIST_ERROR', () => {
  const result = reducer(initialState, queryArtistError());
  expect(result.get('detail')).toBe(null);
  expect(result.get('loadingDetail')).toBe(false);
});

// QUERY_ARTIST_EVENT
it('it should handle QUERY_ARTIST_EVENT', () => {
  const result = reducer(initialState, queryArtistEvent('Maroon 5'));
  expect(result.get('loadingEvents')).toBe(true);
});

it('it should handle QUERY_ARTIST_EVENT_SUCCESS', () => {
  const result = reducer(initialState, queryArtistEventSuccess([{ description: 'World Tour'}]));
  expect(result.get('events')).toEqual(fromJS([{ description: 'World Tour'}]));
  expect(result.get('loadingEvents')).toBe(false);
});

it('it should handle QUERY_ARTIST_EVENT_ERROR', () => {
  const result = reducer(initialState, queryArtistEventError());
  expect(result.get('events')).toBe(null);
  expect(result.get('loadingEvents')).toBe(false);
});

// QUERY_ARTIST_NAME
it('it should handle QUERY_ARTIST_NAME', () => {
  const result = reducer(initialState, queryArtistName('Maroon 5'));
  expect(result.get('loadingSuggestions')).toBe(true);
});

it('it should handle QUERY_ARTIST_NAME_SUCCESS', () => {
  const result = reducer(initialState, queryArtistNameSuccess({ artists: [{ name: 'Maroon 5'}]}));
  expect(result.get('artistSuggestions')).toEqual(fromJS([{ name: 'Maroon 5'}]));
  expect(result.get('loadingSuggestions')).toBe(false);
});

it('it should handle QUERY_ARTIST_NAME_ERROR', () => {
  const result = reducer(initialState, queryArtistNameError());
  expect(result.get('artistSuggestions')).toBe(null);
  expect(result.get('loadingSuggestions')).toBe(false);
});