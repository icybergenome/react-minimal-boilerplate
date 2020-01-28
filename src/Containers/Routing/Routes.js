import React from 'react'
import DiceRoller from '../DiceRoller/DiceRoller'
 import ProfileViewer from '../Profile Viewer/ProfileViewer'
 import ProfileClass from '../ProfileClass/ProfileClass.jsx'
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
      <Route path="/profile-class"><ProfileClass /></Route>
    </Switch>
    
  )
}