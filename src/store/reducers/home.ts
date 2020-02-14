import { ActionTypes, HomeActions } from '../actions/home';

export interface IHomeState {
  welcomeText: string
}

const initialState: IHomeState = {
  welcomeText: 'Av: Boilerplate',
};

export default (state = initialState, action: HomeActions) => {
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
