import React from 'react'
import { useHistory} from "react-router-dom";
import styles from '../DiceRoller/DiceRoller.module.scss'





export default function() {
  
    let history=useHistory();
    
    const Click =() => {
      history.push("/dice-roller");
    }
  return (
    <div className= {styles.click}>Welcome to Home<br></br>
      <button  onClick={Click}>Click to play game </button>
    </div>
  )
}