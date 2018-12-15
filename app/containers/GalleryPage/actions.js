/*
 *
 * Gallery actions
 *
 */

import {
  LOAD_ALBUMS,
  LOAD_ALBUMS_SUCCESS,
  LOAD_ALBUMS_FAILURE,
} from './constants';

export function loadAlbums() {
  return {
    type: LOAD_ALBUMS,
  };
}

export function loadAlbumsSuccess(albums) {
  return {
    type: LOAD_ALBUMS_SUCCESS,
    albums,
  };
}

export function loadAlbumsFailure(error) {
  return {
    type: LOAD_ALBUMS_FAILURE,
    error,
  };
}
