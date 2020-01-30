  import React from 'react'
  import DiceRoller from '../DiceRoller/DiceRoller'
  import Crud from '../Crud/crudmain.jsx'
  import Data from '../fetchdata.jsx'

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
       <Route path="/profile-viewer"><Data/></Route>
      <Route path="/profile-class"><Crud /></Route>
    </Switch>
    
  )
}