import React from 'react'
import { useHistory} from "react-router-dom";



export default function() {
  
    let history=useHistory();
    
    const Click =() => {
      history.push("/dice-roller");
    }
  return (
    <div>Welcome to Home<br></br>
      <button onClick={Click}>Click to play game </button>
    </div>
  )
}