export const ActionTypes = {
  WELCOME_TEXT: 'actions/home/WELCOME_TEXT',
};

const setWelcomeText = payload => {
  return {
    type: ActionTypes.WELCOME_TEXT,
    payload,
  };
};

export const Actions = {
  setWelcomeText,
};
