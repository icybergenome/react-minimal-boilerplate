import React from 'react'
import { useHistory } from "react-router-dom";
export default function() {
  function HomeButton() {
    let history = useHistory();
  
    function handleClick() {
      history.push("/home");
    }
  }
  return (
    <div>
      {/* This is Home */}
      <button type="button" onClick={handleClick}>
      Go home
    </button>
    </div>
    
  )
}