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
      <Button props={{label : "Guess-The-Number", functions : gotoGuess, color:"primary"}} />
      <Button props={{label: "View-Gallery", functions : gotoFetch, color:"primary"}} />      
    </div>
  )
}

