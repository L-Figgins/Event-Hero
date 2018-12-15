import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the album state domain
 */

const selectAlbumDomain = state => state.get('album', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Album
 */

const makeSelectAlbum = () =>
  createSelector(selectAlbumDomain, substate => substate.toJS());

export default makeSelectAlbum;
export { selectAlbumDomain };
