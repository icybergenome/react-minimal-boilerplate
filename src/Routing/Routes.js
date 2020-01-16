import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from '../Containers/Home/Home';
import Form from '../Containers/Calculator/Form.jsx';
import PhotoGallery from '../Containers/PhotoGallery/photoGallery.js';

export default function() {
  return (
    <Switch>
      <Route path="/" exact><Home /></Route>
      <Route path="/Calculator" exact><Form /></Route>
      <Route path="/PhotoGallery" exact><PhotoGallery /></Route>

    </Switch>
  )
}
