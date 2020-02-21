import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Containers/Home/Home';
// eslint-disable-next-line import/extensions
import Form from '../Containers/Calculator/Form.jsx';
import PhotoGallery from '../Containers/PhotoGallery/PhotoGallery';
import HooksUsage from '../Containers/HooksUsage/Hooks';

export default function() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/Calculator" exact>
        <Form />
      </Route>
      <Route path="/PhotoGallery" exact>
        <PhotoGallery />
      </Route>
      <Route path="/Hooks" exact>
        <HooksUsage />
      </Route>
    </Switch>
  );
}
