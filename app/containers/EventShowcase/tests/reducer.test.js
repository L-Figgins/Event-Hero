import { fromJS } from 'immutable';
import eventShowcaseReducer from '../reducer';
import {
  loadEventByIdSuccess,
  loadEventByIdFailure,
  loadEventById,
} from '../actions';

describe('eventShowcaseReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      event: false,
    });
  });

  it('returns the initial state', () => {
    const expected = state;
    expect(eventShowcaseReducer(undefined, {})).toEqual(fromJS(expected));
  });

  it('reduces loadEventsById action', () => {
    const expected = state.set('loading', true).set('error', false);

    expect(eventShowcaseReducer(state, loadEventById(2))).toEqual(expected);
  });

  it('reduces loadEventsSuccess action', () => {
    const event = {
      id: '1',
      title: 'Event title',
      msg: 'An event msg',
    };

    const expected = state
      .set('loading', false)
      .set('error', false)
      .set('event', event);
    expect(eventShowcaseReducer(state, loadEventByIdSuccess(event))).toEqual(
      expected,
    );
  });

  it('reduces loadEventsFailre action', () => {
    const error = {
      id: 'some error id',
      msg: 'some error msg',
    };
    const expected = state.set('loading', false).set('error', error);

    expect(eventShowcaseReducer(state, loadEventByIdFailure(error))).toEqual(
      expected,
    );
  });
});
