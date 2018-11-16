import {
  loadEventById,
  loadEventByIdSuccess,
  loadEventByIdFailure,
} from '../actions';
import {
  LOAD_EVENT_BY_ID,
  LOAD_EVENT_BY_ID_SUCCESS,
  LOAD_EVENT_BY_ID_FAILURE,
} from '../constants';

describe('EventShowcase actions', () => {
  describe(' LOAD_EVENT_BY_ID action', () => {
    it('has a type of LOAD_EVENT_BY_ID', () => {
      const expected = {
        type: LOAD_EVENT_BY_ID,
        eventId: 1,
      };

      expect(loadEventById(1)).toEqual(expected);
    });
  });

  describe('LoadEventsByIdSuccess action', () => {
    it('has type LOAD_EVENTS_BY_ID_SUCCESS and passed event', () => {
      const expectedEvent = {
        id: 1,
        title: 'bleh',
        msg: 'bleh msg',
      };

      const expected = {
        type: LOAD_EVENT_BY_ID_SUCCESS,

        // not real data struc becaue it is subject to change
        event: {
          id: 1,
          title: 'bleh',
          msg: 'bleh msg',
        },
      };

      expected(loadEventByIdSuccess(expectedEvent)).toEqual(expected);
    });
  });

  describe('loadEventsByIdFailure action', () => {
    it('has type LOAD_EVENTS_BY_ID_FAILURE and passed error', () => {
      const expectedError = {
        id: 'Some error ID goes here',
        msg: 'Event not found',
      };

      const expected = {
        type: LOAD_EVENT_BY_ID_FAILURE,
        error: expectedError,
      };

      expected(loadEventByIdFailure(expectedError)).toEqual(expected);
    });
  });
});
