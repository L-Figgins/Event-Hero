import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainPage state domain
 */

const selectMainPageDomain = state => state.get('mainPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainPage
 */

const makeSelectMainPage = () =>
  createSelector(selectMainPageDomain, substate => substate.toJS());

const makeEventsSelector = () =>
  createSelector(selectMainPageDomain, substate => substate.get('events'));

const makeLoadingSelector = () => {
  createSelector(selectMainPageDomain, substate => substate.get('loading'));
};

const makeErrorSelector = () => {
  createSelector(selectMainPageDomain, substate => substate.get('error'));
};

export default makeSelectMainPage;
export {
  selectMainPageDomain,
  makeEventsSelector,
  makeLoadingSelector,
  makeErrorSelector,
};
