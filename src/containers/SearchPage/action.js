import {
  QUERY_ARTIST,
  QUERY_ARTIST_ERROR,
  QUERY_ARTIST_SUCCESS
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