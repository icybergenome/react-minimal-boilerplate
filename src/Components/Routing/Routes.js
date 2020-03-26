import React from 'react'
import Display from '../CompleteDisplay/display'
import {
  Switch,
  Route
} from 'react-router-dom'


export default function () {
  return (
    <Switch>
      <Route path="/" exact><Display />
      </Route>
    </Switch>
  )
}