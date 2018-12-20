/*
 *
 * AlbumPage actions
 *
 */

import {
  LOAD_ALBUM_BY_ID,
  LOAD_ALBUM_BY_ID_SUCCESS,
  LOAD_ALBUM_BY_ID_FAILURE,
} from './constants';

export function loadAlbumById(albumId) {
  return {
    type: LOAD_ALBUM_BY_ID,
    albumId,
  };
}

export function loadAlbumByIdSuccess(album) {
  return {
    type: LOAD_ALBUM_BY_ID_SUCCESS,
    album,
  };
}

export function loadAlbumByIdFailure(error) {
  return {
    type: LOAD_ALBUM_BY_ID_FAILURE,
    error,
  };
}
