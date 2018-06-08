import {
  queryArtistError,
  queryArtistSuccess
} from './action';
import { QUERY_ARTIST } from './constant';
import { call, put, takeLatest } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import request from '../../utils/request';
import { APP_ID } from '../../utils/constant';


function* doQueryArtist({ param }) {
  try {
    yield put(showLoading());
    const { name } = param;
    const queryArtistApiUrl = `https://rest.bandsintown.com/artists/${name}?app_id=${APP_ID}`;
    const response = yield call(request, queryArtistApiUrl);
    if (response.error) {
      yield put(queryArtistError(response.error));
      return;
    }
    yield put(queryArtistSuccess(response));
  } catch (error) {
    yield put(queryArtistError(error));
  } finally {
    yield put(hideLoading());
  }
}


export default function* searchPageWatcher() {
  yield takeLatest(QUERY_ARTIST, doQueryArtist);
}