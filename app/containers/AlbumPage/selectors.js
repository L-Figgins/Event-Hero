import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the albumPage state domain
 */

const selectAlbumPageDomain = state => state.get('albumPage', initialState);

/**
 * Other specific selectors
 */
const makeSelectAlbum = () =>
  createSelector(selectAlbumPageDomain, substate => substate.get('album'));

const makeSelectAlbumLoading = () =>
  createSelector(selectAlbumPageDomain, substate => substate.get('loading'));

const makeSelectAlbumError = () =>
  createSelector(selectAlbumPageDomain, substate => substate.get('error'));

/**
 * Default selector used by AlbumPage
 */

const makeSelectAlbumPage = () =>
  createSelector(selectAlbumPageDomain, substate => substate.toJS());

export default makeSelectAlbumPage;
export {
  selectAlbumPageDomain,
  makeSelectAlbum,
  makeSelectAlbumLoading,
  makeSelectAlbumError,
};
