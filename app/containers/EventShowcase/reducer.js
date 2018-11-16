/*
 *
 * EventShowcase reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_EVENT_BY_ID,
  LOAD_EVENT_BY_ID_SUCCESS,
  LOAD_EVENT_BY_ID_FAILURE,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  event: false,
});

function eventShowcaseReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_EVENT_BY_ID:
      return state.set('loading', true).set('error', false);
    case LOAD_EVENT_BY_ID_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('events', action.event);
    case LOAD_EVENT_BY_ID_FAILURE:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default eventShowcaseReducer;
