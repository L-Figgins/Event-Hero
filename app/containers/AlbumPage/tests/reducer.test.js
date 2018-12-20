import { fromJS } from 'immutable';
import albumPageReducer from '../reducer';

describe('albumPageReducer', () => {
  it('returns the initial state', () => {
    expect(albumPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
