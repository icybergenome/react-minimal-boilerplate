export enum ActionTypes {
  WELCOME_TEXT= 'actions/home/WELCOME_TEXT',
};

interface SetWelcomeText {
  type: ActionTypes.WELCOME_TEXT,
  payload: string
}

const setWelcomeText = (payload: string): SetWelcomeText => {
  return {
    type: ActionTypes.WELCOME_TEXT,
    payload,
  };
};

export type HomeActions = SetWelcomeText


export const Actions = {
  setWelcomeText,
};
