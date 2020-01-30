import React from 'react'
import DiceRoller from '../DiceRoller/DiceRoller'
// import Profiles from '../Profiles.jsx/index.js.js'
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from '../Home/Home.js'

export default function() {
  return (
    <Switch>
      <Route path="/" exact><Home /></Route>
      <Route path="/dice-roller"><DiceRoller /></Route>      
      {/* <Route path="/Profiles"><Profiles /></Route> */}
    </Switch>
    
  )
}