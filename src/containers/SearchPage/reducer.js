import {
  QUERY_ARTIST,
  QUERY_ARTIST_ERROR,
  QUERY_ARTIST_SUCCESS
} from './constant';
import { fromJS } from 'immutable';

const initialState = fromJS({
  detail: null,
  loading: true
});

function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case QUERY_ARTIST:
      return state
        .set('loading', true);
    case QUERY_ARTIST_SUCCESS: {
      return state
        .set('loading', false)
        .set('detail', fromJS(action.data))
    }
    case QUERY_ARTIST_ERROR:
      return state
        .set('loading', false)
        .set('detail', fromJS(null))
    default:
      return state;
  }
}

export default searchPageReducer;