/* eslint-disable no-console */
import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import style from './DiceRoller.module.scss';
import { Actions } from '../../store/actions/DiceRoller';

export default function() {
  const GenerateRandoms = useSelector(state => state.DiceRoller);
  const dispatch = useDispatch();

  const generateNumbers = () => {
    const ran1 = Math.ceil(Math.random() * 6);
    const ran2 = Math.ceil(Math.random() * 6);
    const data = [ran1, ran2];
    dispatch(Actions.randomNumbers(data));
  };

  useEffect(() => {
    generateNumbers();
  }, [generateNumbers.Numbers]);
  console.log('####', GenerateRandoms.Numbers);

  const changeInput = event => {
    const reg1 = /([1-6])/g;
    const reg2 = /,/g;

    if (event.target.value.length === 1 && event.target.value[0].match(reg1)) {
      dispatch(Actions.getInput(event.target.value));
    } else if (
      event.target.value.length === 2 &&
      event.target.value[1].match(reg2) &&
      event.target.value[0].match(reg1)
    ) {
      dispatch(Actions.getInput(event.target.value));
    } else if (
      event.target.value.length === 3 &&
      event.target.value[2].match(reg1) &&
      event.target.value[1].match(reg2) &&
      event.target.value[0].match(reg1)
    ) {
      dispatch(Actions.getInput(event.target.value));
    } else if (event.target.value.length === 0) {
      dispatch(Actions.getInput(event.target.value));
    }

    let data = event.target.value;
    data = data.split(',');
    dispatch(Actions.getInput(data));
  };

  const checkResult = handle => {
    handle.preventDefault();
    if (
      parseInt(GenerateRandoms.Input[0] === GenerateRandoms.Numbers[0], 10) &&
      parseInt(GenerateRandoms.Input[1] === GenerateRandoms.Numbers[1], 10)
    ) {
      dispatch(Actions.checkResult('Winner'));
    } else {
      dispatch(Actions.checkResult('Try Again'));
    }
  };
  console.log('@@@@', GenerateRandoms.Input[0]);
  console.log('Random is', GenerateRandoms.Numbers[0]);
  return (
    <div className={style.container}>
      <form name="GuessNumber" onSubmit={checkResult}>
        <h1> Enter The Numbers</h1>
        <TextField
          name="numbers"
          maxLength="3"
          onChange={changeInput}
          id="standard-basic"
          label="Enter the numbers here"
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          href="#contained-buttons"
        >
          Submit Guess
        </Button>
        <br />
        <br />
        {GenerateRandoms.Result}
        <div className={style.status}>
          <br />
        </div>
      </form>
    </div>
  );
}
