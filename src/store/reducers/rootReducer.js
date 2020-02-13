import { combineReducers } from 'redux';
import home from './home';
import profileClass from './profileClass';

const rootReducer = combineReducers({
  Home: home,
  ProfileClass: profileClass,
});

export default rootReducer;
