import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import style from '../../../src/guessnumber.module';
const random = () => {
  return Math.floor(Math.random() * 100);

};
const secret = random();
let attempts = 0;
const calculateattempts = () => {
  attempts++;
};



const Guess = () => {
  let history = useHistory();
  const backToHome = () => {
    history.push("/");
  }
  const [status, setStatus] = useState("");
  calculateattempts();
  const check = (event) => {
    event.preventDefault();
    let number = parseInt(form.firstName.value);
    if (number === secret) {
      setStatus(`Congrats You guessed that right on attempt number ${attempts}`);
      return 0;
    }
    let result = number > secret ? setStatus(`Enter number less than ${number}`) : setStatus(`Enter number greater than ${number}`);

  }

  return (
    <div name="main" className={style.container}>
      <div className={style.wrapper}>
        <form name="form" onSubmit={check}>
          <div>
            Guess the Number
          </div>
          Enter Number between 0 & 100: <br></br><input type="text" name="firstName"></input>
          <br></br>
          Check: <button type="submit" className={style.checkbtn}>Check</button>
        </form>
        <div name="status">Status: {status}</div>
        <div> <button onClick={backToHome} className={style.guessandhome}>HOME</button>
        </div>
      </div>
    </div>
  )
}

export default Guess;