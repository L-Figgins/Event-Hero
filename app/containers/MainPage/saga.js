import { delay } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import { loadEventsSuccess, loadEventsFailure } from './actions';
import { LOAD_EVENTS } from './constants';

// i might change date to raw numbers on the front end not sure
const events = [
  {
    id: 1,
    title: 'Event 1',
    message: {
      cardArtist: 'Person',
      cardGenre: 'Rock',
    },
    date: {
      day: '14',
      month: 'Oct',
      weekday: 'wed',
    },
  },
  {
    id: 2,
    title: 'Event 2',
    message: {
      cardArtist: 'Person',
      cardGenre: 'Rock',
    },
    date: {
      day: '14',
      month: 'Oct',
      weekday: 'wed',
    },
  },
  {
    id: 3,
    title: 'Event 3',
    message: {
      cardArtist: 'Person',
      cardGenre: 'Rock',
    },
    date: {
      day: '14',
      month: 'Oct',
      weekday: 'wed',
    },
  },
  {
    id: 4,
    title: 'Event 4',
    message: {
      cardArtist: 'Person',
      cardGenre: 'Rock',
    },
    date: {
      day: '14',
      month: 'Oct',
      weekday: 'wed',
    },
  },
  {
    id: 5,
    title: 'Event 5',
    message: {
      cardArtist: 'Person',
      cardGenre: 'Rock',
    },
    date: {
      day: '14',
      month: 'Oct',
      weekday: 'wed',
    },
  },
  {
    id: 6,
    title: 'Event 6',
    message: {
      cardArtist: 'Person',
      cardGenre: 'Rock',
    },
    date: {
      day: '14',
      month: 'Oct',
      weekday: 'wed',
    },
  },
  {
    id: 7,
    title: 'Event 7',
    message: {
      cardArtist: 'Person',
      cardGenre: 'Rock',
    },
    date: {
      day: '14',
      month: 'Oct',
      weekday: 'wed',
    },
  },
  {
    id: 8,
    title: 'Event 8',
    message: {
      cardArtist: 'Person',
      cardGenre: 'Rock',
    },
    date: {
      day: '14',
      month: 'Oct',
      weekday: 'wed',
    },
  },
  {
    id: 9,
    title: 'Event 9',
    message: {
      cardArtist: 'Person',
      cardGenre: 'Rock',
    },
    date: {
      day: '14',
      month: 'Oct',
      weekday: 'wed',
    },
  },
  {
    id: 10,
    title: 'Event 10',
    message: {
      cardArtist: 'Person',
      cardGenre: 'Rock',
    },
    date: {
      day: '14',
      month: 'Oct',
      weekday: 'wed',
    },
  },
];

/* THIS IS A FAKE API but it will match <<< sort of >>> when i actually implement the backend
 I WILL ALSO EVENTUALLY pull this up one level but you know fuck it */

function* fetchEvents() {
  try {
    yield call(delay, 500);
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
