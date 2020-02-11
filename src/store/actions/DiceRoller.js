/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';

export const ActionTypes = {
  RANDOM: 'actions/DiceRoller/RANDOM',
  RESULT: 'actions/DiceRoller/RESULT',
};

const randomNumbers = () => {
  const ran1 = Math.ceil(Math.random() * 6);
  const ran2 = Math.ceil(Math.random() * 6);
  const data = [ran1, ran2];
  console.log('@@@&&&&&&', data);
  return {
    type: ActionTypes.RANDOM,
    data,
  };
};

const declareWinner = payload => {
  console.log('DW:::', payload);
  return {
    type: ActionTypes.RESULT,
    payload,
  };
};
const checkResult = () => {};
// const getInput = payload => {
//   return {
//     type: ActionTypes.INPUT,
//     payload,
//   };
// };
// const checkResult = handle => {
//   handle.preventDefault();
//   if (
//     parseInt(GenerateRandoms.Input[0] === GenerateRandoms.Numbers[0], 10) &&
//     parseInt(GenerateRandoms.Input[1] === GenerateRandoms.Numbers[1], 10)
//   ) {
//     dispatch(Actions.checkResult('Winner'));
//   } else {
//     dispatch(Actions.checkResult('Try Again'));
//   }
//   return {
//     type: ActionTypes.RESULT,
//     payload,
//   };
// };

export const Actions = {
  randomNumbers,
  declareWinner,
};
//   checkResult,
//   getInput,
// };
