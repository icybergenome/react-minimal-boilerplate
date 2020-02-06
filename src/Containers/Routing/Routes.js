import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DiceRoller from '../DiceRoller/DiceRoller';
import Crud from '../CrudCustomers/Crud';
import UserData from '../../Components/GetData';

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
      <Route path="/ui-table" exact>
        <Crud />
      </Route>
      <Route
        path="/ui-table/:id"
        exact
        render={props => <UserData {...props} />}
      />
    </Switch>
  );
}
