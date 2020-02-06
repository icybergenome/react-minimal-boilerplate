import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Containers/Home/Home';

export default function() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}
