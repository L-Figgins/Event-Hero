import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the gallery state domain
 */

const selectGalleryDomain = state => state.get('gallery', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Gallery
 */

const makeSelectGallery = () =>
  createSelector(selectGalleryDomain, substate => substate.toJS());

const makeAlbumsSelector = () =>
  createSelector(selectGalleryDomain, substate => substate.get('albums'));

const makeLoadingSelector = () =>
  createSelector(selectGalleryDomain, substate => substate.get('loading'));

const makeErrorSelector = () =>
  createSelector(selectGalleryDomain, substate => substate.get('error'));

// const makeSelectAlbums = () =>
//   createSelector(SelectGalery)

export default makeSelectGallery;
export {
  selectGalleryDomain,
  makeAlbumsSelector,
  makeErrorSelector,
  makeLoadingSelector,
};
