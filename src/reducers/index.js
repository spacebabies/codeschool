import { combineReducers } from 'redux';
import codeReducer from './code_reducer';

const rootReducer = combineReducers({
  code: codeReducer
});

export default rootReducer;
