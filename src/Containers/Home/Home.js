import React from "react";
import { useHistory } from "react-router-dom";
//import style from '../../../src/guessnumber.module';
import Button from '../Guess-the-number/buttons'
export default function () {
  let history = useHistory();

  const gotoGuess = () => {
    history.push("/guessthenumber");
  }
  const gotoFetch = () =>{
    history.push("/galleryviewer");
  }
  return (
    <div>
      <Button label="Guess-The-Number" onClick={gotoGuess} color="primary" />
      <Button label="View Gallery" onClick={gotoFetch} color="primary" />
    </div>
  )
}

