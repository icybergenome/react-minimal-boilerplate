import React from 'react'
import { useHistory} from "react-router-dom";
import styles from '../DiceRoller/DiceRoller.module.scss'





export default function() {
  
    let history=useHistory();
    
    const Click =() => {
      history.push("/dice-roller");
    }
    const Profile =() => {
   history.push("/profile-viewer");    
    }

  return (
    <div className= {styles.click}>Welcome to Home<br></br>
      <button  onClick={Click}>Click to play game </button><br>
      </br>
      <button onClick={Profile}>Click to view Profiles</button>
    </div>
  )
}