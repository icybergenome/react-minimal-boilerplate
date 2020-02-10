import { ActionTypes } from '../actions/DiceRoller';

const initialState = {
  Numbers: '',
  Input: '',
  Result: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.RANDOM:
      return {
        ...state,
        Numbers: action.payload,
      };
    case ActionTypes.INPUT:
      return {
        ...state,
        Input: action.payload,
      };
    case ActionTypes.RESULT:
      return {
        ...state,
        Result: action.payload,
      };
    default:
      return state;
  }
};
