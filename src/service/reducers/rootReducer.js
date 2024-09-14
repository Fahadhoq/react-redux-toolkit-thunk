import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  todosReducer: todosReducer
});

export default rootReducer;
