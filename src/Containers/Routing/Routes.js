import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DiceRoller from '../DiceRoller/DiceRoller';
import Crud from '../CrudCustomers/Crud';

import Home from '../Home/Home';

export default function() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/dice-roller">
        <DiceRoller />
      </Route>
      <Route path="/ui-table">
        <Crud />
      </Route>
    </Switch>
  );
}
