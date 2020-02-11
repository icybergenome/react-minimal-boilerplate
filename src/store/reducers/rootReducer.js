import { combineReducers } from 'redux';
import home from './home';
import crud from './crudCustomers';

const rootReducer = combineReducers({
  Home: home,
  CrudCustomers: crud,
});

export default rootReducer;
