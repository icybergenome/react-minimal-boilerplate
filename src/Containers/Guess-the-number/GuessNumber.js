import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import style from '../../../src/guessnumber.module';
import Button from './buttons'
const random = () => {
  return Math.floor(Math.random() * 100);

};
const secret = random();
let attempts = 0;
const calculateattempts = () => {
  attempts++;
 
};




alert("Welcome to guess the number");
const Guess = () => {
  let history = useHistory();
  const backToHome = () => {
    history.push("/");
  }
  const [status, setStatus] = useState("");
 //const [joke , setjoke] = useState({ });

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
          Check: <Button props={{label: "Check", functions: check,color:"secondary"}}/>
        </form>
        <div name="status">Status: {status}</div>
        <div> <Button props={{label: "Home", functions: backToHome,color:"primary"}} />
        </div>
      </div>
    </div>
  )
}

export default Guess;