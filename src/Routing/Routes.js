import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from '../Containers/Home/Home'
import Home from '../Containers/Calculator/calculator'

export default function() {
  return (
    <Switch>
      <Route path="/" exact><Home /></Route>
      <Route path="/calulator" exact><calculator /></Route>

    </Switch>
  )
}
