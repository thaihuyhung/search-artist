import { expectSaga, matchers } from 'redux-saga-test-plan';
import { call, put, take, delay } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { fromJS } from 'immutable';
import saga from '../saga';
import api from '../api';
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

describe('doQueryArtist', () => {
  it('In case artist does not have events, it should dispatch queryArtistSuccess and hideLoading', () => {
    const fakeArtist = { name: 'Maroon 5' };

    return expectSaga(saga)
      .provide([
        [matchers.call.fn(api.queryArtist), fakeArtist],
      ])
      .put(showLoading())
      .put(hideLoading())
      .put(queryArtistSuccess(fakeArtist))
      .dispatch(queryArtist('Maroon 5'))
      .run();
  });

  it('In case artist has events, it should dispatch queryArtistEvent', () => {
    const fakeArtist = { name: 'Maroon 5', upcoming_event_count: 5 };
    const fakeArtistEvents = [{ description: 'World Tour' }];

    return expectSaga(saga)
      .provide([
        [matchers.call.fn(api.queryArtist), fakeArtist],
        [matchers.call.fn(api.queryArtistEvents), fakeArtistEvents],
      ])
      .put(showLoading())
      .put(queryArtistEvent('Maroon 5'))
      .put(queryArtistEventSuccess(fakeArtistEvents))
      .put(hideLoading())
      .dispatch(queryArtist('Maroon 5'))
      .run();
  });

  it('In case artist response has error in response, it should dispatch queryArtistError', () => {
    const fakeArtist = { error: { errorMessage: 'Server error' } };

    return expectSaga(saga)
      .provide([
        [matchers.call.fn(api.queryArtist), fakeArtist],
      ])
      .put(showLoading())
      .put(hideLoading())
      .put(queryArtistError(fakeArtist.error))
      .dispatch(queryArtist('Maroon 5'))
      .run();
  });

  it('In case there is error during request, it should dispatch queryArtistError', () => {
    return expectSaga(saga)
      .provide({
        call() {
          throw new Error('Error');
        },
      })
      .put(showLoading())
      .put(hideLoading())
      .put(queryArtistError(new Error('Error')))
      .dispatch(queryArtist('Maroon 5'))
      .run();
  });
});

describe('doQueryArtistEvent', () => {
  it('In case artist event response has error in response, it should dispatch queryArtistEventError', () => {
    const fakeArtistEvents = { error: { errorMessage: 'Server error' } };

    return expectSaga(saga)
      .provide([
        [matchers.call.fn(api.queryArtistEvents), fakeArtistEvents],
      ])
      .put(hideLoading())
      .put(queryArtistEventError(fakeArtistEvents.error))
      .dispatch(queryArtistEvent('Maroon 5'))
      .run();
  });

  it('In case there is error during request, it should dispatch queryArtistEventError', () => {
    return expectSaga(saga)
      .provide({
        call() {
          throw new Error('Error');
        },
      })
      .put(hideLoading())
      .put(queryArtistEventError(new Error('Error')))
      .dispatch(queryArtistEvent('Maroon 5'))
      .run();
  });
})

describe('doQueryArtistName', () => {
  it('In case artist name response has correct data, it should dispatch queryArtistNameSuccess', () => {
    const fakeArtistName = { artists: [{}] };

    return expectSaga(saga)
      .provide({
        call() {
          return fakeArtistName
        },
      })
      .put(queryArtistNameSuccess(fakeArtistName))
      .dispatch(queryArtistName('Maroon 5'))
      .run(550);
  });

  it('In case artist name response has error in response, it should dispatch queryArtistNameError', () => {
    const fakeArtistName = { error: { errorMessage: 'Server error' } };

    return expectSaga(saga)
      .provide({
        call() {
          return fakeArtistName
        },
      })
      .put(queryArtistNameError(fakeArtistName.error))
      .dispatch(queryArtistName('Maroon 5'))
      .run(550);
  });

  it('In case there is error during request, it should dispatch queryArtistNameError', () => {
    return expectSaga(saga)
      .provide({
        call() {
          throw new Error('Error');
        },
      })
      .put(queryArtistNameError(new Error('Error')))
      .dispatch(queryArtistName('Maroon 5'))
      .run(550);
  });
})
