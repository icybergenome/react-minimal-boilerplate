import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Containers/Home/Home';
import DiceRoller from '../Containers/DiceRoller/DiceRoller';
import Crud from '../Containers/CrudCustomers/Crud';
import UserData from '../Components/GetData';

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
