import React from "react";
import { useHistory } from "react-router-dom";
import style from '../../../src/guessnumber.module';


export default function () {
  let history = useHistory();

  const handleClick = () => {
    history.push("/guessthenumber");
  }


  return (
    <div>
      <button className={style.guessandhome} onClick={handleClick} >Guess-The-Number</button>
    </div>
  )
}

