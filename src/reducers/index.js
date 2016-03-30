import { combineReducers } from 'redux';

import loading from './loading';
import repos from './repos';

const rootReducer = combineReducers({
  loading,
  repos
});

export default rootReducer;

