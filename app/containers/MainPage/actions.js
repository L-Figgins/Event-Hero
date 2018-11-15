/*
 *
 * MainPage actions
 *
 */

import {
  LOAD_EVENTS,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_FAILURE,
} from './constants';

/**
 * Load the events, this action starts request saga
 * @return {object} An action object with type LOAD_EVENTS
 */
export function loadEvents() {
  return {
    type: LOAD_EVENTS,
  };
}

/**
 * Dispatched when the events are loaded by the request saga
 * @param {array} events venue events
 *
 * @return {object} An action with object type of LOAD_EVENTS_SUCCESS passing the events
 */
export function loadEventsSuccess(events) {
  return {
    type: LOAD_EVENTS_SUCCESS,
    events,
  };
}

/**
 * Dispatched when there is an error when loaded by the request saga
 * @param {object} error an error object
 *
 * @return {object} An action with object type of LOAD_EVENTS_FAILURE passing the error
 */
export function loadEventsFailure(error) {
  return {
    type: LOAD_EVENTS_FAILURE,
    error,
  };
}
