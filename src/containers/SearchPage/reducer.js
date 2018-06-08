import {
  QUERY_ARTIST,
  QUERY_ARTIST_ERROR,
  QUERY_ARTIST_SUCCESS,
  QUERY_ARTIST_EVENT,
  QUERY_ARTIST_EVENT_ERROR,
  QUERY_ARTIST_EVENT_SUCCESS
} from './constant';
import { fromJS } from 'immutable';

const initialState = fromJS({
  detail: null,
  loadingDetail: false,
  event: null,
  loadingEvent: false,
});

function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case QUERY_ARTIST:
      return state
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
        .set('loadingEvent', true);
    case QUERY_ARTIST_EVENT_SUCCESS:
      return state
        .set('loadingEvent', false)
        .set('event', fromJS(action.data))
    case QUERY_ARTIST_EVENT_ERROR:
      return state
        .set('loadingEvent', false)
        .set('event', fromJS(null))
    default:
      return state;
  }
}

export default searchPageReducer;