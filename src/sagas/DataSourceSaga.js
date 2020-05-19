import { put, call, takeEvery } from 'redux-saga/effects';
import Types from '../actions/Types';
import * as DataSourceActions from '../actions/DataSourceActions';
// attempts to login
export default (api) => {
  function* worker(action) {
    try {
      let response;
      switch (action.type) {
        case Types.FETCH_MOVIES:
          response = yield call(api.fetchMovies, action.searchInput);
          if (response.status === 200) {
            yield put(DataSourceActions.fetchMoviesSuccessful(response.data));
          }
          break;
        case Types.FETCH_MOVIE:
          response = yield call(api.fetchMovie, action.searchInput);
          if (response.status === 200) {
            yield put(DataSourceActions.fetchMovieSuccessful(response.data));
          }
          break;
        default:
          break;
      }
    } catch (error) {
      // console.log(error);
    }
  }

  function* watcher() {
    yield takeEvery(
      [
        Types.FETCH_MOVIES,
        Types.FETCH_MOVIE,
      ],
      worker
    );
  }
  return {
    worker,
    watcher,
  };
};
