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

export default makeSelectGallery;
export { selectGalleryDomain };
