import { fromJS } from 'immutable';
import albumReducer from '../reducer';

describe('albumReducer', () => {
  it('returns the initial state', () => {
    expect(albumReducer(undefined, {})).toEqual(fromJS({}));
  });
});
