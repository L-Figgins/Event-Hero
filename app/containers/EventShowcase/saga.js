import { delay } from 'redux-saga';
import { call, takeLatest, put } from 'redux-saga/effects';
import { Api } from '../../api';
import { loadEventByIdSuccess, loadEventByIdFailure } from './actions';
import { LOAD_EVENT_BY_ID } from './constants';

// Individual exports for testing
function* fetchEventById(action) {
  try {
    yield call(delay, 500);
    const event = yield Api.loadEventById(action.eventId);
    yield console.log('Hello from Saga: ', event);
    yield put(loadEventByIdSuccess(event));
  } catch (error) {
    yield put(loadEventByIdFailure(error));
  }
}

export default function* watchFetchEventById() {
  yield takeLatest(LOAD_EVENT_BY_ID, fetchEventById);
}
