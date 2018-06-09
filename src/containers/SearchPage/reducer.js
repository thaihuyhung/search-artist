import {
  INITIAL_LOAD,
  QUERY_ARTIST,
  QUERY_ARTIST_ERROR,
  QUERY_ARTIST_SUCCESS,
  QUERY_ARTIST_EVENT,
  QUERY_ARTIST_EVENT_ERROR,
  QUERY_ARTIST_EVENT_SUCCESS,
  QUERY_ARTIST_NAME,
  QUERY_ARTIST_NAME_ERROR,
  QUERY_ARTIST_NAME_SUCCESS
} from './constant';
import { fromJS } from 'immutable';

const initialState = fromJS({
  initialLoad: true,
  detail: null,
  loadingDetail: false,
  events: [],
  loadingEvents: false,
  artistSuggestions: [],
  loadingSuggestions: false,
});

function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case QUERY_ARTIST:
      return state
        .set('initialLoad', false)
        .set('events', fromJS([]))
        .set('loadingDetail', true);
    case QUERY_ARTIST_SUCCESS: 
      return state
        .set('loadingDetail', false)
        .set('detail', fromJS(action.data))
    case QUERY_ARTIST_ERROR:
      return state
        .set('loadingDetail', false)
        .set('event', fromJS(null))
    case QUERY_ARTIST_EVENT:
      return state
        .set('loadingEvents', true);
    case QUERY_ARTIST_EVENT_SUCCESS:
      return state
        .set('loadingEvents', false)
        .set('events', fromJS(action.data))
    case QUERY_ARTIST_EVENT_ERROR:
      return state
        .set('loadingEvents', false)
        .set('event', fromJS(null))
    case QUERY_ARTIST_NAME:
      return state
        .set('loadingSuggestions', true);
    case QUERY_ARTIST_NAME_SUCCESS:
      return state
        .set('loadingSuggestions', false)
        .set('artistSuggestions', fromJS(action.data.artists))
    case QUERY_ARTIST_NAME_ERROR:
      return state
        .set('loadingSuggestions', false)
        .set('artistSuggestions', fromJS(null))
    default:
      return state;
  }
}

export default searchPageReducer;