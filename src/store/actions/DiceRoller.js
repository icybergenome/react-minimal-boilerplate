export const ActionTypes = {
  RANDOM: 'actions/DiceRoller/RANDOM',
  INPUT: 'actions/DiceRoller/INPUT',
  RESULT: 'actions/DiceRoller/RESULT',
};
const randomNumbers = payload => {
  return {
    type: ActionTypes.RANDOM,
    payload,
  };
};
const getInput = payload => {
  return {
    type: ActionTypes.INPUT,
    payload,
  };
};
const checkResult = payload => {
  return {
    type: ActionTypes.RESULT,
    payload,
  };
};

export const Actions = {
  randomNumbers,
  checkResult,
  getInput,
};
