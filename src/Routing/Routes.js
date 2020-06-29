import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from '../Containers/Home/Home'
import Guess from '../Containers/Guess-the-number/GuessNumber'
import Fetch from '../Containers/FetchData/FetchData'



export default function () {
  return (
    <Switch>
      <Route path="/" exact><Home /></Route>
      <Route path="/guessthenumber" ><Guess /></Route>
      <Route path="/galleryviewer" exact><Fetch /></Route>

    </Switch>
  )
}