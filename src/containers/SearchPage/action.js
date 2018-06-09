import {
  QUERY_ARTIST,
  QUERY_ARTIST_ERROR,
  QUERY_ARTIST_SUCCESS,
  QUERY_ARTIST_EVENT,
  QUERY_ARTIST_EVENT_ERROR,
  QUERY_ARTIST_EVENT_SUCCESS,
  QUERY_ARTIST_NAME,
  QUERY_ARTIST_NAME_ERROR,
  QUERY_ARTIST_NAME_SUCCESS,
} from './constant';

export function queryArtist(param) {
  return {
    type: QUERY_ARTIST,
    param
  };
}

export function queryArtistSuccess(data) {
  return {
    type: QUERY_ARTIST_SUCCESS,
    data
  };
}

export function queryArtistError(error) {
  return {
    type: QUERY_ARTIST_ERROR,
    error
  };
}

export function queryArtistEvent(param) {
  return {
    type: QUERY_ARTIST_EVENT,
    param
  };
}

export function queryArtistEventSuccess(data) {
  return {
    type: QUERY_ARTIST_EVENT_SUCCESS,
    data
  };
}

export function queryArtistEventError(error) {
  return {
    type: QUERY_ARTIST_EVENT_ERROR,
    error
  };
}

export function queryArtistName(param) {
  return {
    type: QUERY_ARTIST_NAME,
    param
  };
}

export function queryArtistNameSuccess(data) {
  return {
    type: QUERY_ARTIST_NAME_SUCCESS,
    data
  };
}

export function queryArtistNameError(error) {
  return {
    type: QUERY_ARTIST_NAME_ERROR,
    error
  };
}