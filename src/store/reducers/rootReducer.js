import { combineReducers } from 'redux';
import home from './home';

const rootReducer = combineReducers({
  Home: home,
});

export default rootReducer;
