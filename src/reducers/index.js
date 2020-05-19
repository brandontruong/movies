import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import DataSourceReducer from './DataSourceReducer';

const createRootReducer = (history) => combineReducers({
  dataSource: DataSourceReducer,
  router: connectRouter(history),

});
export default createRootReducer;
