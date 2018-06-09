import {
  queryArtistError,
  queryArtistSuccess,
  queryArtistEvent,
  queryArtistEventError,
  queryArtistEventSuccess,
  queryArtistNameError,
  queryArtistNameSuccess
} from './action';
import { QUERY_ARTIST, QUERY_ARTIST_EVENT, QUERY_ARTIST_NAME } from './constant';
import { call, put, takeLatest } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import request from '../../utils/request';
import { APP_ID } from '../../utils/constant';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* doQueryArtist({ param: name }) {
  try {
    yield put(showLoading());
    const queryArtistApiUrl = `https://rest.bandsintown.com/artists/${name}?app_id=${APP_ID}`;
    const response = yield call(request, queryArtistApiUrl);
    if (response['upcoming_event_count'] > 0) {
      yield put(queryArtistEvent(name));
    } else {
      yield put(hideLoading());
    }
    if (response.error) {
      yield put(queryArtistError(response.error));
      return;
    }
    yield put(queryArtistSuccess(response));
  } catch (error) {
    yield put(queryArtistError(error));
    yield put(hideLoading());
  }
}

function* doQueryArtistEvent({ param: name }) {
  try {
    const queryArtistEventApiUrl = `https://rest.bandsintown.com/artists/${name}/events?app_id=${APP_ID}`;
    const response = yield call(request, queryArtistEventApiUrl);
    if (response.error) {
      yield put(queryArtistEventError(response.error));
      return;
    }
    yield put(queryArtistEventSuccess(response));
  } catch (error) {
    yield put(queryArtistEventError(error));
  } finally {
    yield put(hideLoading());
  }
}

function* doQueryArtistName({ param: name }) {
  yield delay(500);
  try {
    const queryArtistNameUrl = `/searchSuggestions?searchTerm=${name}&cameFromCode=257`;
    const response = yield call(request, queryArtistNameUrl);
    if (response.error) {
      yield put(queryArtistNameError(response.error));
      return;
    }
    yield put(queryArtistNameSuccess(response));
  } catch (error) {
    yield put(queryArtistNameError(error));
  }
}


export default function* searchPageWatcher() {
  yield takeLatest(QUERY_ARTIST, doQueryArtist);
  yield takeLatest(QUERY_ARTIST_EVENT, doQueryArtistEvent);
  yield takeLatest(QUERY_ARTIST_NAME, doQueryArtistName);
}