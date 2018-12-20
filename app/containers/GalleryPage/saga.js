import { takeLatest, put } from 'redux-saga/effects';
import { loadAlbumsSuccess, loadAlbumsFailure } from './actions';
import { LOAD_ALBUMS } from './constants';
import { Api } from '../../api';

// Individual exports for testing

function* fetchAlbums() {
  try {
    const albums = yield Api.loadAlbums();
    console.log('From Saga:', albums);
    yield put(loadAlbumsSuccess(albums));
  } catch (error) {
    console.log(error);
    yield put(loadAlbumsFailure(error));
  }
}

export default function* gallerySaga() {
  yield takeLatest(LOAD_ALBUMS, fetchAlbums);
}
