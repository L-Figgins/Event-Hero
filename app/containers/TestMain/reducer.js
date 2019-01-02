/*
 *
 * MainPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_EVENTS,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_FAILURE,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  events: false,
});

function mainPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_EVENTS:
      return state.set('loading', true).set('error', false);
    case LOAD_EVENTS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('events', action.events);
    case LOAD_EVENTS_FAILURE:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default mainPageReducer;
