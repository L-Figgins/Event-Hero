/*
 *
 * AlbumPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_ALBUM_BY_ID,
  LOAD_ALBUM_BY_ID_SUCCESS,
  LOAD_ALBUM_BY_ID_FAILURE,
} from './constants';

export const initialState = fromJS({
  error: false,
  loading: false,
  ablum: false,
});

function albumPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALBUM_BY_ID:
      return state.set('error', false).set('loading', true);
    case LOAD_ALBUM_BY_ID_SUCCESS:
      return state
        .set('error', false)
        .set('loading', false)
        .set('album', action.album);
    case LOAD_ALBUM_BY_ID_FAILURE:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default albumPageReducer;
