import { delay } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import { loadEventsSuccess, loadEventsFailure } from './actions';
import { LOAD_EVENTS } from './constants';
import { Api } from '../../api';

/* THIS IS A FAKE API but it will match <<< sort of >>> when i actually implement the backend
 I WILL ALSO EVENTUALLY pull this up one level but you know fuck it */

function* fetchEvents() {
  try {
    yield call(delay, 500);
    const events = yield Api.loadEvents();
    yield put(loadEventsSuccess(events));
  } catch (error) {
    console.log(error);
    yield put(loadEventsFailure(error));
  }
}

export default function* watchFetchEvents() {
  yield takeEvery(LOAD_EVENTS, fetchEvents);
}

// export default function* rootSaga() {
//   yield all(watchFetchEvents());
// }
