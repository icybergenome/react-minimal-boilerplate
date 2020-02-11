import { ActionTypes } from '../actions/DiceRoller';

const initialState = {
  Numbers: '',
  Result: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.RANDOM: {
      console.log('+++++++++', action);
      return {
        ...state,
        Numbers: action.data,
      };
    }
    case ActionTypes.RESULT: {
      if (
        action.payload.GeneratedNumbers[0] ===
          parseInt(action.payload.InputData[0], 10) &&
        action.payload.GeneratedNumbers[1] ===
          parseInt(action.payload.InputData[1], 10)
      ) {
        return {
          ...state,
          Result: 'winner',
        };
      }
      return {
        ...state,
        Result: 'try again',
      };
    }
    default:
      return state;
  }
};
