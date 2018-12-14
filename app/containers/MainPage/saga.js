import { takeLatest, put } from 'redux-saga/effects';
import { loadEventsSuccess, loadEventsFailure } from './actions';
import { LOAD_EVENTS } from './constants';
import { Api } from '../../api';

/* THIS IS A FAKE API but it will match <<< sort of >>> when i actually implement the backend
 I WILL ALSO EVENTUALLY pull this up one level but you know fuck it */

function* fetchEvents() {
  try {
    const events = yield Api.loadEvents();
    // yield console.log(events);
    yield put(loadEventsSuccess(events));
  } catch (error) {
    console.log(error);
    yield put(loadEventsFailure(error));
  }
}

export default function* watchFetchEvents() {
  yield takeLatest(LOAD_EVENTS, fetchEvents);
}

// export default function* rootSaga() {
//   yield all(watchFetchEvents());
// }
