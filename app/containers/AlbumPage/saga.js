import { takeLatest, put } from 'redux-saga/effects';
import { Api } from '../../api';
import { loadAlbumByIdSuccess, loadAlbumByIdFailure } from './actions';
import { LOAD_ALBUM_BY_ID } from './constants';

export function* fetchAlbumById(action) {
  try {
    const album = yield Api.loadAlbumById(action.albumId);
    yield put(loadAlbumByIdSuccess(album));
  } catch (error) {
    yield put(loadAlbumByIdFailure(error));
  }
}

// Individual exports for testing
export default function* albumPageSaga() {
  yield takeLatest(LOAD_ALBUM_BY_ID, fetchAlbumById);
}
