import { ActionTypes } from '../actions/home';

const initialState = {
  welcomeText: 'Av: Boilerplate',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.WELCOME_TEXT:
      return {
        ...state,
        welcomeText: action.payload,
      };

    default:
      return state;
  }
};
