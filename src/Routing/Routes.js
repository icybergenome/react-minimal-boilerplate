import React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from '../Containers/Home/Home';
import Form from '../Containers/Calculator/Form.jsx';
import PhotoGallery from '../Containers/PhotoGallery/photoGallery.js';
import HooksUsage from '../Containers/HooksUsage/Hooks.js';
import NavBar from '../NavBar';

export default function() {
  return (
    <Switch>
      <NavBar />
      <Route path="/" exact><Home /></Route>
      <Route path="/Calculator" exact><Form /></Route>
      <Route path="/PhotoGallery" exact><PhotoGallery /></Route>
      <Route path="/Hooks" exact><HooksUsage /></Route>

    </Switch>
  )
}
