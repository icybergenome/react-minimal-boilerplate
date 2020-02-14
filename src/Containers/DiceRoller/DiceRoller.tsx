import React, { useState, useEffect } from 'react';
import style from './DiceRoller.module.scss';

let ran1:number;
let ran2:number;

const random = () => {
  ran1= Math.ceil(Math.random() * 6);
  ran2 = Math.ceil(Math.random() * 6);
};

const Dice = () => {
  const [result, changeResult] = useState('');
  const [userdata, changeUserdata] = useState();
  const [enterdata, changeEnterdata] = useState('');

  useEffect(() => {
    random();
  }, [result]);



  const check = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reg1 = /([1-6])/g;
    const reg2 = /,/g;

    if (event.target.value.length === 1 && event.target.value[0].match(reg1)) {
      changeEnterdata(event.target.value);
    } else if (
      event.target.value.length === 2 &&
      event.target.value[1].match(reg2) &&
      event.target.value[0].match(reg1)
    ) {
      changeEnterdata(event.target.value);
    } else if (
      event.target.value.length === 3 &&
      event.target.value[2].match(reg1) &&
      event.target.value[1].match(reg2) &&
      event.target.value[0].match(reg1)
    ) {
      changeEnterdata(event.target.value);
    } else if (event.target.value.length === 0) {
      changeEnterdata('');
    }
    let data: string | string[] = event.target.value;
    data = data.split(',');
    changeUserdata([data[0], data[1]]);
  };

  const handleinput = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      parseInt(userdata[0], 10) === ran1 &&
      parseInt(userdata[1], 10) === ran2
    ) {
      changeResult('Winner');
    } else {
      changeResult('Try Again');
    }
  };
  return (
    <div className={style.container}>
      <form name="GuessNumber" onSubmit={handleinput}>
        <h1>Enter the numbers to Guess</h1>
        <input
          value={enterdata}
          type="text"
          name="numbers"
          maxLength={3}
          onChange={check}
        />
        <br />
        <br />
        <input className={style.submit} type="submit" />
        <br />
        <br />

        <div className={style.status}>
          Status: {result}
          <br />
        </div>
      </form>
    </div>
  );
};

export default Dice;
