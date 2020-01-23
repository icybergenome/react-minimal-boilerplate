import React from 'react'
import DiceRoller from '../DiceRoller/DiceRoller'
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
    </Switch>
    
  )
}