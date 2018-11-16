import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the eventShowcase state domain
 */

const selectEventShowcaseDomain = state =>
  state.get('eventShowcase', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by EventShowcase
 */

const makeSelectEventShowcase = () =>
  createSelector(selectEventShowcaseDomain, substate => substate.toJS());

const makeSelectEvent = () =>
  createSelector(selectEventShowcaseDomain, substate => substate.get('event'));

const makeSelectEventShowcaseLoading = () =>
  createSelector(selectEventShowcaseDomain, substate =>
    substate.get('loading'),
  );

const makeSelectEventShowcaseError = () =>
  createSelector(selectEventShowcaseDomain, substate => substate.get('error'));

export default makeSelectEventShowcase;
export {
  selectEventShowcaseDomain,
  makeSelectEvent,
  makeSelectEventShowcaseLoading,
  makeSelectEventShowcaseError,
};
