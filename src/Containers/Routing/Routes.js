import React from 'react'
import DiceRoller from '../DiceRoller/DiceRoller'
 import ProfileViewer from '../Profile Viewer/ProfileViewer'
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
      <Route path="/profile-viewer"><ProfileViewer /></Route>
    </Switch>
    
  )
}