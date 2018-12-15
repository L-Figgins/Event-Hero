/*
 *
 * Gallery reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_ALBUMS,
  LOAD_ALBUMS_SUCCESS,
  LOAD_ALBUMS_FAILURE,
} from './constants';

// there is no real reason my application needs immutable
export const initialState = fromJS({
  loading: false,
  error: false,
  albums: false,
});

function galleryReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALBUMS:
      return state.set('loading', true).set('error', false);
    case LOAD_ALBUMS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('albums', action.ablums);
    case LOAD_ALBUMS_FAILURE:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default galleryReducer;
