import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import searchPageReducer from '../../containers/SearchPage/reducer';
import { LOCATION_CHANGE } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
  location: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: state.get('location'),
        location: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default combineReducers({
  router: routeReducer,
  loadingBar: loadingBarReducer,
  search: searchPageReducer
});