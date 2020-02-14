import { combineReducers } from 'redux';
import home from './home';
import profileClass from './profileClass';
import { IHomeState } from './home'
import { IProfileClassState } from './profileClass'


export interface IReducersState {
  Home: IHomeState
  ProfileClass: IProfileClassState
}

const rootReducer = combineReducers({
  Home: home,
  ProfileClass: profileClass,
});

export default rootReducer;
