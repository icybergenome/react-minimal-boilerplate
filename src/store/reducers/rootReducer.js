import { combineReducers } from 'redux';
import home from './home';
import diceRoller from './DiceRoller';

const rootReducer = combineReducers({
  Home: home,
  DiceRoller: diceRoller,
});

export default rootReducer;
