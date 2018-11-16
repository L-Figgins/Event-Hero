/*
 *
 * EventShowcase actions
 *
 */

import {
  LOAD_EVENT_BY_ID,
  LOAD_EVENT_BY_ID_SUCCESS,
  LOAD_EVENT_BY_ID_FAILURE,
} from './constants';

export function loadEventById(eventId) {
  return {
    type: LOAD_EVENT_BY_ID,
    eventId,
  };
}

export function loadEventByIdSuccess(event) {
  return {
    type: LOAD_EVENT_BY_ID_SUCCESS,
    event,
  };
}

export function loadEventByIdFailure(error) {
  return {
    type: LOAD_EVENT_BY_ID_FAILURE,
    error,
  };
}
