import { fork } from 'redux-saga/effects';
import DataSourceSaga from './DataSourceSaga';
import create from '../services/Api';

const apiService = create('https://www.omdbapi.com/?apikey=2aa43e7');

// start the daemons
export default function* root() {
  yield fork(DataSourceSaga(apiService).watcher);
}
